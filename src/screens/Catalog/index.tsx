import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { RecipeCard } from '../../components';
import type { RootStackScreenProps } from '../../navigation/types';
import { getRecipes, type Recipe } from '../../services';
import { colors } from '../../theme';
import { Container, List, StateContainer, StateText } from './styles';

export function CatalogScreen({ navigation }: RootStackScreenProps<'Catalog'>) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadRecipes() {
      try {
        const data = await getRecipes({ limit: 20 });

        if (isMounted) {
          setRecipes(data.recipes);
        }
      } catch {
        if (isMounted) {
          setError('Não foi possível carregar as receitas.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRecipes();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <StateContainer>
        <ActivityIndicator color={colors.primary} size="large" />
      </StateContainer>
    );
  }

  if (error) {
    return (
      <StateContainer>
        <StateText>{error}</StateText>
      </StateContainer>
    );
  }

  return (
    <Container>
      <List
        data={recipes}
        keyExtractor={(recipe) => String(recipe.id)}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => navigation.navigate('Recipe', { id: item.id })}
          />
        )}
      />
    </Container>
  );
}
