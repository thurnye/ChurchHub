import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { FileText } from 'lucide-react-native';

import { Church, churchNews } from '@/data/mockData';
import { ChurchScreenTemplate } from '../../components/ChurchScreenTemplate';
import { Card, CardContent } from '@/shared/components/ui';
import { AppPressable } from '../../components/AppPressable';
import { router } from 'expo-router';

interface ChurchGlobalChurchNewsScreenProps {
  church: Church;
  onBack: () => void;
}

export function ChurchGlobalChurchNewsScreen({
  church,
}: ChurchGlobalChurchNewsScreenProps) {
  return (
    <ChurchScreenTemplate church={church} title='News' icon={FileText}>
      <View className='gap-3'>
        {churchNews.map((news) => (
          <Card key={news.id}>
            <Pressable
              onPress={() =>
                router.push({
                  pathname: '/(modals)/church/church-news-detail',
                  params: { newsId: news.id },
                })
              }
            >
              <CardContent className='p-4'>
                <Text className='font-semibold text-gray-900 mb-2'>
                  {news.title}
                </Text>
                <Text className='text-sm text-gray-600 mb-2 leading-5'>
                  Important update for our congregation. Stay tuned for more
                  details.
                </Text>
                <Text className='text-xs text-gray-500'>{news.date}</Text>
              </CardContent>
            </Pressable>
          </Card>
        ))}
        <Card className='mb-4'>
          <CardContent className='p-4'>
            <Text className='font-semibold text-gray-900 mb-2'>
              Subscribe to Our Newsletter
            </Text>
            <Text className='text-sm text-gray-600 mb-3'>
              Stay updated with church news and events.
            </Text>

            <AppPressable label='Subscribe' onPress={() => {}} />
          </CardContent>
        </Card>
      </View>
    </ChurchScreenTemplate>
  );
}
