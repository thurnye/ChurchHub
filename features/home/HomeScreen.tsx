import { View, Text, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import {
  Video,
  MapPin,
  Calendar,
  DollarSign,
  Play,
  Navigation,
  Clock,
  MessageCircle,
} from 'lucide-react-native';

import { TopBar } from '@/shared/components/TopBar';
import { Button, Card, CardContent, Badge } from '@/shared/components/ui';
import { churches, events, sermons } from '@/data/mockData';

export function HomeScreen() {
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12
      ? 'Good morning'
      : currentHour < 18
        ? 'Good afternoon'
        : 'Good evening';

  const todayServices = churches.filter((c) => c.nextService.includes('Today'));
  const upcomingEvents = events.slice(0, 3);
  const liveSermons = sermons.filter((s) => s.isLive);

  const handleNavigateToChurch = (churchId: string) => {
    router.push(`/church/${churchId}`);
  };

  return (
    <View className='flex-1 bg-gray-50'>
      <TopBar
        showLogo
        show={true}
        onNotificationPress={() => console.log('Notifications')}
      />

      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        {/* Greeting Section */}
        <View className='bg-white px-4 pt-4 pb-6'>
          <Text className='text-2xl font-semibold text-gray-900 mb-1'>
            {greeting}, Daniel
          </Text>
          <View className='flex-row items-center gap-1'>
            <MapPin size={16} color='#6b7280' />
            <Text className='text-sm text-gray-600'>Churches near you</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View className='px-4 py-4 bg-white border-t border-gray-100'>
          <View className='flex-row justify-around'>
            <Pressable className='items-center gap-2 p-3'>
              <View className='w-12 h-12 bg-red-100 rounded-full items-center justify-center'>
                <Video size={24} color='#dc2626' />
              </View>
              <Text className='text-xs font-medium text-gray-900'>
                Watch Online
              </Text>
            </Pressable>
            <Pressable className='items-center gap-2 p-3'>
              <View className='w-12 h-12 bg-purple-100 rounded-full items-center justify-center'>
                <DollarSign size={24} color='#9333ea' />
              </View>
              <Text className='text-xs font-medium text-gray-900'>Give</Text>
            </Pressable>
            <Pressable className='items-center gap-2 p-3'>
              <View className='w-12 h-12 bg-blue-100 rounded-full items-center justify-center'>
                <MessageCircle size={24} color='#2563eb' />
              </View>
              <Text className='text-xs font-medium text-gray-900'>
                Submit Prayer
              </Text>
            </Pressable>
            <Pressable className='items-center gap-2 p-3'>
              <View className='w-12 h-12 bg-green-100 rounded-full items-center justify-center'>
                <Calendar size={24} color='#16a34a' />
              </View>
              <Text className='text-xs font-medium text-gray-900'>Events</Text>
            </Pressable>
          </View>
        </View>

        {/* Live Now Section */}
        {liveSermons.length > 0 && (
          <View className='mt-4 px-4'>
            <Text className='font-semibold text-lg text-gray-900 mb-3'>
              Live Now
            </Text>
            {liveSermons.map((sermon) => (
              <Card key={sermon.id} className='mb-3'>
                <View className='relative'>
                  <Image
                    source={{ uri: sermon.thumbnail }}
                    style={{ width: '100%', height: 192 }}
                    contentFit='cover'
                  />
                  <View className='absolute top-3 left-3'>
                    <Badge className='bg-red-600'>
                      <View className='flex-row items-center'>
                        <View className='w-2 h-2 bg-white rounded-full mr-1.5' />
                        <Text className='text-white text-xs font-medium'>
                          LIVE
                        </Text>
                      </View>
                    </Badge>
                  </View>
                  <Pressable className='absolute inset-0 items-center justify-center bg-black/30'>
                    <View className='w-16 h-16 bg-white/90 rounded-full items-center justify-center'>
                      <Play size={32} color='#111827' fill='#111827' />
                    </View>
                  </Pressable>
                </View>
                <CardContent>
                  <Text className='font-semibold text-gray-900 mb-1'>
                    {sermon.title}
                  </Text>
                  <Text className='text-sm text-gray-600'>{sermon.church}</Text>
                  <Text className='text-sm text-gray-500'>
                    {sermon.speaker}
                  </Text>
                </CardContent>
              </Card>
            ))}
          </View>
        )}

        {/* Today Section */}
        <View className='mt-4 px-4'>
          <Text className='font-semibold text-lg text-gray-900 mb-3'>
            Today
          </Text>
          <View className='gap-3'>
            {todayServices.map((church) => (
              <Card key={church.id}>
                <CardContent>
                  <View className='flex-row items-start gap-3'>
                    <View className='overflow-hidden rounded-lg'>
                      <Image
                        source={{ uri: church.image }}
                        style={{ width: 64, height: 64 }}
                        contentFit='cover'
                      />
                    </View>
                    <View className='flex-1'>
                      <Text className='font-semibold text-gray-900 mb-1'>
                        {church.name}
                      </Text>
                      <View className='flex-row items-center gap-2 mb-2'>
                        <Badge variant='secondary'>
                          <Text className='text-xs text-gray-700'>
                            {church.denomination}
                          </Text>
                        </Badge>
                      </View>
                      <View className='flex-row items-center gap-1 mb-3'>
                        <Clock size={16} color='#6b7280' />
                        <Text className='text-sm text-gray-600'>
                          {church.nextService}
                        </Text>
                      </View>
                      <View className='flex-row gap-2'>
                        {church.hasLivestream && (
                          <Button size='sm' className='flex-1'>
                            <View className='flex-row items-center gap-1'>
                              <Video size={16} color='#ffffff' />
                              <Text className='text-white text-sm font-medium'>
                                Join Online
                              </Text>
                            </View>
                          </Button>
                        )}
                        <Button
                          size='sm'
                          variant='outline'
                          className='flex-1'
                          onPress={() => handleNavigateToChurch(church.id)}
                        >
                          <View className='flex-row items-center gap-1'>
                            <Navigation size={16} color='#111827' />
                            <Text className='text-gray-900 text-sm font-medium'>
                              Directions
                            </Text>
                          </View>
                        </Button>
                      </View>
                    </View>
                  </View>
                </CardContent>
              </Card>
            ))}
          </View>
        </View>

        {/* Upcoming Events Section */}
        <View className='mt-6 px-4'>
          <View className='flex-row items-center justify-between mb-3'>
            <Text className='font-semibold text-lg text-gray-900'>
              Upcoming Events
            </Text>
            <Pressable>
              <Text className='text-sm text-indigo-600 font-medium'>
                View All
              </Text>
            </Pressable>
          </View>
          <View className='gap-3'>
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardContent>
                  <View className='flex-row items-start gap-3'>
                    <View className='overflow-hidden rounded-lg'>
                      <Image
                        source={{ uri: event.image }}
                        style={{ width: 80, height: 80 }}
                        contentFit='cover'
                      />
                    </View>
                    <View className='flex-1'>
                      <Text className='font-semibold text-gray-900 mb-1'>
                        {event.title}
                      </Text>
                      <Text className='text-sm text-gray-600 mb-1'>
                        {event.church}
                      </Text>
                      <View className='flex-row items-center gap-3'>
                        <Text className='text-sm text-gray-500'>
                          {event.date}
                        </Text>
                        <Text className='text-gray-400'>•</Text>
                        <Text className='text-sm text-gray-500'>
                          {event.time}
                        </Text>
                      </View>
                    </View>
                  </View>
                </CardContent>
              </Card>
            ))}
          </View>
        </View>

        {/* Updates Section */}
        <View className='mt-6 px-4 pb-6'>
          <Text className='font-semibold text-lg text-gray-900 mb-3'>
            Updates
          </Text>
          <Card>
            <CardContent>
              <View className='flex-row items-start gap-3'>
                <View className='w-10 h-10 bg-indigo-100 rounded-full items-center justify-center'>
                  <Calendar size={20} color='#4f46e5' />
                </View>
                <View className='flex-1'>
                  <Text className='text-sm font-medium text-gray-900 mb-1'>
                    Grace Community Church shared an announcement
                  </Text>
                  <Text className='text-sm text-gray-600 mb-2'>
                    Join us for our annual Youth Revival starting this Friday!
                    Special guest speakers and worship leaders.
                  </Text>
                  <Text className='text-xs text-gray-500'>2 hours ago</Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* Bottom padding for tab bar */}
        <View className='h-4' />
      </ScrollView>
    </View>
  );
}
