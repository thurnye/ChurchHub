// church-screens-worship.tsx (React Native + NativeWind) — Pressable only

import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import {
  BookOpen,
  FileText,
  Users,
  Church as ChurchIcon,
  Calendar,
  Video,
  Music,
  Droplet,
  Gift,
  Clock,
  Play,
} from 'lucide-react-native';

import { Church, sermons } from '@/data/mockData';
import { ChurchScreenTemplate } from './ChurchScreenTemplate';
import { Badge, Card, CardContent } from '@/shared/components/ui';
import { Image } from 'expo-image';
import { router } from 'expo-router';

interface ChurchScreenProps {
  church: Church;
  onBack: () => void;
}

const topics = [
  'All',
  'Faith',
  'Prayer',
  'Community',
  'Hope',
  'Love',
  'Justice',
];

function AppPressable({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  leftIcon,
}: {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md';
  leftIcon?: React.ReactNode;
}) {
  const pad = size === 'sm' ? 'px-3 py-2' : 'px-4 py-3';
  const base = 'rounded-xl items-center justify-center flex-row gap-2';
  const bg =
    variant === 'primary'
      ? 'bg-indigo-600'
      : variant === 'outline'
        ? 'bg-white border border-gray-300'
        : 'bg-transparent';
  const text = variant === 'primary' ? 'text-white' : 'text-gray-900';

  return (
    <Pressable onPress={onPress} className={`${base} ${pad} ${bg}`}>
      {leftIcon}
      <Text
        className={`font-semibold ${size === 'sm' ? 'text-sm' : 'text-base'} ${text}`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

// WORSHIP SECTION SCREENS

export function ChurchSundayServicesScreen({ church }: ChurchScreenProps) {
  const sunday = church.serviceTimes.filter((s) => s.day === 'Sunday');

  return (
    <ChurchScreenTemplate
      church={church}
      title='Sunday Services'
      icon={ChurchIcon}
    >
      <View className='gap-3'>
        {sunday.map((service, idx) => (
          <Card key={idx}>
            <CardContent className='p-4'>
              <Text className='font-semibold text-gray-900 mb-2'>
                {service.type}
              </Text>
              <Text className='text-sm text-gray-600 mb-3'>
                {service.day} at {service.time}
              </Text>

              {church.hasLivestream ? (
                <AppPressable
                  label='Watch Online'
                  size='sm'
                  onPress={() => {}}
                  leftIcon={<Video size={16} color='#fff' />}
                />
              ) : null}
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchWeekdayServicesScreen({ church }: ChurchScreenProps) {
  const weekdays = church.serviceTimes.filter((s) => s.day !== 'Sunday');

  return (
    <ChurchScreenTemplate
      church={church}
      title='Weekday & Special Services'
      icon={Calendar}
    >
      <Card>
        <CardContent className='p-4'>
          <View className='gap-3'>
            <View>
              <Text className='font-semibold text-gray-900 mb-2'>
                Weekday Services
              </Text>

              <View className='gap-2'>
                {weekdays.map((service, idx) => (
                  <View key={idx} className='py-2 border-b border-gray-100'>
                    <Text className='font-medium text-sm text-gray-900'>
                      {service.type}
                    </Text>
                    <Text className='text-sm text-gray-600'>
                      {service.day} at {service.time}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View>
              <Text className='font-semibold text-gray-900 mb-2'>
                Special Services
              </Text>
              <Text className='text-sm text-gray-600'>
                Check our events calendar for special services and celebrations.
              </Text>
            </View>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchWorshipOnlineScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} title='Worship Online' icon={Video}>
      <Card className='mb-4'>
        <CardContent className='p-4'>
          <Text className='font-semibold text-gray-900 mb-2'>
            Join Us Online
          </Text>
          <Text className='text-sm text-gray-600 mb-4'>
            Experience worship from anywhere with our live streaming services.
          </Text>

          <AppPressable
            label='Watch Live Stream'
            onPress={() => {}}
            leftIcon={<Video size={18} color='#fff' />}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className='p-4'>
          <Text className='font-semibold text-gray-900 mb-2'>
            Live Stream Schedule
          </Text>

          <View className='gap-2'>
            {church.serviceTimes.map((service, idx) => (
              <View
                key={idx}
                className='flex-row items-center justify-between py-2 border-b border-gray-100'
              >
                <View>
                  <Text className='font-medium text-sm text-gray-900'>
                    {service.type}
                  </Text>
                  <Text className='text-xs text-gray-600'>{service.day}</Text>
                </View>

                <Text className='text-sm font-medium text-gray-900'>
                  {service.time}
                </Text>
              </View>
            ))}
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchSermonsScreen({ church }: ChurchScreenProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  const filteredSermons =
    selectedTopic === 'All'
      ? sermons
      : sermons.filter((s) => s.topic === selectedTopic);

  return (
    <ChurchScreenTemplate
      church={church}
      title='Sermons & Homilies'
      icon={FileText}
    >
      <Text className='text-sm text-gray-600 mb-4'>
        Listen to our latest sermon recordings and teachings.
      </Text>

      <Card>
        <CardContent className='p-4'>
          <Text className='font-semibold text-gray-900 mb-2'>
            Latest Sermon
          </Text>
          <Text className='text-sm font-medium text-gray-900 mb-1'>
            Living by Faith
          </Text>
          <Text className='text-sm text-gray-600 mb-2'>
            {church.pastor.name}
          </Text>
          <Text className='text-xs text-gray-500'>January 21, 2026</Text>
        </CardContent>
      </Card>

      {/* Topic Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='py-3 border-t border-gray-100'
      >
        <View className='flex-row gap-2 px-4'>
          {topics.map((topic) => (
            <Pressable
              key={topic}
              onPress={() => setSelectedTopic(topic)}
              className={`px-4 py-2 rounded-full ${
                selectedTopic === topic ? 'bg-indigo-600' : 'bg-gray-100'
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  selectedTopic === topic ? 'text-white' : 'text-gray-700'
                }`}
              >
                {topic}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* Sermon Library */}
      <View className='px-4 py-4'>
        <View className='gap-3 pb-6'>
          {filteredSermons
            .filter((s) => !s.isLive)
            .map((sermon) => (
              <Card key={sermon.id}>
                <Pressable
                  onPress={() =>
                    router.push({
                      pathname: '/sermons/[sermonId]',
                      params: {
                        sermonId: sermon.id,
                        from: 'worship',
                      },
                    })
                  }
                >
                  <CardContent>
                    <View className='flex-row gap-3'>
                      <View className='relative overflow-hidden rounded-lg'>
                        <Image
                          source={{ uri: sermon.thumbnail }}
                          style={{ width: 96, height: 96 }}
                          contentFit='cover'
                        />
                        <View className='absolute inset-0 items-center justify-center bg-black/30'>
                          <View className='w-10 h-10 bg-white/90 rounded-full items-center justify-center'>
                            <Play size={18} color='#111827' fill='#111827' />
                          </View>
                        </View>
                      </View>
                      <View className='flex-1'>
                        <Badge variant='secondary' className='self-start mb-1'>
                          <Text className='text-xs text-gray-700'>
                            {sermon.topic}
                          </Text>
                        </Badge>
                        <Text className='font-semibold text-gray-900 mb-1'>
                          {sermon.title}
                        </Text>
                        <Text className='text-sm text-gray-600'>
                          {sermon.speaker}
                        </Text>
                        <Text className='text-sm text-gray-500'>
                          {sermon.church}
                        </Text>
                        <View className='flex-row items-center gap-2 mt-2'>
                          <Clock size={12} color='#9ca3af' />
                          <Text className='text-xs text-gray-400'>
                            {sermon.duration}
                          </Text>
                          <Text className='text-gray-300'>•</Text>
                          <Text className='text-xs text-gray-400'>
                            {sermon.date}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </CardContent>
                </Pressable>
              </Card>
            ))}
        </View>
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchMusicMinistryScreen({ church }: ChurchScreenProps) {
  const items = ['Main Choir', 'Youth Choir', 'Worship Band'];

  return (
    <ChurchScreenTemplate church={church} title='Music Ministry' icon={Music}>
      <Card>
        <CardContent className='p-4'>
          <View className='gap-4'>
            <View>
              <Text className='font-semibold text-gray-900 mb-2'>
                Our Music Ministry
              </Text>
              <Text className='text-sm text-gray-600'>
                Join our vibrant worship team in leading the congregation in
                praise and worship.
              </Text>
            </View>

            <View>
              <Text className='font-semibold text-gray-900 mb-2'>
                Choirs & Ensembles
              </Text>
              <View className='gap-2'>
                {items.map((it) => (
                  <Text key={it} className='text-sm text-gray-700'>
                    • {it}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchBaptismWeddingsScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      title='Baptism & Weddings'
      icon={Droplet}
    >
      <View className='gap-4'>
        <Card>
          <CardContent className='p-4'>
            <Text className='font-semibold text-gray-900 mb-2'>Baptism</Text>
            <Text className='text-sm text-gray-600 mb-3'>
              Baptism is a sacred ordinance representing new life in Christ.
            </Text>
            <AppPressable
              label='Request Baptism'
              size='sm'
              onPress={() => {}}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-4'>
            <Text className='font-semibold text-gray-900 mb-2'>Weddings</Text>
            <Text className='text-sm text-gray-600 mb-3'>
              We would be honored to host your special day.
            </Text>
            <AppPressable
              label='Wedding Inquiry'
              size='sm'
              onPress={() => {}}
            />
          </CardContent>
        </Card>
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchStewardshipScreen({ church }: ChurchScreenProps) {
  const items = [
    'Biblical Principles of Giving',
    'Tithing and Offerings',
    'Financial Stewardship',
  ];

  return (
    <ChurchScreenTemplate church={church} title='Stewardship' icon={Gift}>
      <Card>
        <CardContent className='p-4'>
          <View className='gap-4'>
            <View>
              <Text className='font-semibold text-gray-900 mb-2'>
                Biblical Stewardship
              </Text>
              <Text className='text-sm text-gray-600'>
                Stewardship is about managing God's gifts wisely — our time,
                talents, and treasures.
              </Text>
            </View>

            <View>
              <Text className='font-semibold text-gray-900 mb-2'>
                Teaching Resources
              </Text>
              <View className='gap-2'>
                {items.map((it) => (
                  <Text key={it} className='text-sm text-gray-700'>
                    • {it}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

/**
 * NOTE:
 * You used Accordion in web.
 * In React Native, replace Accordion with a simple expandable Pressable list,
 * unless you're using a RN accordion library already.
 */
export function ChurchSacramentsScreen({ church }: ChurchScreenProps) {
  const [open, setOpen] = React.useState<string | null>(null);

  const items = [
    {
      id: 'baptism',
      title: 'Baptism',
      body: 'An outward expression of an inward faith in Jesus Christ.',
    },
    {
      id: 'communion',
      title: 'Holy Communion',
      body: "Remembering Christ's sacrifice through bread and wine.",
    },
    {
      id: 'confirmation',
      title: 'Confirmation',
      body: "Affirming one's faith publicly as a mature believer.",
    },
  ];

  return (
    <ChurchScreenTemplate
      church={church}
      title='Sacraments / Ordinances'
      icon={BookOpen}
    >
      <Card>
        <CardContent className='p-4'>
          <View className='gap-2'>
            {items.map((it) => {
              const isOpen = open === it.id;
              return (
                <View
                  key={it.id}
                  className='overflow-hidden rounded-xl border border-gray-200 bg-white'
                >
                  <Pressable
                    onPress={() => setOpen(isOpen ? null : it.id)}
                    className='px-4 py-3 flex-row items-center justify-between'
                  >
                    <Text className='font-semibold text-gray-900'>
                      {it.title}
                    </Text>
                    <Text className='text-gray-500'>{isOpen ? '−' : '+'}</Text>
                  </Pressable>

                  {isOpen ? (
                    <View className='px-4 pb-4'>
                      <Text className='text-sm text-gray-600'>{it.body}</Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchNewslettersScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} title='Newsletters' icon={FileText}>
      <Card className='mb-4'>
        <CardContent className='p-4'>
          <Text className='font-semibold text-gray-900 mb-2'>
            Subscribe to Our Newsletter
          </Text>
          <Text className='text-sm text-gray-600 mb-3'>
            Stay updated with church news and events.
          </Text>

          <AppPressable label='Subscribe' onPress={() => {}} />
        </CardContent>
      </Card>

      <View className='gap-2'>
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className='p-3'>
              <Text className='font-medium text-sm text-gray-900 mb-1'>
                January {i} Newsletter
              </Text>
              <Text className='text-xs text-gray-500'>
                Published Jan {i}, 2026
              </Text>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}
