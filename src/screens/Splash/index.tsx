import { useEffect } from 'react';

import type { RootStackScreenProps } from '../../navigation';
import { Brand, Container, Loader, Tagline } from './styles';

const SPLASH_DURATION_MS = 2000;

export function SplashScreen({ navigation }: RootStackScreenProps<'Splash'>) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, SPLASH_DURATION_MS);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container>
      <Brand>Mona Recipes</Brand>
      <Tagline>The best homemade recipes for you!</Tagline>
      <Loader color="#FFFFFF" size="large" />
    </Container>
  );
}
