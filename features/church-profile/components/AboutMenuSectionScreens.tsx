// church-screens.tsx (React Native + NativeWind)
// Converts the provided “remaining church screens” to React Native.
// Assumes you already have:
//  - ChurchScreenTemplate (RN + NativeWind version)
//  - Card/CardContent/Button/Badge from "@/shared/components/ui"
//  - NativeWind configured (className works)

import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import {
  BookOpen,
  FileText,
  Users,
  Church as ChurchIcon,
  Briefcase,
  Calendar,
  Video,
  Music,
  Droplet,
  Gift,
  GraduationCap,
  Heart,
} from 'lucide-react-native';

import { Church } from '@/data/mockData';
import { ChurchScreenTemplate } from './ChurchScreenTemplate';
import { Card, CardContent, Button, Badge } from '@/shared/components/ui';

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
  return (
    <ChurchScreenTemplate church={church} title='Careers' icon={Briefcase}>
      <Card>
        <CardContent className='p-4 gap-4'>
          <View>
            <Text className='font-semibold text-gray-900 mb-2'>
              Join Our Team
            </Text>
            <Text className='text-sm text-gray-600 leading-5'>
              We're always looking for passionate individuals to join our
              ministry team.
            </Text>
          </View>

          <View className='gap-2'>
            <Card className='bg-gray-50'>
              <CardContent className='p-3'>
                <Text className='font-medium text-sm text-gray-900 mb-1'>
                  Youth Pastor
                </Text>
                <Text className='text-xs text-gray-600'>
                  Full-time position
                </Text>
              </CardContent>
            </Card>

            <Card className='bg-gray-50'>
              <CardContent className='p-3'>
                <Text className='font-medium text-sm text-gray-900 mb-1'>
                  Worship Leader
                </Text>
                <Text className='text-xs text-gray-600'>
                  Part-time position
                </Text>
              </CardContent>
            </Card>
          </View>
        </CardContent>
      </Card>
    </ChurchScreenTemplate>
  );
}

/** -----------------------------
 * WORSHIP SECTION SCREENS
 * ------------------------------*/
// export function ChurchSundayServicesScreen({ church }: ChurchScreenProps) {
//   const sunday = church.serviceTimes.filter((s) => s.day === "Sunday");

//   return (
//     <ChurchScreenTemplate church={church}  title="Sunday Services" icon={ChurchIcon}>
//       <View className="gap-3">
//         {sunday.map((service, idx) => (
//           <Card key={idx}>
//             <CardContent className="p-4">
//               <Text className="font-semibold text-gray-900 mb-2">{service.type}</Text>
//               <Text className="text-sm text-gray-600 mb-3">
//                 {service.day} at {service.time}
//               </Text>

//               {church.hasLivestream ? (
//                 <Button size="sm" className="w-full">
//                   <View className="flex-row items-center justify-center gap-2">
//                     <Video size={16} color="#ffffff" />
//                     <Text className="text-white font-medium">Watch Online</Text>
//                   </View>
//                 </Button>
//               ) : null}
//             </CardContent>
//           </Card>
//         ))}
//       </View>
//     </ChurchScreenTemplate>
//   );
// }

// export function ChurchWeekdayServicesScreen({ church }: ChurchScreenProps) {
//   const weekdays = church.serviceTimes.filter((s) => s.day !== "Sunday");

//   return (
//     <ChurchScreenTemplate church={church}  title="Weekday & Special Services" icon={Calendar}>
//       <Card>
//         <CardContent className="p-4 gap-3">
//           <View>
//             <Text className="font-semibold text-gray-900 mb-2">Weekday Services</Text>

//             {weekdays.map((service, idx) => (
//               <View
//                 key={idx}
//                 className={[
//                   "py-2",
//                   idx !== weekdays.length - 1 ? "border-b border-gray-100" : "",
//                 ].join(" ")}
//               >
//                 <Text className="font-medium text-sm text-gray-900">{service.type}</Text>
//                 <Text className="text-sm text-gray-600">
//                   {service.day} at {service.time}
//                 </Text>
//               </View>
//             ))}
//           </View>

//           <View>
//             <Text className="font-semibold text-gray-900 mb-2">Special Services</Text>
//             <Text className="text-sm text-gray-600 leading-5">
//               Check our events calendar for special services and celebrations.
//             </Text>
//           </View>
//         </CardContent>
//       </Card>
//     </ChurchScreenTemplate>
//   );
// }

// export function ChurchWorshipOnlineScreen({ church }: ChurchScreenProps) {
//   return (
//     <ChurchScreenTemplate church={church}  title="Worship Online" icon={Video}>
//       <Card className="mb-4">
//         <CardContent className="p-4">
//           <Text className="font-semibold text-gray-900 mb-2">Join Us Online</Text>
//           <Text className="text-sm text-gray-600 mb-4 leading-5">
//             Experience worship from anywhere with our live streaming services.
//           </Text>

//           <Button className="w-full">
//             <View className="flex-row items-center justify-center gap-2">
//               <Video size={16} color="#ffffff" />
//               <Text className="text-white font-medium">Watch Live Stream</Text>
//             </View>
//           </Button>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardContent className="p-4">
//           <Text className="font-semibold text-gray-900 mb-2">Live Stream Schedule</Text>

//           <View className="gap-2">
//             {church.serviceTimes.map((service, idx) => (
//               <View
//                 key={idx}
//                 className={[
//                   "flex-row items-center justify-between py-2",
//                   idx !== church.serviceTimes.length - 1 ? "border-b border-gray-100" : "",
//                 ].join(" ")}
//               >
//                 <View>
//                   <Text className="font-medium text-sm text-gray-900">{service.type}</Text>
//                   <Text className="text-xs text-gray-600">{service.day}</Text>
//                 </View>
//                 <Text className="text-sm font-medium text-gray-900">{service.time}</Text>
//               </View>
//             ))}
//           </View>
//         </CardContent>
//       </Card>
//     </ChurchScreenTemplate>
//   );
// }

// export function ChurchSermonsScreen({ church }: ChurchScreenProps) {
//   return (
//     <ChurchScreenTemplate church={church}  title="Sermons & Homilies" icon={FileText}>
//       <Text className="text-sm text-gray-600 mb-4">
//         Listen to our latest sermon recordings and teachings.
//       </Text>

//       <Button variant="outline" className="w-full mb-4">
//         <Text className="text-gray-900 font-medium">View Sermon Library</Text>
//       </Button>

//       <Card>
//         <CardContent className="p-4">
//           <Text className="font-semibold text-gray-900 mb-2">Latest Sermon</Text>
//           <Text className="text-sm font-medium text-gray-900 mb-1">Living by Faith</Text>
//           <Text className="text-sm text-gray-600 mb-2">{church.pastor.name}</Text>
//           <Text className="text-xs text-gray-500">January 21, 2026</Text>
//         </CardContent>
//       </Card>
//     </ChurchScreenTemplate>
//   );
// }

// export function ChurchMusicScreen({ church }: ChurchScreenProps) {
//   return (
//     <ChurchScreenTemplate church={church}  title="Music Ministry" icon={Music}>
//       <Card>
//         <CardContent className="p-4 gap-4">
//           <View>
//             <Text className="font-semibold text-gray-900 mb-2">Our Music Ministry</Text>
//             <Text className="text-sm text-gray-600 leading-5">
//               Join our vibrant worship team in leading the congregation in praise and worship.
//             </Text>
//           </View>

//           <View>
//             <Text className="font-semibold text-gray-900 mb-2">Choirs & Ensembles</Text>
//             <View className="gap-2">
//               {["Main Choir", "Youth Choir", "Worship Band"].map((t) => (
//                 <Text key={t} className="text-sm text-gray-900">
//                   • {t}
//                 </Text>
//               ))}
//             </View>
//           </View>
//         </CardContent>
//       </Card>
//     </ChurchScreenTemplate>
//   );
// }

// export function ChurchBaptismScreen({ church }: ChurchScreenProps) {
//   return (
//     <ChurchScreenTemplate church={church}  title="Baptism & Weddings" icon={Droplet}>
//       <View className="gap-4">
//         <Card>
//           <CardContent className="p-4">
//             <Text className="font-semibold text-gray-900 mb-2">Baptism</Text>
//             <Text className="text-sm text-gray-600 mb-3 leading-5">
//               Baptism is a sacred ordinance representing new life in Christ.
//             </Text>
//             <Button size="sm" className="w-full">
//               <Text className="text-white font-medium">Request Baptism</Text>
//             </Button>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-4">
//             <Text className="font-semibold text-gray-900 mb-2">Weddings</Text>
//             <Text className="text-sm text-gray-600 mb-3 leading-5">
//               We would be honored to host your special day.
//             </Text>
//             <Button size="sm" className="w-full">
//               <Text className="text-white font-medium">Wedding Inquiry</Text>
//             </Button>
//           </CardContent>
//         </Card>
//       </View>
//     </ChurchScreenTemplate>
//   );
// }

// export function ChurchStewardshipScreen({ church }: ChurchScreenProps) {
//   return (
//     <ChurchScreenTemplate church={church}  title="Stewardship" icon={Gift}>
//       <Card>
//         <CardContent className="p-4 gap-4">
//           <View>
//             <Text className="font-semibold text-gray-900 mb-2">Biblical Stewardship</Text>
//             <Text className="text-sm text-gray-600 leading-5">
//               Stewardship is about managing God's gifts wisely - our time, talents, and treasures.
//             </Text>
//           </View>

//           <View>
//             <Text className="font-semibold text-gray-900 mb-2">Teaching Resources</Text>
//             <View className="gap-2">
//               {["Biblical Principles of Giving", "Tithing and Offerings", "Financial Stewardship"].map((t) => (
//                 <Text key={t} className="text-sm text-gray-900">
//                   • {t}
//                 </Text>
//               ))}
//             </View>
//           </View>
//         </CardContent>
//       </Card>
//     </ChurchScreenTemplate>
//   );
// }

// export function ChurchSacramentsScreen({ church }: ChurchScreenProps) {
//   const items = useMemo(
//     () => [
//       {
//         key: "baptism",
//         title: "Baptism",
//         content: "An outward expression of an inward faith in Jesus Christ.",
//       },
//       {
//         key: "communion",
//         title: "Holy Communion",
//         content: "Remembering Christ's sacrifice through bread and wine.",
//       },
//       {
//         key: "confirmation",
//         title: "Confirmation",
//         content: "Affirming one's faith publicly as a mature believer.",
//       },
//     ],
//     [],
//   );

//   return (
//     <ChurchScreenTemplate church={church}  title="Sacraments / Ordinances" icon={BookOpen}>
//       <Card>
//         <CardContent className="p-4">
//           <Accordion items={items} />
//         </CardContent>
//       </Card>
//     </ChurchScreenTemplate>
//   );
// }

// export function ChurchNewslettersScreen({ church }: ChurchScreenProps) {
//   return (
//     <ChurchScreenTemplate church={church}  title="Newsletters" icon={FileText}>
//       <Card className="mb-4">
//         <CardContent className="p-4">
//           <Text className="font-semibold text-gray-900 mb-2">Subscribe to Our Newsletter</Text>
//           <Text className="text-sm text-gray-600 mb-3 leading-5">Stay updated with church news and events.</Text>
//           <Button className="w-full">
//             <Text className="text-white font-medium">Subscribe</Text>
//           </Button>
//         </CardContent>
//       </Card>

//       <View className="gap-2">
//         {[1, 2, 3].map((i) => (
//           <Card key={i}>
//             <CardContent className="p-3">
//               <Text className="font-medium text-sm text-gray-900 mb-1">January {i} Newsletter</Text>
//               <Text className="text-xs text-gray-500">Published Jan {i}, 2026</Text>
//             </CardContent>
//           </Card>
//         ))}
//       </View>
//     </ChurchScreenTemplate>
//   );
// }
