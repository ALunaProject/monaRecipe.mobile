import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import type { RootStackScreenProps } from '../../navigation/types';
import { getRecipeById, type Recipe } from '../../services';
import { colors } from '../../theme';
import {
  Body,
  Chip,
  ChipText,
  Container,
  Content,
  Hero,
  Ingredient,
  Instruction,
  InstructionRow,
  MetaRow,
  SectionTitle,
  StateContainer,
  StateText,
  Step,
  Title,
} from './styles';

export function RecipeScreen({ route }: RootStackScreenProps<'Recipe'>) {
  const { id } = route.params;
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadRecipe() {
      try {
        const data = await getRecipeById(id);

        if (isMounted) {
          setRecipe(data);
        }
      } catch {
        if (isMounted) {
          setError('Não foi possível carregar a receita.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRecipe();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <StateContainer>
        <ActivityIndicator color={colors.primary} size="large" />
      </StateContainer>
    );
  }

  if (error || !recipe) {
    return (
      <StateContainer>
        <StateText>{error ?? 'Receita não encontrada.'}</StateText>
      </StateContainer>
    );
  }

  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <Container>
      <Content>
        <Hero source={{ uri: recipe.image }} resizeMode="cover" />
        <Body>
          <Title>{recipe.name}</Title>
          <MetaRow>
            <Chip>
              <ChipText>{recipe.cuisine}</ChipText>
            </Chip>
            <Chip>
              <ChipText>{recipe.difficulty}</ChipText>
            </Chip>
            <Chip>
              <ChipText>{totalTime} min</ChipText>
            </Chip>
            <Chip>
              <ChipText>{recipe.servings} porções</ChipText>
            </Chip>
          </MetaRow>

          <SectionTitle>Ingredientes</SectionTitle>
          {recipe.ingredients.map((ingredient, index) => (
            <Ingredient key={`${index}-${ingredient}`}>• {ingredient}</Ingredient>
          ))}

          <SectionTitle>Modo de preparo</SectionTitle>
          {recipe.instructions.map((instruction, index) => (
            <InstructionRow key={`${index}-${instruction}`}>
              <Step>{index + 1}.</Step>
              <Instruction>{instruction}</Instruction>
            </InstructionRow>
          ))}
        </Body>
      </Content>
    </Container>
  );
}
