import { View, Text, Pressable, ScrollView, Modal } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import {
  X,
  Home,
  Church,
  MapPin,
  Calendar,
  Radio,
  Heart,
  DollarSign,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Globe,
  Flag,
  FileCheck,
} from 'lucide-react-native';
import { cn } from '@/shared/utils/cn';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import { useAuth } from '@/shared/context/AuthContext';

interface MenuSection {
  title: string;
  items: {
    icon: typeof Home;
    label: string;
    action: string;
  }[];
}

const menuSections: MenuSection[] = [
  {
    title: 'Discover',
    items: [
      { icon: MapPin, label: 'Nearby Churches', action: 'nearby-churches' },
      { icon: Church, label: 'Denominations', action: 'denominations' },
      { icon: Calendar, label: 'Events', action: 'events' },
      { icon: Radio, label: 'Sermons', action: 'sermons' },
    ],
  },
  {
    title: 'My Activity',
    items: [
      { icon: Heart, label: 'My Churches', action: 'my-churches' },
      { icon: Calendar, label: 'My Events', action: 'my-events' },
      { icon: DollarSign, label: 'My Donations', action: 'my-donations' },
    ],
  },
  {
    title: 'Settings',
    items: [
      { icon: Settings, label: 'Preferences', action: 'preferences' },
      { icon: Flag, label: 'Report Church Info', action: 'report' },
      { icon: Church, label: 'Suggest a Church', action: 'suggest-church' },
      { icon: FileCheck, label: 'Terms & Privacy', action: 'terms' },
      { icon: Globe, label: 'Language Settings', action: 'language' },
      { icon: HelpCircle, label: 'Help & Support', action: 'help' },
    ],
  },
];

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (action: string) => void;
}

export function HamburgerMenu({
  isOpen,
  onClose,
  onNavigate,
}: HamburgerMenuProps) {
  const insets = useSafeAreaInsets();
  const translateX = useSharedValue(300);
  const { logout } = useAuth();

  useEffect(() => {
    translateX.value = withTiming(isOpen ? 0 : 300, { duration: 250 });
  }, [isOpen]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleItemPress = (action: string) => {
    onClose();

    if (action === 'logout') {
      logout();
      return;
    }

    // Navigate to screens based on action
    switch (action) {
      case 'nearby-churches':
        router.push('/(tabs)/churches');
        break;
      case 'denominations':
        router.push('/(tabs)/churches');
        break;
      case 'events':
        router.push('/(tabs)/community');
        break;
      case 'sermons':
        router.push('/(tabs)/worship');
        break;
      case 'my-churches':
        router.push('/my-churches');
        break;
      case 'my-events':
        router.push('/my-events');
        break;
      case 'my-donations':
        router.push('/my-donations');
        break;
      case 'preferences':
        router.push('/preferences');
        break;
      case 'report':
        router.push('/report');
        break;
      case 'suggest-church':
        router.push('/suggest-church');
        break;
      case 'terms':
        router.push('/terms');
        break;
      case 'language':
        router.push('/language');
        break;
      case 'help':
        router.push('/help');
        break;
      default:
        onNavigate(action);
    }
  };

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType='fade'
      onRequestClose={onClose}
    >
      {/* Backdrop */}
      <Pressable className='absolute inset-0 bg-black/50' onPress={onClose} />

      {/* Drawer */}
      <Animated.View
        style={[
          animatedStyle,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
        className='absolute top-0 right-0 bottom-0 w-80 bg-white'
      >
        {/* Header */}
        <View className='p-4 border-b border-gray-100'>
          <View className='flex-row items-center justify-between'>
            <View className='flex-row items-center gap-2'>
              <View className='w-8 h-8 bg-indigo-600 rounded-lg items-center justify-center'>
                <Text className='text-white font-bold text-sm'>CH</Text>
              </View>
              <Text className='font-semibold text-lg text-gray-900'>
                ChurchHub
              </Text>
            </View>
            <Pressable
              onPress={onClose}
              className='w-10 h-10 items-center justify-center rounded-full'
            >
              <X size={24} color='#6b7280' />
            </Pressable>
          </View>
        </View>

        {/* Menu Content */}
        <ScrollView className='flex-1'>
          {menuSections.map((section, sectionIndex) => (
            <View key={sectionIndex} className='py-4'>
              <Text className='px-4 text-xs font-semibold text-gray-500 uppercase mb-2'>
                {section.title}
              </Text>
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <Pressable
                    key={itemIndex}
                    onPress={() => handleItemPress(item.action)}
                    className='flex-row items-center justify-between mx-2 px-3 py-3 rounded-lg active:bg-gray-100'
                  >
                    <View className='flex-row items-center gap-3'>
                      <Icon size={20} color='#6b7280' />
                      <Text className='text-sm text-gray-900'>
                        {item.label}
                      </Text>
                    </View>
                    <ChevronRight size={18} color='#9ca3af' />
                  </Pressable>
                );
              })}
            </View>
          ))}
        </ScrollView>

        {/* Footer */}
        <View className='p-4 border-t border-gray-100'>
          <Pressable
            onPress={() => handleItemPress('logout')}
            className='flex-row items-center gap-3 px-3 py-3 rounded-lg active:bg-gray-100'
          >
            <LogOut size={20} color='#dc2626' />
            <Text className='text-sm text-red-600'>Sign Out</Text>
          </Pressable>
        </View>
      </Animated.View>
    </Modal>
  );
}
