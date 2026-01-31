import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { FileText, Clock, Play } from 'lucide-react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';

import { Church, sermons } from '@/data/mockData';
import { ChurchScreenTemplate } from '../../components/ChurchScreenTemplate';
import { Badge, Card, CardContent } from '@/shared/components/ui';

interface ChurchSermonsScreenProps {
  church: Church;
  onBack: () => void;
}

const topics = [
  'All',
  'Faith',
  'Prayer',
  'Community',
  'Hope',
  'Love',
  'Justice',
];

export function ChurchSermonsScreen({ church }: ChurchSermonsScreenProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  const filteredSermons =
    selectedTopic === 'All'
      ? sermons
      : sermons.filter((s) => s.topic === selectedTopic);

  return (
    <ChurchScreenTemplate
      church={church}
      title='Sermons & Homilies'
      icon={FileText}
    >
      <Text className='text-sm text-gray-600 mb-4'>
        Listen to our latest sermon recordings and teachings.
      </Text>

      <Card>
        <CardContent className='p-4'>
          <Text className='font-semibold text-gray-900 mb-2'>
            Latest Sermon
          </Text>
          <Text className='text-sm font-medium text-gray-900 mb-1'>
            Living by Faith
          </Text>
          <Text className='text-sm text-gray-600 mb-2'>
            {church.pastor.name}
          </Text>
          <Text className='text-xs text-gray-500'>January 21, 2026</Text>
        </CardContent>
      </Card>

      {/* Topic Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='py-3 border-t border-gray-100'
      >
        <View className='flex-row gap-2 px-4'>
          {topics.map((topic) => (
            <Pressable
              key={topic}
              onPress={() => setSelectedTopic(topic)}
              className={`px-4 py-2 rounded-full ${
                selectedTopic === topic ? 'bg-indigo-600' : 'bg-gray-100'
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  selectedTopic === topic ? 'text-white' : 'text-gray-700'
                }`}
              >
                {topic}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* Sermon Library */}
      <View className='px-4 py-4'>
        <View className='gap-3 pb-6'>
          {filteredSermons
            .filter((s) => !s.isLive)
            .map((sermon) => (
              <Card key={sermon.id}>
                <Pressable
                  onPress={() =>
                    router.push({
                      pathname: '/sermons/[sermonId]',
                      params: {
                        sermonId: sermon.id,
                        from: 'worship',
                      },
                    })
                  }
                >
                  <CardContent>
                    <View className='flex-row gap-3'>
                      <View className='relative overflow-hidden rounded-lg'>
                        <Image
                          source={{ uri: sermon.thumbnail }}
                          style={{ width: 96, height: 96 }}
                          contentFit='cover'
                        />
                        <View className='absolute inset-0 items-center justify-center bg-black/30'>
                          <View className='w-10 h-10 bg-white/90 rounded-full items-center justify-center'>
                            <Play size={18} color='#111827' fill='#111827' />
                          </View>
                        </View>
                      </View>
                      <View className='flex-1'>
                        <Badge variant='secondary' className='self-start mb-1'>
                          <Text className='text-xs text-gray-700'>
                            {sermon.topic}
                          </Text>
                        </Badge>
                        <Text className='font-semibold text-gray-900 mb-1'>
                          {sermon.title}
                        </Text>
                        <Text className='text-sm text-gray-600'>
                          {sermon.speaker}
                        </Text>
                        <Text className='text-sm text-gray-500'>
                          {sermon.church}
                        </Text>
                        <View className='flex-row items-center gap-2 mt-2'>
                          <Clock size={12} color='#9ca3af' />
                          <Text className='text-xs text-gray-400'>
                            {sermon.duration}
                          </Text>
                          <Text className='text-gray-300'>•</Text>
                          <Text className='text-xs text-gray-400'>
                            {sermon.date}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </CardContent>
                </Pressable>
              </Card>
            ))}
        </View>
      </View>
    </ChurchScreenTemplate>
  );
}
