import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { BookOpen } from 'lucide-react-native';

import { Church, devotionals, IDevotional } from '@/data/mockData';
import { ChurchScreenTemplate } from '../../components/ChurchScreenTemplate';
import { Card, CardContent } from '@/shared/components/ui';
import { router } from 'expo-router';

interface ChurchDevotionalsScreenProps {
  church: Church;
}

export function ChurchDevotionalsScreen({
  church,
}: ChurchDevotionalsScreenProps) {
  return (
    <ChurchScreenTemplate church={church} title='Devotionals' icon={BookOpen}>
      <View className='gap-3'>
        {devotionals.map((devotion: IDevotional) => (
          <Card key={devotion.id}>
            <Pressable
              onPress={() =>
                router.push({
                  pathname: '/church/devotion/[devotionalId]',
                  params: {
                    devotionalId: devotion.id,
                    from: `/church/${church.id}`,
                    id: church.id,
                    tab: 'devotionals',
                  },
                })
              }
            >
              <CardContent className='p-4'>
                <Text className='font-semibold text-gray-900 mb-2'>
                  {devotion.title}
                </Text>
                <Text className='text-sm text-gray-600 mb-2'>
                  {devotion.reflection}
                </Text>
                <Text className='text-xs text-gray-500'>{devotion.date}</Text>
              </CardContent>
            </Pressable>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}
