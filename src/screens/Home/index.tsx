import { Button } from '../../components';
import type { RootStackScreenProps } from '../../navigation/types';
import { Container, Eyebrow, Subtitle, Title } from './styles';

export function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <Container>
      <Eyebrow>Mona Recipe</Eyebrow>
      <Title>What are we cooking today?</Title>
      <Subtitle>
        Discover easy and delicious recipes for your everyday life.
      </Subtitle>
      <Button
        label="See recipes"
        onPress={() => navigation.navigate('Catalog')}
      />
    </Container>
  );
}
