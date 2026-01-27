import { GlobalSermonsScreen } from '@/shared/components/globalMenuScreen';
import { useRouter } from 'expo-router';

export default function GlobalSermonsRoute() {
  const router = useRouter();

  return <GlobalSermonsScreen />;
}
