import { View, Text, FlatList, Pressable } from 'react-native';
import { Plus } from 'lucide-react-native';
import { StoryItem } from './StoryItem';
import { Story } from '@/data/mockData';


interface StoriesRowProps {
  stories: Story[];
  height: number;
  topInset: number;
  onStoryPress: (index: number) => void;
}

export function StoriesRow({ stories, height, topInset, onStoryPress }: StoriesRowProps) {
  return (
    <View
      className="bg-white border-b border-gray-100 flex-row items-center"
      style={{
        height: height + topInset,
        paddingTop: topInset,
      }}
    >
      {/* Add Story Button */}
      <Pressable className="items-center mr-3 ml-4">
        <View className="w-16 h-16 bg-gray-200 rounded-full items-center justify-center border-2 border-dashed border-gray-400">
          <Plus size={24} color="#6b7280" />
        </View>
        <Text
          className="text-xs text-gray-600 mt-1.5 w-16 text-center"
          numberOfLines={1}
        >
          Add Story
        </Text>
      </Pressable>

      {/* Stories List */}
      <FlatList
        horizontal
        data={stories}
        renderItem={({ item, index }) => (
          <StoryItem item={item} onPress={() => onStoryPress(index)} />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 16, paddingVertical: 12 }}
      />
    </View>
  );
}
