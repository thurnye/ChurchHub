import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { HeartHandshake, Mail, Heart } from 'lucide-react-native';
import { router } from 'expo-router';
import { Image } from 'expo-image';

import { Church, churchCommunityPrograms } from '@/data/mockData';
import { ChurchScreenTemplate } from '../../components/ChurchScreenTemplate';
import { Card, CardContent, Button } from '@/shared/components/ui';

interface ChurchCommunityProgramsScreenProps {
  church: Church;
}

export function ChurchCommunityProgramsScreen({
  church,
}: ChurchCommunityProgramsScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      title='Church Programs'
      icon={HeartHandshake}
    >
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        <View className='gap-3'>
          {churchCommunityPrograms.map((program) => (
            <View className='gap-4' key={program.id}>
              <Card>
                <Pressable
                  onPress={() => {
                    router.push({
                      pathname: '/community/[id]',
                      params: {
                        from: `/church/${church.id}`,
                        id: church.id,
                        tab: 'community-programs',
                      },
                    });
                  }}
                >
                  <View className='relative'>
                    <Image
                      source={{ uri: program.image }}
                      style={{ width: '100%', height: 160 }}
                      contentFit='cover'
                    />
                  </View>
                </Pressable>
                <CardContent>
                  <Pressable
                    onPress={() =>
                      router.push({
                        pathname: '/community/[id]',
                        params: {
                          from: `/church/${church.id}`,
                          id: church.id,
                          tab: 'community-programs',
                        },
                      })
                    }
                  >
                    <Text className='font-semibold text-gray-900 text-base mb-2'>
                      {program.title}
                    </Text>
                    <Text className='text-sm text-gray-600 mb-4'>
                      {program.description}
                    </Text>
                  </Pressable>
                  <View className='flex-row gap-2'>
                    <Button variant='outline' size='sm' className='flex-1'>
                      <View className='flex-row items-center gap-1'>
                        <Mail size={14} color='#111827' />
                        <Text className='text-gray-900 text-sm font-medium'>
                          Contact
                        </Text>
                      </View>
                    </Button>
                    <Button size='sm' className='flex-1'>
                      <View className='flex-row items-center gap-1'>
                        <Heart size={14} color='#ffffff' />
                        <Text className='text-white text-sm font-medium'>
                          Get Involved
                        </Text>
                      </View>
                    </Button>
                  </View>
                </CardContent>
              </Card>
            </View>
          ))}
        </View>
      </ScrollView>
    </ChurchScreenTemplate>
  );
}
