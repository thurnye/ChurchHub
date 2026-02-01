import { View } from '@/components/Themed';
import { TopBar } from '@/shared/components';
import React from 'react';

export default function BibleScreen() {
  return (
    <View className='flex-1 bg-gray-50'>
      <TopBar title='The Holy Bible' />
    </View>
  );
}
