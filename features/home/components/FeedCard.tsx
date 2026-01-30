import { View, Text, Pressable, PanResponderInstance } from 'react-native';
import { Image } from 'expo-image';
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  VolumeX,
  Volume2,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FeedItem } from '@/data/mockData';


interface FeedCardProps {
  item: FeedItem;
  height: number;
  isLiked: boolean;
  isSaved: boolean;
  isMuted: boolean;
  isExpanded: boolean;
  panResponder: PanResponderInstance;
  onTap: () => void;
  onLongPress: () => void;
  onPressIn: () => void;
  onToggleLike: () => void;
  onToggleSave: () => void;
  onToggleMute: () => void;
  onToggleExpand: () => void;
}

export function FeedCard({
  item,
  height,
  isLiked,
  isSaved,
  isMuted,
  isExpanded,
  panResponder,
  onTap,
  onLongPress,
  onPressIn,
  onToggleLike,
  onToggleSave,
  onToggleMute,
  onToggleExpand,
}: FeedCardProps) {
  return (
    <View {...panResponder.panHandlers} style={{ height }}>
      <Pressable
        onPress={onTap}
        onLongPress={onLongPress}
        onPressIn={onPressIn}
        style={{ height }}
      >
        <View className="flex-1 bg-black">
          {/* Background Image */}
          <Image
            source={{ uri: item.thumbnail }}
            style={{ width: '100%', height: '100%' }}
            contentFit="cover"
          />

          {/* Gradient Overlay */}
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'transparent', 'rgba(0,0,0,0)']}
            locations={[0, 0.3, 0.85]}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          />

          {/* Top Overlay - Post Owner Info */}
          <View className="absolute top-4 left-4 right-20 flex-row items-center">
            <View className="flex-row items-center flex-1">
              <Text
                className="text-white font-semibold text-base mr-2"
                numberOfLines={1}
              >
                {item.postOwner}
              </Text>
              {item.denomination && (
                <View className="bg-white/20 px-2 py-0.5 rounded-full">
                  <Text className="text-white text-xs">{item.denomination}</Text>
                </View>
              )}
              {item.isLive && (
                <View className="bg-red-600 px-2 py-1 rounded ml-2 flex-row items-center">
                  <View className="w-1.5 h-1.5 bg-white rounded-full mr-1.5" />
                  <Text className="text-white text-xs font-bold">LIVE</Text>
                </View>
              )}
            </View>
          </View>

          {/* Right Action Bar */}
          <View className="absolute right-4 bottom-24 items-center gap-6">
            <Pressable className="items-center" onPress={onToggleLike}>
              <View className="w-12 h-12 items-center justify-center">
                <Heart
                  size={28}
                  color="#fff"
                  fill={isLiked ? '#fff' : 'transparent'}
                  strokeWidth={2}
                />
              </View>
              <Text className="text-white text-xs mt-1">
                {isLiked
                  ? Math.floor(Math.random() * 500) + 101
                  : Math.floor(Math.random() * 500) + 100}
              </Text>
            </Pressable>

            <Pressable className="items-center">
              <View className="w-12 h-12 items-center justify-center">
                <MessageCircle size={28} color="#fff" strokeWidth={2} />
              </View>
              <Text className="text-white text-xs mt-1">
                {Math.floor(Math.random() * 50)}
              </Text>
            </Pressable>

            <Pressable className="items-center" onPress={onToggleSave}>
              <View className="w-12 h-12 items-center justify-center">
                <Bookmark
                  size={28}
                  color="#fff"
                  fill={isSaved ? '#fff' : 'transparent'}
                  strokeWidth={2}
                />
              </View>
              <Text className="text-white text-xs mt-1">Save</Text>
            </Pressable>

            <Pressable className="items-center">
              <View className="w-12 h-12 items-center justify-center">
                <Share2 size={28} color="#fff" strokeWidth={2} />
              </View>
              <Text className="text-white text-xs mt-1">Share</Text>
            </Pressable>
          </View>

          {/* Bottom Overlay - Info */}
          <View className="absolute bottom-4 left-4 right-20">
            {item.speaker && (
              <Text className="text-white font-semibold text-sm mb-1">
                {item.speaker}
              </Text>
            )}
            {item.description && (
              <Pressable
                onPress={(e) => {
                  e.stopPropagation();
                  onToggleExpand();
                }}
              >
                <Text
                  className="text-white/90 text-sm leading-5"
                  numberOfLines={isExpanded ? undefined : 2}
                >
                  {item.description}
                </Text>
                {item.description.length > 60 && (
                  <Text className="text-white/70 text-xs mt-1">
                    {isExpanded ? 'View less' : 'View more'}
                  </Text>
                )}
              </Pressable>
            )}
            {item.isLive && item.viewerCount && (
              <View className="flex-row items-center mt-2">
                <View className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
                <Text className="text-white text-xs">
                  {item.viewerCount.toLocaleString()} watching
                </Text>
              </View>
            )}
            {item.hasAudio && (
              <Pressable
                className="mt-3 w-10 h-10 bg-white/20 rounded-full items-center justify-center"
                onPress={(e) => {
                  e.stopPropagation();
                  onToggleMute();
                }}
              >
                {isMuted ? (
                  <VolumeX size={20} color="#fff" />
                ) : (
                  <Volume2 size={20} color="#fff" />
                )}
              </Pressable>
            )}
          </View>
        </View>
      </Pressable>
    </View>
  );
}
