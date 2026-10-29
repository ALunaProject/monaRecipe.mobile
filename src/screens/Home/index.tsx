import { Button } from '../../components';
import type { RootStackScreenProps } from '../../navigation/types';
import { Container, Eyebrow, Subtitle, Title } from './styles';

export function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
  return (
    <Container>
      <Eyebrow>Mona Recipe</Eyebrow>
      <Title>O que vamos cozinhar hoje?</Title>
      <Subtitle>
        Descubra receitas práticas e deliciosas para o seu dia a dia.
      </Subtitle>
      <Button
        label="Ver receitas"
        onPress={() => navigation.navigate('Catalog')}
      />
    </Container>
  );
}
