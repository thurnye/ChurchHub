import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Calendar } from 'lucide-react-native';
import { router } from 'expo-router';

import { Church, conferences } from '@/data/mockData';
import { ChurchScreenTemplate } from '../../components/ChurchScreenTemplate';
import { Card, CardContent } from '@/shared/components/ui';

interface ChurchConferencesScreenProps {
  church: Church;
  onBack: () => void;
}

export function ChurchConferencesScreen({
  church,
}: ChurchConferencesScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      title='Conferences / Retreats'
      icon={Calendar}
    >
      <View className='gap-3'>
        {conferences.map((c, idx) => (
          <Card key={idx}>
            <CardContent className='p-4'>
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: '/church/conference/[conferenceId]',
                    params: {
                      conferenceId: c.id,
                      from: `/church/${church.id}`,
                      tab: 'group',
                    },
                  })
                }
              >
                <Text className='font-semibold text-gray-900 mb-2'>
                  {c.title}
                </Text>
                <Text className='text-sm text-gray-600 mb-2'>{c.dates}</Text>
                <Text className='text-sm text-gray-600 mb-3'>{c.location}</Text>
              </Pressable>

              <Pressable
                onPress={() => {}}
                className='w-full h-12 bg-black rounded-xl items-center justify-center active:opacity-80'
              >
                <View className='flex-row items-center justify-center gap-2'>
                  <Text className='text-white font-semibold'>Register</Text>
                </View>
              </Pressable>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}
