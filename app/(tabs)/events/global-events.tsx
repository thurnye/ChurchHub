import { GlobalEventsScreen } from '@/shared/components/globalMenuScreen';
import { useRouter } from 'expo-router';

export default function GlobalEventsRoute() {
  const router = useRouter();

  return <GlobalEventsScreen />;
}
