import React from 'react';
import { View, Text, Image } from 'react-native';
import { Users } from 'lucide-react-native';

import { Church } from '@/data/mockData';
import { ChurchScreenTemplate } from '../../components/ChurchScreenTemplate';
import { Card, CardContent } from '@/shared/components/ui';

interface ChurchClergyScreenProps {
  church: Church;
  onBack: () => void;
}

export function ChurchClergyScreen({ church }: ChurchClergyScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      title='Clergy & Leadership'
      icon={Users}
    >
      <View className='gap-3'>
        <Card>
          <CardContent className='p-4'>
            <View className='flex-row items-start gap-3'>
              <Image
                source={{ uri: church.pastor.photo }}
                className='w-16 h-16 rounded-full'
                resizeMode='cover'
              />

              <View className='flex-1'>
                <Text className='font-semibold text-gray-900'>
                  {church.pastor.name}
                </Text>
                <Text className='text-sm text-gray-600 mb-2'>
                  {church.pastor.role}
                </Text>
                <Text className='text-sm text-gray-600 leading-5'>
                  {church.pastor.bio}
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {church.clergy.map((c, idx) => (
          <Card key={idx}>
            <CardContent className='p-4'>
              <View className='flex-row items-center gap-3'>
                <Image
                  source={{ uri: c.photo }}
                  className='w-12 h-12 rounded-full'
                  resizeMode='cover'
                />
                <View className='flex-1'>
                  <Text className='font-medium text-gray-900'>{c.name}</Text>
                  <Text className='text-sm text-gray-600'>{c.role}</Text>
                </View>
              </View>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}
