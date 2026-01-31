import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Users } from 'lucide-react-native';
import { router } from 'expo-router';

import { Church, volunteerPrograms } from '@/data/mockData';
import { ChurchScreenTemplate } from '../../components/ChurchScreenTemplate';
import { Card, CardContent } from '@/shared/components/ui';

interface ChurchVolunteerScreenProps {
  church: Church;
}

export function ChurchVolunteerScreen({
  church,
}: ChurchVolunteerScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      title='Volunteer Opportunities'
      icon={Users}
    >
      <Card>
        <CardContent className='p-4'>
          <View className='mb-4'>
            <Text className='font-semibold text-gray-900 mb-2'>
              Serve With Us
            </Text>
            <Text className='text-sm text-gray-600'>
              Use your gifts to serve God and our community.
            </Text>
          </View>

          <View className='gap-2'>
            {volunteerPrograms.map((volunteer, idx) => (
              <Card key={idx} className='bg-gray-50'>
                <CardContent className='p-3'>
                  <View className='flex-row items-center justify-between'>
                    <Pressable
                      onPress={() => {
                        router.push({
                          pathname: '/community/volunteer/[volunteerId]',
                          params: {
                            volunteerId: volunteer.id,
                            from: `/church/${church.id}`,
                            tab: 'volunteer',
                          },
                        });
                      }}
                    >
                      <Text className='text-sm font-medium text-gray-900'>
                        {volunteer.title}
                      </Text>
                    </Pressable>
                    <Pressable>
                      <Text className='text-indigo-600 font-medium'>Join</Text>
                    </Pressable>
                  </View>
                </CardContent>
              </Card>
            ))}
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}
