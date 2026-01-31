import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Users } from 'lucide-react-native';
import { router, useLocalSearchParams } from 'expo-router';

import { Church, churchGroups } from '@/data/mockData';
import { ChurchScreenTemplate } from '../../components/ChurchScreenTemplate';
import { Card, CardContent } from '@/shared/components/ui';
import { AppPressable } from '../../components/AppPressable';

interface ChurchGroupsScreenProps {
  church: Church;
  onBack: () => void;
}

export function ChurchGroupsScreen({ church }: ChurchGroupsScreenProps) {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCareerId, setSelectedCareerId] = useState<string | null>(null);

  return (
    <ChurchScreenTemplate
      church={church}
      title='Church Groups / Bodies'
      icon={Users}
    >
      <ScrollView className='gap-3'>
        {churchGroups.map((group, idx) => (
          <Card key={idx}>
            <CardContent className='p-4'>
              <Text className='font-medium text-gray-900 mb-2'>
                {group.name}
              </Text>
              <Text className='text-sm text-gray-600 mb-3'>
                {group.description.length > 10
                  ? `${group.description.slice(0, 45)}...`
                  : group.description}
              </Text>

              <AppPressable
                label='Learn More'
                variant='outline'
                onPress={() => {
                  router.push({
                    pathname: '/church/group-detail',
                    params: {
                      groupId: group.id,
                      from: `/church/${id}`,
                      tab: 'group',
                    },
                  });
                  setSelectedCareerId(group.id);
                  setOpen(true);
                }}
              />
            </CardContent>
          </Card>
        ))}
      </ScrollView>
    </ChurchScreenTemplate>
  );
}
