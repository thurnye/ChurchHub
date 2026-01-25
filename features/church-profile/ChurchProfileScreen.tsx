import {
  View,
  Text,
  ScrollView,
  Pressable,
  Linking,
  TextInput,
} from 'react-native';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  ArrowLeft,
  Heart,
  Navigation,
  Share2,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Video,
  Calendar,
  DollarSign,
  ChevronRight,
  Menu,
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  Card,
  CardContent,
  Badge,
  Button,
  Avatar,
} from '@/shared/components/ui';
import { Church, churches } from '@/data/mockData';
import { ChurchMenu } from '@/shared/components/ChurchMenu';

// ABOUT
import {
  ChurchWhoWeAreScreen,
  ChurchMissionScreen,
  ChurchBeliefsScreen,
  ChurchHistoryScreen,
  ChurchStructureScreen,
  ChurchArchitectureScreen,
  ChurchClergyScreen,
  ChurchStaffScreen,
  ChurchGlobalChurchNewsScreen,
  ChurchCareersScreen,
} from './components/AboutMenuSectionScreens'; // adjust path

// WORSHIP
import {
  ChurchSundayServicesScreen,
  ChurchWeekdayServicesScreen,
  ChurchWorshipOnlineScreen,
  ChurchSermonsScreen,
  ChurchMusicMinistryScreen,
  ChurchBaptismWeddingsScreen,
  ChurchStewardshipScreen,
  ChurchSacramentsScreen,
  ChurchNewslettersScreen,
} from './components/WorshipMenuSectionScreens';

// MINISTRIES
import {
  ChurchFaithFormationScreen,
  ChurchBibleStudyScreen,
  ChurchYouthFamilyScreen,
  ChurchGroupsScreen,
  ChurchPastoralCareScreen,
  ChurchMembershipScreen,
} from './components/MinistriesMenuSectionScreens';

// GIVE
import {
  ChurchWhyGiveScreen,
  ChurchHowToGiveScreen,
  ChurchOnlineGivingScreen,
  ChurchPledgesScreen,
  ChurchReceiptsScreen,
} from './components/GiveMenuSectionScreens';

// EVENTS
import {
  ChurchEventsScreen,
  ChurchSpecialServicesScreen,
  ChurchConferencesScreen,
  ChurchLecturesScreen,
  ChurchPastEventsScreen,
} from './components/EventMenuSectionScreens';

// COMMUNITY (you already have these)
import {
  ChurchCommunityProgramsScreen,
  ChurchOutreachScreen,
  ChurchFoodBanksScreen,
  ChurchHealthCounselingScreen,
  ChurchVolunteerScreen,
} from './components/CommunityMenuSectionScreens';

// RESOURCES
import {
  ChurchDevotionalsScreen,
  ChurchStudyGuidesScreen,
  ChurchFormsScreen,
} from './components/ResourcesMenuSectionScreens';

// CONTACT
import {
  ChurchContactOfficialsScreen,
  ChurchGeneralEnquiriesScreen,
  ChurchLocationScreen,
  ChurchAccessibilityScreen,
} from './components/ContactMenuSectionScreens';

import { ChurchTopBar } from '@/shared/components/ChurchTopBar';
import { ChurchMenuAction } from './types/church.profile.types';

const tabs = ['Overview', 'Services', 'Clergy', 'Events', 'Give', 'Contact'];

export type ChurchScreenComponent = React.ComponentType<{
  church: Church;
  onBack: () => void;
}>;

export function ChurchProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const [donations, setDonations] = useState({
    amount: 50,
    type: '',
  });
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const church = churches.find((c) => c.id === id);

  const [activeMenuAction, setActiveMenuAction] = useState<string | null>(null);

  if (!church) {
    return (
      <View className='flex-1 items-center justify-center'>
        <Text className='text-gray-500'>Church not found</Text>
      </View>
    );
  }

  const menuScreenRegistry: Partial<Record<string, ChurchScreenComponent>> = {
    // About
    'who-we-are': ChurchWhoWeAreScreen,
    'mission-vision': ChurchMissionScreen,
    beliefs: ChurchBeliefsScreen,
    history: ChurchHistoryScreen,
    structure: ChurchStructureScreen,
    architecture: ChurchArchitectureScreen,
    clergy: ChurchClergyScreen,
    staff: ChurchStaffScreen,
    'global-church-news': ChurchGlobalChurchNewsScreen,
    careers: ChurchCareersScreen,

    // Worship
    'sunday-services': ChurchSundayServicesScreen,
    'weekday-services': ChurchWeekdayServicesScreen,
    'worship-online': ChurchWorshipOnlineScreen,
    sermons: ChurchSermonsScreen,
    music: ChurchMusicMinistryScreen,
    'baptism-weddings': ChurchBaptismWeddingsScreen,
    stewardship: ChurchStewardshipScreen,
    sacraments: ChurchSacramentsScreen,
    newsletters: ChurchNewslettersScreen,

    // Ministries
    'faith-formation': ChurchFaithFormationScreen,
    'bible-study': ChurchBibleStudyScreen,
    'youth-family': ChurchYouthFamilyScreen,
    groups: ChurchGroupsScreen,
    'pastoral-care': ChurchPastoralCareScreen,
    membership: ChurchMembershipScreen,

    // Give
    'why-give': ChurchWhyGiveScreen,
    'how-to-give': ChurchHowToGiveScreen,
    'online-giving': ChurchOnlineGivingScreen,
    pledges: ChurchPledgesScreen,
    receipts: ChurchReceiptsScreen,

    // Events
    events: ChurchEventsScreen,
    'special-services': ChurchSpecialServicesScreen,
    conferences: ChurchConferencesScreen,
    lectures: ChurchLecturesScreen,
    'past-events': ChurchPastEventsScreen,

    // Community
    'community-programs': ChurchCommunityProgramsScreen,
    outreach: ChurchOutreachScreen,
    'food-banks': ChurchFoodBanksScreen,
    'health-counseling': ChurchHealthCounselingScreen,
    volunteer: ChurchVolunteerScreen,

    // Resources
    devotionals: ChurchDevotionalsScreen,
    'study-guides': ChurchStudyGuidesScreen,
    forms: ChurchFormsScreen,

    // Contact
    'contact-clergy': ChurchContactOfficialsScreen,
    'general-enquiries': ChurchGeneralEnquiriesScreen,
    location: ChurchLocationScreen,
    accessibility: ChurchAccessibilityScreen,
  };

  const handleCall = () => {
    Linking.openURL(`tel:${church.phone}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${church.email}`);
  };

  const handleWebsite = () => {
    Linking.openURL(`https://${church.website}`);
  };

  const handleMenuNavigation = (action: string) => {
    // DO NOT DELETE THIS COMMENTED CODE:
    // If the action should just switch to an existing tab:
    // const actionToTab: Record<string, (typeof tabs)[number]> = {
    //   events: 'Overview',
    //   sermons: 'Overview',
    //   'contact-clergy': 'Overview',
    //   'general-enquiries': 'Overview',
    //   location: 'Overview',
    //   accessibility: 'Overview',
    //   'sunday-services': 'Overview',
    //   'weekday-services': 'Overview',
    //   'special-services': 'Overview',
    // };

    // if (actionToTab[action]) {
    //   setActiveMenuAction(null);
    //   setActiveTab(actionToTab[action]);
    //   return;
    // }
    setActiveTab('Overview');

    // Otherwise render a dedicated screen inside the tab content area
    if (menuScreenRegistry[action]) {
      setActiveMenuAction(action);
      return;
    }

    // Fallback: if you tapped something not wired yet
    console.log('No screen wired for action:', action);
  };

  return (
    <View className='flex-1 bg-gray-50'>
      <ChurchTopBar
        churchName={church.name}
        showLogo
        onNavigate={handleMenuNavigation}
      />
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <View className='relative' style={{ height: 256 }}>
          <Image
            source={{ uri: church.image }}
            style={{ width: '100%', height: '100%' }}
            contentFit='cover'
          />
          <View className='absolute inset-0 bg-black/40' />

          {/* Header Actions */}
          <View
            style={{ paddingTop: insets.top }}
            className='absolute top-0 left-0 right-0'
          >
            <View className='flex-row justify-between px-4 py-2'>
              <Pressable
                onPress={() => router.back()}
                className='w-10 h-10 bg-white/70 rounded-full items-center justify-center'
              >
                <ArrowLeft size={20} color='#111827' />
              </Pressable>
              <View className='flex-row gap-2'>
                <Pressable
                  onPress={() => setIsFollowing(!isFollowing)}
                  className={`w-6 h-6 rounded-full items-center justify-center ${
                    isFollowing ? 'bg-red-500' : 'bg-white/70'
                  }`}
                >
                  <Heart
                    size={15}
                    color={isFollowing ? '#ffffff' : '#111827'}
                    fill={isFollowing ? '#ffffff' : 'none'}
                  />
                </Pressable>
                <Pressable className='w-6 h-6 bg-white/70 rounded-full items-center justify-center'>
                  <Share2 size={15} color='#111827' />
                </Pressable>
              </View>
            </View>
          </View>

          {/* Church Name */}
          <View className='absolute bottom-4 left-4 right-4'>
            <Text className='text-2xl font-bold text-white mb-2'>
              {church.name}
            </Text>
            <View className='flex-row items-center gap-2 '>
              <Badge className='bg-white/90'>
                <Text className='text-gray-900 text-xs font-medium'>
                  {church.denomination}
                </Text>
              </Badge>
              <View className='flex-row items-center gap-1'>
                <MapPin size={14} color='#ffffff' />
                <Text className='text-white text-sm'>{church.distance}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className='bg-white px-4 py-4 flex-row gap-2 border-b border-gray-100'>
          {church.hasLivestream && (
            <Button size='sm' className='flex-1'>
              <View className='flex-row items-center gap-1'>
                <Video size={16} color='#ffffff' />
                <Text className='text-white text-sm font-medium'>
                  Watch Live
                </Text>
              </View>
            </Button>
          )}
          <Button variant='outline' size='sm' className='flex-1'>
            <View className='flex-row items-center gap-1'>
              <Navigation size={16} color='#111827' />
              <Text className='text-gray-900 text-sm font-medium'>
                Directions
              </Text>
            </View>
          </Button>
        </View>

        {/* Tab Navigation */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className='bg-white border-b border-gray-100'
        >
          <View className='flex-row px-4 py-3 gap-2'>
            {tabs.map((tab) => (
              <Pressable
                key={tab}
                onPress={() => {
                  setActiveMenuAction(null);
                  setActiveTab(tab);
                }}
                className={`px-4 py-2 rounded-full ${
                  activeTab === tab ? 'bg-indigo-600' : 'bg-gray-100'
                }`}
              >
                <Text
                  className={`text-sm font-medium ${
                    activeTab === tab ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {tab}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        {/* Tab Content */}
        <View className='px-4 py-4'>
          {activeMenuAction && menuScreenRegistry[activeMenuAction] ? (
            (() => {
              const Screen = menuScreenRegistry[activeMenuAction];
              return (
                <Screen
                  church={church}
                  onBack={() => setActiveMenuAction(null)}
                />
              );
            })()
          ) : (
            <>
              {/* existing tab content below */}
              {activeTab === 'Overview' && (
                <View className='gap-4'>
                  <Card>
                    <CardContent>
                      <Text className='font-semibold text-gray-900 mb-2'>
                        About Us
                      </Text>
                      <Text className='text-sm text-gray-600 leading-5'>
                        {church.description}
                      </Text>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent>
                      <Text className='font-semibold text-gray-900 mb-2'>
                        Our Mission
                      </Text>
                      <Text className='text-sm text-gray-600 leading-5'>
                        {church.mission}
                      </Text>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent>
                      <Text className='font-semibold text-gray-900 mb-2'>
                        Our Vision
                      </Text>
                      <Text className='text-sm text-gray-600 leading-5'>
                        {church.vision}
                      </Text>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent>
                      <Text className='font-semibold text-gray-900 mb-3'>
                        Ministries
                      </Text>
                      <View className='flex-row flex-wrap gap-2'>
                        {church.ministries.map((ministry, index) => (
                          <Badge key={index} variant='secondary'>
                            <Text className='text-xs text-gray-700'>
                              {ministry}
                            </Text>
                          </Badge>
                        ))}
                      </View>
                    </CardContent>
                  </Card>
                </View>
              )}

              {activeTab === 'Services' && (
                <View className='gap-4'>
                  {church.serviceTimes.map((service, index) => (
                    <Card key={index}>
                      <CardContent>
                        <View className='flex-row items-center gap-3'>
                          <View className='w-12 h-12 bg-indigo-100 rounded-full items-center justify-center'>
                            <Clock size={24} color='#4f46e5' />
                          </View>
                          <View className='flex-1'>
                            <Text className='font-semibold text-gray-900'>
                              {service.type}
                            </Text>
                            <Text className='text-sm text-gray-600'>
                              {service.day} at {service.time}
                            </Text>
                          </View>
                        </View>
                      </CardContent>
                    </Card>
                  ))}

                  <Card>
                    <CardContent>
                      <Text className='font-semibold text-gray-900 mb-2'>
                        Parking Information
                      </Text>
                      <Text className='text-sm text-gray-600'>
                        {church.parkingInfo}
                      </Text>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent>
                      <Text className='font-semibold text-gray-900 mb-2'>
                        Accessibility
                      </Text>
                      <Text className='text-sm text-gray-600'>
                        {church.accessibilityInfo}
                      </Text>
                    </CardContent>
                  </Card>
                </View>
              )}

              {activeTab === 'Clergy' && (
                <View className='gap-4'>
                  {/* Pastor */}
                  <Card>
                    <CardContent>
                      <View className='flex-row items-start gap-4'>
                        <Avatar
                          src={church.pastor.photo}
                          alt={church.pastor.name}
                          size='xl'
                        />
                        <View className='flex-1'>
                          <Text className='font-semibold text-gray-900 text-lg'>
                            {church.pastor.name}
                          </Text>
                          <Text className='text-sm text-indigo-600 mb-2'>
                            {church.pastor.role}
                          </Text>
                          <Text className='text-sm text-gray-600 leading-5'>
                            {church.pastor.bio}
                          </Text>
                        </View>
                      </View>
                    </CardContent>
                  </Card>

                  {/* Other Clergy */}
                  {church.clergy.map((member, index) => (
                    <Card key={index}>
                      <CardContent>
                        <View className='flex-row items-center gap-4'>
                          <Avatar
                            src={member.photo}
                            alt={member.name}
                            size='lg'
                          />
                          <View className='flex-1'>
                            <Text className='font-semibold text-gray-900'>
                              {member.name}
                            </Text>
                            <Text className='text-sm text-gray-600'>
                              {member.role}
                            </Text>
                          </View>
                          <Pressable
                            onPress={() =>
                              Linking.openURL(`mailto:${member.email}`)
                            }
                            className='w-10 h-10 bg-gray-100 rounded-full items-center justify-center'
                          >
                            <Mail size={18} color='#6b7280' />
                          </Pressable>
                        </View>
                      </CardContent>
                    </Card>
                  ))}
                </View>
              )}

              {activeTab === 'Events' && (
                <View className='gap-4'>
                  <Card>
                    <CardContent className='items-center py-8'>
                      <Calendar size={48} color='#9ca3af' />
                      <Text className='text-gray-500 mt-3'>
                        No upcoming events
                      </Text>
                    </CardContent>
                  </Card>
                </View>
              )}

              {activeTab === 'Give' && (
                <View className='gap-4'>
                  <Card>
                    <CardContent>
                      <View className='items-center py-4'>
                        <View className='w-16 h-16 bg-green-100 rounded-full items-center justify-center mb-4'>
                          <DollarSign size={32} color='#16a34a' />
                        </View>
                        <Text className='font-semibold text-gray-900 text-lg mb-2'>
                          Support Our Ministry
                        </Text>
                        <Text className='text-sm text-gray-600 text-center mb-4'>
                          Your generous giving helps us continue serving our
                          community, supporting missions, and spreading the
                          gospel. Every contribution makes a lasting impact.
                        </Text>
                      </View>
                    </CardContent>
                  </Card>
                  <View className='gap-4'>
                    <Card>
                      <CardContent>
                        <Text className='text-sm font-medium text-gray-900 mb-3'>
                          Select Donation Type
                        </Text>

                        <View className='flex-row flex-wrap mb-4 -mx-1'>
                          {[
                            'Tithe',
                            'Offering',
                            'Missions',
                            'Building Fund',
                            'Stewardship',
                            'Pledge',
                          ].map((type) => {
                            const active = donations.type === type;
                            return (
                              <View key={type} className='w-1/2 px-1 mb-2'>
                                <Pressable
                                  onPress={() =>
                                    setDonations({ ...donations, type: type })
                                  }
                                  className={`flex-1 py-2 rounded-lg border-2 items-center ${
                                    active
                                      ? 'border-indigo-600 bg-indigo-50'
                                      : 'border-gray-200'
                                  }`}
                                >
                                  <Text className='text-sm text-gray-900 font-medium'>
                                    {type}
                                  </Text>
                                </Pressable>
                              </View>
                            );
                          })}
                        </View>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent>
                        <Text className='text-sm font-medium text-gray-900 mb-3'>
                          Amount
                        </Text>

                        <View className='flex-row gap-2 mb-3'>
                          {[25, 50, 100, 250].map((amt) => {
                            const active = donations.amount === amt;
                            return (
                              <Pressable
                                key={amt}
                                onPress={() =>
                                  setDonations({ ...donations, amount: amt })
                                }
                                className={`flex-1 py-2 rounded-lg border-2 items-center ${
                                  active
                                    ? 'border-indigo-600 bg-indigo-50'
                                    : 'border-gray-200'
                                }`}
                              >
                                <Text
                                  className={`font-medium ${active ? 'text-indigo-600' : 'text-gray-900'}`}
                                >
                                  ${amt}
                                </Text>
                              </Pressable>
                            );
                          })}
                        </View>

                        {/* NOTE: Use your existing Input component if you have one.
                      If not, swap this with TextInput and NativeWind className. */}
                        <View className='border border-gray-200 rounded-lg px-3 py-2'>
                          <TextInput
                            value={String(donations)}
                            onChangeText={(text) => {
                              const num = parseInt(
                                text.replace(/[^0-9]/g, ''),
                                10,
                              );
                              setDonations({
                                ...donations,
                                amount: isNaN(num) ? 0 : num,
                              });
                            }}
                            keyboardType='numeric'
                            className='text-sm text-gray-900'
                            placeholder='Custom Amount'
                          />
                        </View>
                      </CardContent>
                    </Card>

                    <Button className='w-full' size='lg'>
                      <View className='flex-row items-center justify-center gap-2'>
                        <DollarSign size={18} color='#ffffff' />
                        <Text className='text-white font-semibold'>
                          Give ${donations.amount}
                        </Text>
                      </View>
                    </Button>

                    <Pressable className='items-center'>
                      <Text className='text-sm text-indigo-600'>
                        View Donation Receipt History
                      </Text>
                    </Pressable>
                  </View>
                </View>
              )}

              {activeTab === 'Contact' && (
                <View className='gap-4'>
                  <Card>
                    <Pressable onPress={handleCall}>
                      <CardContent>
                        <View className='flex-row items-center gap-4'>
                          <View className='w-12 h-12 bg-blue-100 rounded-full items-center justify-center'>
                            <Phone size={24} color='#2563eb' />
                          </View>
                          <View className='flex-1'>
                            <Text className='font-medium text-gray-900'>
                              Phone
                            </Text>
                            <Text className='text-sm text-gray-600'>
                              {church.phone}
                            </Text>
                          </View>
                          <ChevronRight size={20} color='#9ca3af' />
                        </View>
                      </CardContent>
                    </Pressable>
                  </Card>

                  <Card>
                    <Pressable onPress={handleEmail}>
                      <CardContent>
                        <View className='flex-row items-center gap-4'>
                          <View className='w-12 h-12 bg-purple-100 rounded-full items-center justify-center'>
                            <Mail size={24} color='#9333ea' />
                          </View>
                          <View className='flex-1'>
                            <Text className='font-medium text-gray-900'>
                              Email
                            </Text>
                            <Text className='text-sm text-gray-600'>
                              {church.email}
                            </Text>
                          </View>
                          <ChevronRight size={20} color='#9ca3af' />
                        </View>
                      </CardContent>
                    </Pressable>
                  </Card>

                  <Card>
                    <Pressable onPress={handleWebsite}>
                      <CardContent>
                        <View className='flex-row items-center gap-4'>
                          <View className='w-12 h-12 bg-green-100 rounded-full items-center justify-center'>
                            <Globe size={24} color='#16a34a' />
                          </View>
                          <View className='flex-1'>
                            <Text className='font-medium text-gray-900'>
                              Website
                            </Text>
                            <Text className='text-sm text-gray-600'>
                              {church.website}
                            </Text>
                          </View>
                          <ChevronRight size={20} color='#9ca3af' />
                        </View>
                      </CardContent>
                    </Pressable>
                  </Card>

                  <Card>
                    <CardContent>
                      <View className='flex-row items-start gap-4'>
                        <View className='w-12 h-12 bg-amber-100 rounded-full items-center justify-center'>
                          <MapPin size={24} color='#d97706' />
                        </View>
                        <View className='flex-1'>
                          <Text className='font-medium text-gray-900'>
                            Address
                          </Text>
                          <Text className='text-sm text-gray-600'>
                            {church.address}
                          </Text>
                        </View>
                      </View>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent>
                      <Text className='font-medium text-gray-900 mb-1'>
                        Office Hours
                      </Text>
                      <Text className='text-sm text-gray-600'>
                        {church.officeHours}
                      </Text>
                    </CardContent>
                  </Card>
                </View>
              )}
            </>
          )}
        </View>

        {/* Bottom padding */}
        <View className='h-8' />
      </ScrollView>

      {/* <ChurchMenu
        churchName={church.name}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleMenuNavigation}
      /> */}
    </View>
  );
}
