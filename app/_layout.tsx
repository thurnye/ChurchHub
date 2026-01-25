import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css';

import { useColorScheme } from '@/components/useColorScheme';
import { AuthProvider } from '@/shared/context/AuthContext';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(tabs)' />
        {/* Auth screens */}
        <Stack.Screen
          name='login'
          options={{
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name='signup'
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name='forgot-password'
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        {/* Global menu screens */}
        <Stack.Screen
          name='my-churches'
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='my-events'
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='my-donations'
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='preferences'
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='help'
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='suggest-church'
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='terms'
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='report'
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name='language'
          options={{ animation: 'slide_from_right' }}
        />
      </Stack>
    </ThemeProvider>
  );
}
