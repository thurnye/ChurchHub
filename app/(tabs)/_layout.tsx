import { Tabs } from 'expo-router';
import { Home, Church, Radio, Users, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4f46e5',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#f3f4f6',
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='churches'
        options={{
          title: 'Churches',
          tabBarIcon: ({ color, size }) => <Church color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='worship'
        options={{
          title: 'Worship',
          tabBarIcon: ({ color, size }) => <Radio color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='community'
        options={{
          title: 'Community',
          tabBarIcon: ({ color, size }) => <Users color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
      {/* Hidden screens - still in tabs for tab bar visibility but not shown as tabs */}
      <Tabs.Screen
        name='church/[id]'
        options={{
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name='denomination/[id]'
        options={{
          href: null, // Hide from tab bar
        }}
      />
    </Tabs>
  );
}
