import { useEffect } from 'react';

import type { RootStackScreenProps } from '../../navigation/types';
import { Brand, Container, Loader, Tagline } from './styles';

const SPLASH_DURATION_MS = 2000;

export function SplashScreen({ navigation }: RootStackScreenProps<'Splash'>) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, SPLASH_DURATION_MS);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container>
      <Brand>Mona Recipe</Brand>
      <Tagline>Receitas simples para todos os dias</Tagline>
      <Loader color="#FFFFFF" size="large" />
    </Container>
  );
}
