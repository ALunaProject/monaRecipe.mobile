import { useEffect } from 'react';

import type { RootStackScreenProps } from '../../navigation';
import * as S from './styles';
import { Colors } from "../../theme";

const SPLASH_DURATION_MS = 2000;

export function SplashScreen({ navigation }: RootStackScreenProps<'Splash'>) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, SPLASH_DURATION_MS);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <S.Container>
      <S.Brand>Mona Recipes</S.Brand>
      <S.Tagline>The best homemade recipes for you!</S.Tagline>
      <S.Loader color={Colors.DARKBLUE} size="large" />
    </S.Container>
  );
}
