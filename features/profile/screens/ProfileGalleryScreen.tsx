import { useState, useCallback, useRef, useMemo } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Dimensions,
  StatusBar,
  FlatList,
  Modal,
  PanResponder,
  Animated,
} from 'react-native';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Grid3x3,
  Play,
  Radio,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  ChevronLeft,
  MoreVertical,
  VolumeX,
  Volume2,
  Settings,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  FeedSourceType,
  ProfileData,
  IPost,
  IProfileData,
} from '@/data/mockData';
import { HiddenScreensTopBar } from '@/shared/components/HiddenScreensTopBar';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const GRID_ITEM_SIZE = SCREEN_WIDTH / 3;

type TabType = 'grid' | 'videos' | 'tagged';

export function ProfileGalleryScreen() {
  const { id, from, sourceType } = useLocalSearchParams<{
    id: string;
    from: string;
    sourceType: FeedSourceType;
  }>();
  const insets = useSafeAreaInsets();


  // Find profile data based on ID
  // console.log('PROFILEID::::::',)
  const profile: IProfileData = ProfileData.find((p) => p.id === id) || ProfileData[0];

  // Filter posts for this profile
  const profilePosts = profile.posts

  const [activeTab, setActiveTab] = useState<TabType>('grid');
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
  const [viewerVisible, setViewerVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const flatListRef = useRef<FlatList>(null);
  const swipeX = useRef(new Animated.Value(0)).current;

  const filteredPosts = useMemo(() => {
    if (activeTab === 'videos') {
      return profilePosts.filter((p) => p.type === 'video');
    }
    return profilePosts;
  }, [activeTab, profilePosts]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponderCapture: (_, gestureState) => {
          return (
            Math.abs(gestureState.dx) > 12 &&
            Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
          );
        },
        onPanResponderTerminationRequest: () => false,
        onPanResponderMove: (_, gestureState) => {
          if (gestureState.dx > 0) {
            swipeX.setValue(gestureState.dx);
          }
        },
        onPanResponderRelease: (_, gestureState) => {
          if (gestureState.dx > 100) {
            // Swipe right to close viewer
            setViewerVisible(false);
          }
          Animated.spring(swipeX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        },
      }),
    [],
  );

  const handlePostPress = (post: IPost, index: number) => {
    setSelectedPost(post);
    setCurrentIndex(index);
    setViewerVisible(true);
  };

  const handleCloseViewer = () => {
    setViewerVisible(false);
    setSelectedPost(null);
  };

  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const renderGridItem = ({ item, index }: { item: IPost; index: number }) => {
    return (
      <Pressable
        onPress={() => handlePostPress(item, index)}
        style={{
          width: GRID_ITEM_SIZE,
          height: GRID_ITEM_SIZE,
          padding: 1,
        }}
      >
        <Image
          source={{ uri: item.thumbnail }}
          style={{ width: '100%', height: '100%' }}
          contentFit='cover'
        />

        {/* Video indicator */}
        {item.type === 'video' && (
          <View className='absolute top-2 right-2'>
            <Play size={20} color='#fff' fill='#fff' />
          </View>
        )}

        {/* Stats overlay */}
        <View className='absolute bottom-0 left-0 right-0 p-2 flex-row items-center justify-between'>
          <View className='flex-row items-center gap-1'>
            <Heart size={14} color='#fff' fill='#fff' />
            <Text className='text-white text-xs font-semibold'>
              {formatCount(item.likesCount)}
            </Text>
          </View>
          {item.viewsCount && (
            <View className='flex-row items-center gap-1'>
              <Play size={14} color='#fff' />
              <Text className='text-white text-xs font-semibold'>
                {formatCount(item.viewsCount)}
              </Text>
            </View>
          )}
        </View>
      </Pressable>
    );
  };

  const handleDirection = () => {
    router.push({
      pathname: '/church/[id]',
      params: {
        id,
        from: `/profile/${id}`,
      },
    });
  };

  const renderFullScreenViewer = () => {
    if (!selectedPost || !viewerVisible) return null;

    return (
      <Modal
        visible={viewerVisible}
        animationType='slide'
        onRequestClose={handleCloseViewer}
      >
        <View {...panResponder.panHandlers} className='flex-1 bg-black'>
          <StatusBar barStyle='light-content' />

          {/* Background Image/Video */}
          <Image
            source={{ uri: selectedPost.thumbnail }}
            style={{ width: '100%', height: '100%' }}
            contentFit='cover'
          />

          {/* Gradient Overlay */}
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'transparent', 'rgba(0,0,0,0.8)']}
            locations={[0, 0.3, 0.85]}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          />

          {/* Top Bar */}
          <View
            className='absolute top-0 left-0 right-0 flex-row items-center justify-between px-4'
            style={{ paddingTop: insets.top + 12 }}
          >
            <Pressable
              onPress={handleCloseViewer}
              className='w-10 h-10 items-center justify-center'
            >
              <ChevronLeft size={28} color='#fff' />
            </Pressable>

            <View className='flex-row items-center gap-1'>
              <Image
                source={{ uri: profile.avatar }}
                style={{ width: 32, height: 32 }}
                className='rounded-full'
                contentFit='cover'
              />
              <Text className='text-white font-semibold ml-2'>
                {profile.name}
              </Text>
            </View>

            <Pressable className='w-10 h-10 items-center justify-center'>
              <MoreVertical size={24} color='#fff' />
            </Pressable>
          </View>

          {/* Right Action Bar */}
          <View className='absolute right-4 bottom-32 items-center gap-6'>
            <Pressable
              className='items-center'
              onPress={() => setIsLiked(!isLiked)}
            >
              <View className='w-12 h-12 items-center justify-center'>
                <Heart
                  size={28}
                  color='#fff'
                  fill={isLiked ? '#fff' : 'transparent'}
                  strokeWidth={2}
                />
              </View>
              <Text className='text-white text-xs mt-1'>
                {formatCount(selectedPost.likesCount)}
              </Text>
            </Pressable>

            <Pressable className='items-center'>
              <View className='w-12 h-12 items-center justify-center'>
                <MessageCircle size={28} color='#fff' strokeWidth={2} />
              </View>
              <Text className='text-white text-xs mt-1'>
                {formatCount(selectedPost.commentsCount)}
              </Text>
            </Pressable>

            <Pressable
              className='items-center'
              onPress={() => setIsSaved(!isSaved)}
            >
              <View className='w-12 h-12 items-center justify-center'>
                <Bookmark
                  size={28}
                  color='#fff'
                  fill={isSaved ? '#fff' : 'transparent'}
                  strokeWidth={2}
                />
              </View>
              <Text className='text-white text-xs mt-1'>Save</Text>
            </Pressable>

            <Pressable className='items-center'>
              <View className='w-12 h-12 items-center justify-center'>
                <Share2 size={28} color='#fff' strokeWidth={2} />
              </View>
              <Text className='text-white text-xs mt-1'>Share</Text>
            </Pressable>
          </View>

          {/* Bottom Info */}
          <View className='absolute bottom-4 left-4 right-20'>
            {selectedPost.speaker && (
              <Text className='text-white font-semibold text-sm mb-1'>
                {selectedPost.speaker}
              </Text>
            )}
            {selectedPost.description && (
              <Text
                className='text-white/90 text-sm leading-5'
                numberOfLines={2}
              >
                {selectedPost.description}
              </Text>
            )}
            {selectedPost.type === 'video' && (
              <Pressable
                className='mt-3 w-10 h-10 bg-white/20 rounded-full items-center justify-center'
                onPress={() => setIsMuted(!isMuted)}
              >
                {isMuted ? (
                  <VolumeX size={20} color='#fff' />
                ) : (
                  <Volume2 size={20} color='#fff' />
                )}
              </Pressable>
            )}
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View className='flex-1 bg-white'>
      {/* Header */}
      <HiddenScreensTopBar
        show={true}
        title={profile.username}
        navigateTo={from}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[2]}
      >
        {/* Profile Info */}
        <View className='px-4 py-6'>
          {/* Avatar & Stats */}
          <View className='flex-row items-center justify-between mb-4'>
            <Image
              source={{ uri: profile.avatar }}
              style={{ width: 88, height: 88 }}
              className='rounded-full'
              contentFit='cover'
            />

            <View className='flex-1 flex-row justify-around ml-6'>
              <View className='items-center'>
                <Text className='text-xl font-bold text-gray-900'>
                  {formatCount(profile.postsCount)}
                </Text>
                <Text className='text-sm text-gray-600 mt-1'>Posts</Text>
              </View>
              <View className='items-center'>
                <Text className='text-xl font-bold text-gray-900'>
                  {formatCount(profile.membersCount)}
                </Text>
                <Text className='text-sm text-gray-600 mt-1'>Members</Text>
              </View>
              <View className='items-center'>
                <Text className='text-xl font-bold text-gray-900'>
                  {formatCount(profile.memberCount)}
                </Text>
                <Text className='text-sm text-gray-600 mt-1'>Following</Text>
              </View>
            </View>
          </View>

          {/* Name & Bio */}
          <View className='mb-4'>
            <Text className='text-base font-semibold text-gray-900 mb-1'>
              {profile.name}
            </Text>
            <Text className='text-sm text-gray-700 leading-5'>
              {profile.bio}
            </Text>
          </View>

          {/* Action Buttons */}
          <View className='flex-row gap-2'>
            <Pressable className='flex-1 bg-indigo-600 rounded-lg py-2.5'>
              <Text className='text-white text-center font-semibold'>
                Follow
              </Text>
            </Pressable>

            {FeedSourceType.Church === profile.sourceType && (
              <Pressable
                onPress={handleDirection}
                className='flex-1 bg-gray-200 rounded-lg py-2.5'
              >
                <Text className='text-gray-900 text-center font-semibold'>
                  About
                </Text>
              </Pressable>
            )}
            <Pressable className='bg-gray-200 rounded-lg py-2.5 px-4'>
              <MoreVertical size={20} color='#111827' />
            </Pressable>
          </View>
        </View>

        {/* Tabs */}
        <View className='bg-white border-t border-b border-gray-200 flex-row'>
          <Pressable
            className={`flex-1 py-3 items-center border-b-2 ${
              activeTab === 'grid' ? 'border-gray-900' : 'border-transparent'
            }`}
            onPress={() => setActiveTab('grid')}
          >
            <Grid3x3
              size={24}
              color={activeTab === 'grid' ? '#111827' : '#6b7280'}
            />
          </Pressable>
          <Pressable
            className={`flex-1 py-3 items-center border-b-2 ${
              activeTab === 'videos' ? 'border-gray-900' : 'border-transparent'
            }`}
            onPress={() => setActiveTab('videos')}
          >
            <Radio
              size={24}
              color={activeTab === 'videos' ? '#111827' : '#6b7280'}
            />
          </Pressable>
          <Pressable
            className={`flex-1 py-3 items-center border-b-2 ${
              activeTab === 'tagged' ? 'border-gray-900' : 'border-transparent'
            }`}
            onPress={() => setActiveTab('tagged')}
          >
            <Bookmark
              size={24}
              color={activeTab === 'tagged' ? '#111827' : '#6b7280'}
            />
          </Pressable>
        </View>

        {/* Gallery Grid */}
        <FlatList
          data={filteredPosts}
          renderItem={renderGridItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </ScrollView>

      {/* Full Screen Viewer */}
      {renderFullScreenViewer()}
    </View>
  );
}
