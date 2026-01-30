import { Modal, View, Text, Pressable, StatusBar } from 'react-native';
import { Image } from 'expo-image';
import { X, Heart, MessageCircle, Share2 } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Story } from '@/data/mockData';



interface StoryViewerModalProps {
  visible: boolean;
  story: Story | null;
  progress: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function StoryViewerModal({
  visible,
  story,
  progress,
  onClose,
  onPrevious,
  onNext,
}: StoryViewerModalProps) {
  if (!story) return null;

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View className="flex-1 bg-black">
        <StatusBar barStyle="light-content" />

        {/* Story Image */}
        <Image
          source={{ uri: story.image }}
          style={{ width: '100%', height: '100%' }}
          contentFit="cover"
        />

        {/* Gradient Overlay */}
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'transparent', 'rgba(0,0,0,0.5)']}
          locations={[0, 0.2, 1]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />

        {/* Progress Bar */}
        <View className="absolute top-12 left-4 right-4 flex-row gap-1">
          <View className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
            <View
              className="h-full bg-white rounded-full"
              style={{ width: `${progress * 100}%` }}
            />
          </View>
        </View>

        {/* Header */}
        <View className="absolute top-16 left-4 right-4 flex-row items-center justify-between mt-4">
          <View className="flex-row items-center flex-1">
            <Image
              source={{ uri: story.avatar }}
              style={{ width: 40, height: 40 }}
              className="rounded-full border-2 border-white"
              contentFit="cover"
            />
            <View className="ml-3 flex-1">
              <Text
                className="text-white font-semibold text-base"
                numberOfLines={1}
              >
                {story.churchName}
              </Text>
              <Text className="text-white/70 text-xs">{story.timestamp}</Text>
            </View>
          </View>
          <Pressable
            onPress={onClose}
            className="w-10 h-10 items-center justify-center"
          >
            <X size={28} color="#fff" />
          </Pressable>
        </View>

        {/* Navigation Areas */}
        <Pressable
          className="absolute left-0 top-0 bottom-0 w-1/3"
          onPress={onPrevious}
        />
        <Pressable
          className="absolute right-0 top-0 bottom-0 w-1/3"
          onPress={onNext}
        />

        {/* CTA Button */}
        {story.ctaLabel && story.ctaRoute && (
          <View className="absolute bottom-20 left-6 right-6">
            <Pressable
              className="bg-white rounded-full py-3 px-6"
              onPress={() => {
                onClose();
                router.push(story.ctaRoute as any);
              }}
            >
              <Text className="text-gray-900 font-semibold text-center">
                {story.ctaLabel}
              </Text>
            </Pressable>
          </View>
        )}

        {/* Reactions */}
        <View className="absolute bottom-8 left-6 right-6 flex-row justify-center gap-8">
          <Pressable className="items-center">
            <Heart size={24} color="#fff" />
          </Pressable>
          <Pressable className="items-center">
            <MessageCircle size={24} color="#fff" />
          </Pressable>
          <Pressable className="items-center">
            <Share2 size={24} color="#fff" />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
