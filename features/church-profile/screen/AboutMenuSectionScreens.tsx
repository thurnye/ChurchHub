// church-screens.tsx (React Native + NativeWind)
// Converts the provided “remaining church screens” to React Native.
// Assumes you already have:
//  - ChurchScreenTemplate (RN + NativeWind version)
//  - Card/CardContent/Button/Badge from "@/shared/components/ui"
//  - NativeWind configured (className works)

import {
  BookOpen,
  Briefcase,
  Church as ChurchIcon,
  FileText,
  Heart,
  Users,
} from 'lucide-react-native';
import React, { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

import { careers, Church } from '@/data/mockData';
import { Badge, Card, CardContent } from '@/shared/components/ui';
import { ChurchScreenTemplate } from '../components/ChurchScreenTemplate';
import { ChurchModal } from '../components/ChurchModal';
import { ChurchGroupDetailScreen } from '../components/ChurchGroupDetailScreen';
import { CareerDetailScreen } from '../components/CareerDetailScreen';

type LucideIcon = React.ComponentType<{ size?: number; color?: string }>;

interface ChurchScreenProps {
  church: Church;
  onBack: () => void;
}

/** -----------------------------
 * Simple Accordion (RN)
 * ------------------------------*/
function Accordion({
  items,
}: {
  items: { key: string; title: string; content: string }[];
}) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <View className='gap-2'>
      {items.map((it) => {
        const isOpen = openKey === it.key;
        return (
          <View
            key={it.key}
            className='rounded-xl border border-gray-200 bg-white overflow-hidden'
          >
            <Pressable
              onPress={() => setOpenKey(isOpen ? null : it.key)}
              className='px-4 py-3 active:bg-gray-50'
            >
              <Text className='font-semibold text-gray-900'>{it.title}</Text>
            </Pressable>

            {isOpen && (
              <View className='px-4 pb-4'>
                <Text className='text-sm text-gray-600 leading-5'>
                  {it.content}
                </Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

/** -----------------------------
 * ABOUT SECTION SCREENS
 * ------------------------------*/
export function ChurchWhoWeAreScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} title='Who We Are' icon={ChurchIcon}>
      <Card>
        <CardContent className='p-4 gap-4'>
          <View>
            <Text className='font-semibold text-gray-900 mb-2'>
              About {church.name}
            </Text>
            <Text className='text-sm text-gray-600'>{church.description}</Text>
          </View>

          <View>
            <Text className='font-semibold text-gray-900 mb-2'>
              Our History
            </Text>
            <Text className='text-sm text-gray-600 leading-5'>
              Founded in 1985, we have been serving our community for over 35
              years with unwavering dedication to spreading the Gospel and
              nurturing spiritual growth.
            </Text>
          </View>

          <View>
            <Text className='font-semibold text-gray-900 mb-2'>
              What We Believe
            </Text>
            <Text className='text-sm text-gray-600 leading-5'>
              We are a {church.denomination} congregation committed to biblical
              teaching, vibrant worship, and compassionate service.
            </Text>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchMissionScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} title='Mission & Vision' icon={Heart}>
      <Card className='mb-4'>
        <CardContent className='p-4'>
          <Text className='font-semibold text-gray-900 mb-2'>Our Mission</Text>
          <Text className='text-sm text-gray-600 leading-5'>
            {church.mission}
          </Text>
        </CardContent>
      </Card>

      <Card>
        <CardContent className='p-4'>
          <Text className='font-semibold text-gray-900 mb-2'>Our Vision</Text>
          <Text className='text-sm text-gray-600 leading-5'>
            {church.vision}
          </Text>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchBeliefsScreen({ church }: ChurchScreenProps) {
  const items = useMemo(
    () => [
      {
        key: 'bible',
        title: 'The Bible',
        content:
          'We believe the Bible is the inspired word of God and our final authority for faith and practice.',
      },
      {
        key: 'salvation',
        title: 'Salvation',
        content: 'We believe in salvation through faith in Jesus Christ alone.',
      },
      {
        key: 'trinity',
        title: 'The Trinity',
        content:
          'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.',
      },
      {
        key: 'church',
        title: 'The Church',
        content:
          'We believe the church is the body of Christ, called to worship, fellowship, and service.',
      },
    ],
    [],
  );

  return (
    <ChurchScreenTemplate
      church={church}
      title='Beliefs / Doctrine'
      icon={BookOpen}
    >
      <Card>
        <CardContent className='p-4'>
          <Accordion items={items} />
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchHistoryScreen({ church }: ChurchScreenProps) {
  const timeline = [
    { year: '1985', text: 'Church founded with 50 members' },
    { year: '1992', text: 'New building construction completed' },
    { year: '2005', text: 'Expansion to include youth center' },
    { year: '2020', text: 'Launch of online worship services' },
    { year: '2026', text: 'Over 2,000 active members' },
  ];

  return (
    <ChurchScreenTemplate church={church} title='History' icon={FileText}>
      <Card>
        <CardContent className='p-4'>
          <View className='border-l-2 border-indigo-600 pl-4 gap-4'>
            {timeline.map((t) => (
              <View key={t.year}>
                <Text className='text-sm font-semibold text-indigo-600'>
                  {t.year}
                </Text>
                <Text className='text-sm text-gray-600'>{t.text}</Text>
              </View>
            ))}
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchStructureScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate church={church} title='Structure' icon={Users}>
      <Card>
        <CardContent className='p-4'>
          <Text className='font-semibold text-gray-900 mb-2'>
            Denominational Structure
          </Text>
          <Text className='text-sm text-gray-600 mb-3'>
            {church.denomination}
          </Text>

          <View className='pl-4 border-l-2 border-gray-200 gap-2'>
            <Text className='text-sm text-gray-900'>Region / Diocese</Text>
            <Text className='text-sm text-gray-900'>Provincial Oversight</Text>
            <Text className='text-sm text-gray-900'>
              Local Church Governance
            </Text>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchArchitectureScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      title='Architecture & Heritage'
      icon={ChurchIcon}
    >
      <Card>
        <CardContent className='p-4 gap-4'>
          <Image
            source={{ uri: church.image }}
            className='w-full h-48 rounded-xl'
            resizeMode='cover'
          />

          <View>
            <Text className='font-semibold text-gray-900 mb-2'>
              Architectural Features
            </Text>
            <Text className='text-sm text-gray-600 leading-5'>
              Our building features traditional {church.denomination}{' '}
              architecture with beautiful stained glass windows, a spacious
              sanctuary, and modern facilities.
            </Text>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchClergyScreen({ church }: ChurchScreenProps) {
  return (
    <ChurchScreenTemplate
      church={church}
      title='Clergy & Leadership'
      icon={Users}
    >
      <View className='gap-3'>
        <Card>
          <CardContent className='p-4'>
            <View className='flex-row items-start gap-3'>
              <Image
                source={{ uri: church.pastor.photo }}
                className='w-16 h-16 rounded-full'
                resizeMode='cover'
              />

              <View className='flex-1'>
                <Text className='font-semibold text-gray-900'>
                  {church.pastor.name}
                </Text>
                <Text className='text-sm text-gray-600 mb-2'>
                  {church.pastor.role}
                </Text>
                <Text className='text-sm text-gray-600 leading-5'>
                  {church.pastor.bio}
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {church.clergy.map((c, idx) => (
          <Card key={idx}>
            <CardContent className='p-4'>
              <View className='flex-row items-center gap-3'>
                <Image
                  source={{ uri: c.photo }}
                  className='w-12 h-12 rounded-full'
                  resizeMode='cover'
                />
                <View className='flex-1'>
                  <Text className='font-medium text-gray-900'>{c.name}</Text>
                  <Text className='text-sm text-gray-600'>{c.role}</Text>
                </View>
              </View>
            </CardContent>
          </Card>
        ))}
      </View>
    </ChurchScreenTemplate>
  );
}

export function ChurchStaffScreen({ church }: ChurchScreenProps) {
  const staff = [
    'Church Warden - John Smith',
    'Music Director - Sarah Williams',
    'Youth Coordinator - Michael Brown',
    'Administrator - Jane Doe',
  ];

  return (
    <ChurchScreenTemplate
      church={church}
      title='Staff & Lay Leaders'
      icon={Briefcase}
    >
      <Card>
        <CardContent className='p-4'>
          {staff.map((s, idx) => (
            <View
              key={idx}
              className={[
                'py-2 flex-row items-center justify-between',
                idx !== staff.length - 1 ? 'border-b border-gray-100' : '',
              ].join(' ')}
            >
              <Text className='text-sm text-gray-900'>{s}</Text>
            </View>
          ))}
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

export function ChurchGlobalChurchNewsScreen({ church }: ChurchScreenProps) {
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

export function ChurchCareersScreen({ church }: ChurchScreenProps) {
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
