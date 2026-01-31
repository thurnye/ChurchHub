import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Briefcase } from 'lucide-react-native';

import { Church, careers } from '@/data/mockData';
import { ChurchScreenTemplate } from '../../components/ChurchScreenTemplate';
import { Badge, Card, CardContent } from '@/shared/components/ui';
import { ChurchModal } from '../../components/ChurchModal';
import { CareerDetailScreen } from '../../components/CareerDetailScreen';

interface ChurchCareersScreenProps {
  church: Church;
  onBack: () => void;
}

export function ChurchCareersScreen({ church }: ChurchCareersScreenProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCareerId, setSelectedCareerId] = useState<string | null>(null);

  return (
    <ChurchScreenTemplate church={church} title='Careers' icon={Briefcase}>
      <View>
        <Text className='font-semibold text-gray-900 mb-2'>Join Our Team</Text>
        <Text className='text-sm text-gray-600 leading-5'>
          We're always looking for passionate individuals to join our ministry
          team.
        </Text>
        <Text className='font-semibold text-gray-900 mt-5'>
          Available Positions
        </Text>
      </View>
      <ScrollView contentContainerClassName='p-4 gap-3 pb-24'>
        {careers.map((career) => (
          <Pressable
            key={career.id}
            onPress={() => {
              setSelectedCareerId(career.id);
              setOpen(true);
            }}
            className='bg-white rounded-xl p-4 border border-gray-100'
          >
            <View className='flex-row items-start justify-between mb-2'>
              <View className='flex-1 pr-2'>
                <Text className='font-semibold text-gray-900 mb-1'>
                  {career.title}
                </Text>
                <Text className='text-sm text-gray-600 mb-2'>
                  {career.church}
                </Text>
              </View>

              <Badge variant='secondary'>
                <Text className='text-xs'>{career.type}</Text>
              </Badge>
            </View>

            <View className='flex-row items-center gap-2'>
              <Text className='text-xs text-gray-500'>{career.department}</Text>
              <Text className='text-xs text-gray-400'>•</Text>
              <Text className='text-xs text-gray-500'>
                Posted {career.postedDate}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <ChurchModal open={open} setOpen={setOpen}>
        {selectedCareerId ? (
          <CareerDetailScreen careerId={selectedCareerId} from='/' />
        ) : null}
      </ChurchModal>
    </ChurchScreenTemplate>
  );
}
