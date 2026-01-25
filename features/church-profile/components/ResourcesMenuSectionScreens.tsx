// church-screens-resources.tsx (React Native + NativeWind)

import React, { useMemo, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { GraduationCap, BookOpen, FileText } from 'lucide-react-native';

import { Church } from '@/data/mockData';
import { ChurchScreenTemplate } from './ChurchScreenTemplate';
import { Card, CardContent, Button } from '@/shared/components/ui';

interface ChurchScreenProps {
  church: Church;
  onBack: () => void;
}

// RESOURCES SECTION
export function ChurchSermonLibraryScreen({ church }: ChurchScreenProps) {
  const [query, setQuery] = useState('');

  const sermons = useMemo(
    () => [
      {
        title: 'Living by Faith',
        speaker: church.pastor.name,
        date: 'Jan 21, 2026',
      },
      {
        title: 'The Power of Prayer',
        speaker: church.pastor.name,
        date: 'Jan 14, 2026',
      },
      {
        title: 'Walking in Love',
        speaker: church.pastor.name,
        date: 'Jan 7, 2026',
      },
    ],
    [church.pastor.name],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sermons;
    return sermons.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.speaker.toLowerCase().includes(q) ||
        s.date.toLowerCase().includes(q),
    );
  }, [query, sermons]);

  return (
    <ChurchScreenTemplate
      church={church}
      title='Sermon Library'
      icon={FileText}
    >
      <View className='mb-4'>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder='Search sermons...'
          placeholderTextColor='#9ca3af'
          className='w-full px-3 py-3 border border-gray-300 rounded-xl bg-white text-gray-900'
        />
      </View>

      <View className='gap-2'>
        {filtered.map((sermon, idx) => (
          <Card key={idx}>
            <CardContent className='p-4'>
              <Text className='font-medium text-gray-900 mb-1'>
                {sermon.title}
              </Text>
              <Text className='text-sm text-gray-600 mb-1'>
                {sermon.speaker}
              </Text>
              <Text className='text-xs text-gray-500'>{sermon.date}</Text>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchDevotionalsScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} title='Devotionals' icon={BookOpen}>
      <View className='gap-3'>
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className='p-4'>
              <Text className='font-semibold text-gray-900 mb-2'>
                Daily Devotional - Day {i}
              </Text>
              <Text className='text-sm text-gray-600 mb-2'>
                “Trust in the LORD with all your heart and lean not on your own
                understanding.” - Proverbs 3:5
              </Text>
              <Text className='text-xs text-gray-500'>
                January {25 + i}, 2026
              </Text>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchStudyGuidesScreen({ church }: ChurchScreenProps) {
  const guides = [
    'New Believers Guide',
    'Bible Study Methods',
    'Prayer Guide',
    'Spiritual Gifts Assessment',
  ];

  return (
    <ChurchScreenTemplate
      church={church}
      title='Study Guides'
      icon={GraduationCap}
    >
      <View className='gap-2'>
        {guides.map((guide, idx) => (
          <Card key={idx}>
            <CardContent className='p-4 flex-row items-center justify-between'>
              <Text className='font-medium text-sm text-gray-900 flex-1'>
                {guide}
              </Text>

              <Button variant='outline' size='sm' onPress={() => {}}>
                <Text className='text-sm'>Download</Text>
              </Button>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchFormsScreen({ church }: ChurchScreenProps) {
  const forms = [
    'Membership Application',
    'Baptism Request',
    'Wedding Request',
    'Volunteer Application',
    'Prayer Request',
  ];

  return (
    <ChurchScreenTemplate church={church} title='Forms' icon={FileText}>
      <View className='gap-2'>
        {forms.map((form, idx) => (
          <Card key={idx}>
            <CardContent className='p-4 flex-row items-center justify-between'>
              <Text className='font-medium text-sm text-gray-900 flex-1'>
                {form}
              </Text>

              <Button variant='outline' size='sm' onPress={() => {}}>
                <Text className='text-sm'>Download</Text>
              </Button>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}
