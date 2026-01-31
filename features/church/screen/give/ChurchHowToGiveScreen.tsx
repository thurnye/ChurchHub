import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { DollarSign } from 'lucide-react-native';

import { Church } from '@/data/mockData';
import { ChurchScreenTemplate } from '../../components/ChurchScreenTemplate';
import { Card, CardContent } from '@/shared/components/ui';

interface ChurchHowToGiveScreenProps {
  church: Church;
}

export function ChurchHowToGiveScreen({ church }: ChurchHowToGiveScreenProps) {
  const ways = useMemo(
    () => [
      {
        title: 'Online Giving',
        desc: 'Secure online donations via card or bank transfer',
      },
      {
        title: 'During Service',
        desc: 'Give through offering baskets during worship',
      },
      { title: 'Bank Transfer', desc: 'Direct deposit to church account' },
      { title: 'Check / Cash', desc: 'Mail or drop off at church office' },
    ],
    [],
  );

  return (
    <ChurchScreenTemplate church={church} title='How to Give' icon={DollarSign}>
      <Card>
        <CardContent className='p-4'>
          <View className='gap-3'>
            <Text className='font-semibold text-gray-900'>Ways to Give</Text>

            <View className='gap-2'>
              {ways.map((w) => (
                <Card key={w.title} className='bg-gray-50'>
                  <CardContent className='p-3'>
                    <Text className='font-medium text-sm text-gray-900 mb-1'>
                      {w.title}
                    </Text>
                    <Text className='text-xs text-gray-600'>{w.desc}</Text>
                  </CardContent>
                </Card>
              ))}
            </View>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}
