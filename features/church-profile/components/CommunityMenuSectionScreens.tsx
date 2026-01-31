import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Users, Heart, HeartHandshake, Mail, Badge } from 'lucide-react-native';

import {
  Church,
  churchCommunityPrograms,
  volunteerPrograms,
} from '@/data/mockData';
import { ChurchScreenTemplate } from './ChurchScreenTemplate';
import { Card, CardContent, Button } from '@/shared/components/ui';
import { router } from 'expo-router';
import { Image } from 'expo-image';

interface ChurchScreenProps {
  church: Church;
}

// COMMUNITY SECTION
export function ChurchCommunityProgramsScreen({ church }: ChurchScreenProps) {


  return (
    <ChurchScreenTemplate
      church={church}
      title='Church Programs'
      icon={HeartHandshake}
    >
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        <View className='gap-3'>
          {churchCommunityPrograms.map((program, idx) => (
            <View className='gap-4' key={program.id}>
              <Card>
                <Pressable
                  onPress={() => {
                    router.push({
                      pathname: '/community/[id]',
                      params: {
                        from: `/church/${church.id}`,
                        id: church.id,
                        tab: 'community-programs',
                      },
                    });
                  }}
                >
                  <View className='relative'>
                    <Image
                      source={{ uri: program.image }}
                      style={{ width: '100%', height: 160 }}
                      contentFit='cover'
                    />
                  </View>
                </Pressable>
                <CardContent>
                  <Pressable
                    onPress={() =>
                      router.push({
                        pathname: '/community/[id]',
                        params: {
                         from: `/church/${church.id}`,
                        id: church.id,
                        tab: 'community-programs',
                        },
                      })
                    }
                  >
                    <Text className='font-semibold text-gray-900 text-base mb-2'>
                      {program.title}
                    </Text>
                    <Text className='text-sm text-gray-600 mb-4'>
                      {program.description}
                    </Text>
                  </Pressable>
                  <View className='flex-row gap-2'>
                    <Button variant='outline' size='sm' className='flex-1'>
                      <View className='flex-row items-center gap-1'>
                        <Mail size={14} color='#111827' />
                        <Text className='text-gray-900 text-sm font-medium'>
                          Contact
                        </Text>
                      </View>
                    </Button>
                    <Button size='sm' className='flex-1'>
                      <View className='flex-row items-center gap-1'>
                        <Heart size={14} color='#ffffff' />
                        <Text className='text-white text-sm font-medium'>
                          Get Involved
                        </Text>
                      </View>
                    </Button>
                  </View>
                </CardContent>
              </Card>
            </View>
            // <Card key={idx}>
            //   <CardContent className='p-4'>
            //     <Text className='font-medium text-gray-900 mb-2'>
            //       {program.title}
            //     </Text>
            //     <Text className='text-sm text-gray-600 mb-3'>
            //       Serving our local community with love.
            //     </Text>
            //     <Pressable
            //       onPress={() =>
            //         router.push({
            //           pathname: '/community/[id]',
            //           params: {
            //             id: program.id,
            //             from: 'community',
            //           },
            //         })
            //       }
            //       className='w-full'
            //     >
            //       <Text className='text-gray-900 font-medium'>Learn More</Text>
            //     </Pressable>
            //   </CardContent>
            // </Card>
          ))}
        </View>
      </ScrollView>
    </ChurchScreenTemplate>
  );
}

export function ChurchOutreachScreen({ church }: ChurchScreenProps) {
  const items = [
    'Street Evangelism',
    'Prison Ministry',
    'Hospital Visitation',
    'Community Clean-up',
    'Homeless Support',
  ];

  return (
    <ChurchScreenTemplate
      church={church}
      title='Outreach & Charity'
      icon={Heart}
    >
      <Card>
        <CardContent className='p-4'>
          <View className='mb-4'>
            <Text className='font-semibold text-gray-900 mb-2'>
              Our Outreach Ministries
            </Text>
            <Text className='text-sm text-gray-600'>
              Extending God's love to our community and beyond.
            </Text>
          </View>

          <View className='gap-2 mb-4'>
            {items.map((t) => (
              <Text key={t} className='text-sm text-gray-900'>
                • {t}
              </Text>
            ))}
          </View>

          <Button className='w-full'>
            <Text className='text-white font-medium'>Join an Outreach</Text>
          </Button>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchFoodBanksScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      title='Food Banks / Drop-in'
      icon={HeartHandshake}
    >
      <Card>
        <CardContent className='p-4'>
          <View className='mb-4'>
            <Text className='font-semibold text-gray-900 mb-2'>
              Food Bank Ministry
            </Text>
            <Text className='text-sm text-gray-600'>
              Providing food assistance to families in need.
            </Text>
          </View>

          <View className='bg-indigo-50 p-3 rounded-xl mb-4'>
            <Text className='font-medium text-sm text-gray-900 mb-2'>
              Operating Hours
            </Text>
            <Text className='text-sm text-gray-800'>
              Wednesdays & Saturdays
            </Text>
            <Text className='text-sm text-gray-800'>10:00 AM - 2:00 PM</Text>
          </View>

          <View>
            <Text className='font-semibold text-gray-900 mb-2'>
              How to Help
            </Text>
            <View className='gap-2'>
              <Button size='sm' className='w-full'>
                <Text className='text-white font-medium'>Donate Food</Text>
              </Button>
              <Button size='sm' variant='outline' className='w-full'>
                <Text className='text-gray-900 font-medium'>Volunteer</Text>
              </Button>
            </View>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchHealthCounselingScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      title='Health & Counseling'
      icon={Heart}
    >
      <View className='gap-4'>
        <Card>
          <CardContent className='p-4'>
            <Text className='font-semibold text-gray-900 mb-2'>
              Health Services
            </Text>
            <Text className='text-sm text-gray-600 mb-3'>
              Free health screenings and wellness programs.
            </Text>
            <Text className='text-sm text-gray-600'>
              First Saturday of each month
            </Text>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-4'>
            <Text className='font-semibold text-gray-900 mb-2'>
              Counseling Services
            </Text>
            <Text className='text-sm text-gray-600 mb-3'>
              Professional pastoral counseling available.
            </Text>
            <Button size='sm' className='w-full'>
              <Text className='text-white font-medium'>
                Request Appointment
              </Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchVolunteerScreen({ church }: ChurchScreenProps) {

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
