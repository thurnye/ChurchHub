import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  PanResponder,
  Animated,
  StatusBar,
} from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  type Story,
  type FeedItem,
  FeedItems,
  Stories,
  FeedSourceType,
} from '@/data/mockData';
import {
  StoriesRow,
  FeedCard,
  StoryViewerModal,
  QuickActionsModal,
} from './components';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const STORIES_HEIGHT = 120;
const TAB_BAR_HEIGHT = 80;

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const FEED_HEIGHT =
    SCREEN_HEIGHT - (STORIES_HEIGHT + insets.top) - TAB_BAR_HEIGHT;

  const [storyViewerVisible, setStoryViewerVisible] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [quickActionsVisible, setQuickActionsVisible] = useState(false);
  const [selectedFeedItem, setSelectedFeedItem] = useState<FeedItem | null>(
    null,
  );
  const [mutedItems, setMutedItems] = useState<Set<string>>(
    new Set(FeedItems.map((i) => i.id)),
  );
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());
  const [savedItems, setSavedItems] = useState<Set<string>>(new Set());
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const flatListRef = useRef<FlatList>(null);
  const swipeX = useRef(new Animated.Value(0)).current;
  const lastTapRef = useRef<{ [key: string]: number }>({});
  const singleTapTimeoutRef = useRef<{ [key: string]: NodeJS.Timeout }>({});

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponderCapture: (_, gestureState) => {
          // Capture horizontal swipes before FlatList
          const isHorizontal =
            Math.abs(gestureState.dx) > 12 &&
            Math.abs(gestureState.dx) > Math.abs(gestureState.dy);

          if (isHorizontal) {
            setScrollEnabled(false);
          }

          return isHorizontal;
        },
        onPanResponderTerminationRequest: () => false,
        onPanResponderMove: (_, gestureState) => {
          if (gestureState.dx > 0) {
            swipeX.setValue(gestureState.dx);
          }
        },
        onPanResponderRelease: (_, gestureState) => {
          if (gestureState.dx < 100) {
            // Swipe right detected - navigate to profile
            if (selectedFeedItem) {
              handleSwipeRight(selectedFeedItem);
            }
          }
          Animated.spring(swipeX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
          setScrollEnabled(true);
        },
        onPanResponderTerminate: () => {
          Animated.spring(swipeX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
          setScrollEnabled(true);
        },
      }),
    [selectedFeedItem],
  );

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(singleTapTimeoutRef.current).forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  }, []);

  const handleSwipeRight = (item: FeedItem) => {
    router.push({
      pathname: `/profile/[id]`,
      params: { 
        id:item.sourceId,
        from: '/',
        sourceType: item.sourceType
       },
    });
  };

  const handleLongPress = (item: FeedItem) => {
    // Clear any pending single tap
    if (singleTapTimeoutRef.current[item.id]) {
      clearTimeout(singleTapTimeoutRef.current[item.id]);
      delete singleTapTimeoutRef.current[item.id];
    }
    setSelectedFeedItem(item);
    setQuickActionsVisible(true);
  };

  const handleTap = (item: FeedItem) => {
    const DOUBLE_TAP_DELAY = 250;
    const now = Date.now();
    const lastTap = lastTapRef.current[item.id];

    // Clear any existing timeout for this item
    if (singleTapTimeoutRef.current[item.id]) {
      clearTimeout(singleTapTimeoutRef.current[item.id]);
      delete singleTapTimeoutRef.current[item.id];
    }

    if (lastTap && now - lastTap < DOUBLE_TAP_DELAY) {
      // Double tap detected
      lastTapRef.current[item.id] = 0; // Reset
      toggleLike(item.id);
    } else {
      // Potential single tap - wait to confirm
      lastTapRef.current[item.id] = now;
      singleTapTimeoutRef.current[item.id] = setTimeout(() => {
        // Single tap confirmed
        if(item.sourceType === FeedSourceType.Event){
          router.push(item.primaryRoute as any);
          delete singleTapTimeoutRef.current[item.id];
        }
      }, DOUBLE_TAP_DELAY) as unknown as NodeJS.Timeout;
    }
  };

  const toggleLike = (itemId: string) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const toggleSave = (itemId: string) => {
    setSavedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const toggleMute = (itemId: string) => {
    setMutedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const renderFeedItem = useCallback(
    ({ item, index }: { item: FeedItem; index: number }) => {
      const isLiked = likedItems.has(item.id);
      const isSaved = savedItems.has(item.id);
      const isMuted = mutedItems.has(item.id);
      const isExpanded = expandedItems.has(item.id);

      return (
        <FeedCard
          item={item}
          height={FEED_HEIGHT}
          isLiked={isLiked}
          isSaved={isSaved}
          isMuted={isMuted}
          isExpanded={isExpanded}
          panResponder={panResponder}
          onTap={() => handleTap(item)}
          onLongPress={() => handleLongPress(item)}
          onPressIn={() => setSelectedFeedItem(item)}
          onToggleLike={() => toggleLike(item.id)}
          onToggleSave={() => toggleSave(item.id)}
          onToggleMute={() => toggleMute(item.id)}
          onToggleExpand={() => toggleExpand(item.id)}
        />
      );
    },
    [likedItems, savedItems, mutedItems, expandedItems, panResponder],
  );

  const handleStoryPress = (index: number) => {
    setCurrentStoryIndex(index);
    setStoryViewerVisible(true);
  };

  const handleStoryClose = () => {
    setStoryViewerVisible(false);
  };

  const handleStoryPrevious = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    } else {
      setStoryViewerVisible(false);
    }
  };

  const handleStoryNext = () => {
    if (currentStoryIndex < Stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      setStoryViewerVisible(false);
    }
  };

  return (
    <View className='flex-1 bg-black'>
      <StatusBar barStyle='dark-content' />

      {/* Fixed Stories Row */}
      <StoriesRow
        stories={Stories}
        height={STORIES_HEIGHT}
        topInset={insets.top}
        onStoryPress={handleStoryPress}
      />

      {/* Vertical Swipe Feed */}
      <FlatList
        ref={flatListRef}
        data={FeedItems}
        renderItem={renderFeedItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={false}
        snapToInterval={FEED_HEIGHT}
        decelerationRate='fast'
        getItemLayout={(_, index) => ({
          length: FEED_HEIGHT,
          offset: FEED_HEIGHT * index,
          index,
        })}
        removeClippedSubviews
        maxToRenderPerBatch={3}
        windowSize={3}
        initialNumToRender={2}
      />

      {/* Story Viewer Modal */}
      <StoryViewerModal
        visible={storyViewerVisible}
        story={Stories[currentStoryIndex] || null}
        progress={0.6}
        onClose={handleStoryClose}
        onPrevious={handleStoryPrevious}
        onNext={handleStoryNext}
      />

      {/* Quick Actions Modal */}
      <QuickActionsModal
        visible={quickActionsVisible}
        item={selectedFeedItem}
        isSaved={selectedFeedItem ? savedItems.has(selectedFeedItem.id) : false}
        onClose={() => setQuickActionsVisible(false)}
        onToggleSave={() => {
          if (selectedFeedItem) {
            toggleSave(selectedFeedItem.id);
          }
        }}
      />
    </View>
  );
}
