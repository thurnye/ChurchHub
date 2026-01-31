import React from 'react';
import { View, Text } from 'react-native';
import { FileText } from 'lucide-react-native';

import { Church } from '@/data/mockData';
import { ChurchScreenTemplate } from '../../components/ChurchScreenTemplate';
import { Card, CardContent } from '@/shared/components/ui';

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
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className='p-4'>
              <Text className='font-semibold text-gray-900 mb-2'>
                Church Announcement {i}
              </Text>
              <Text className='text-sm text-gray-600 mb-2 leading-5'>
                Important update for our congregation. Stay tuned for more
                details.
              </Text>
              <Text className='text-xs text-gray-500'>
                January {20 + i}, 2026
              </Text>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}
