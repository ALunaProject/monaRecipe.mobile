import { ActivityIndicator } from 'react-native';
import type { RootStackScreenProps } from '../../navigation';
import { Colors } from '../../theme';
import * as S from './styles';
import { useRecipe } from "../../hooks/useRecipes";

export function RecipeScreen({ route }: RootStackScreenProps<'Recipe'>) {
  const { id } = route.params;
  const { recipe, loading, error } = useRecipe(id);

  if (loading) {
    return (
      <S.StateContainer>
        <ActivityIndicator color={Colors.RED} size="large" />
      </S.StateContainer>
    );
  }

  if (error || !recipe) {
    return (
      <S.StateContainer>
        <S.StateText>{error ?? 'Recipe not found.'}</S.StateText>
      </S.StateContainer>
    );
  }

  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <S.Container>
      <S.Content>
        <S.Hero source={{ uri: recipe.image }} resizeMode="cover" />
        <S.Body>
          <S.Title>{recipe.name}</S.Title>
          <S.MetaRow>
            <S.Chip>
              <S.ChipText>{recipe.cuisine}</S.ChipText>
            </S.Chip>
            <S.Chip>
              <S.ChipText>{recipe.difficulty}</S.ChipText>
            </S.Chip>
            <S.Chip>
              <S.ChipText>{totalTime} min</S.ChipText>
            </S.Chip>
            <S.Chip>
              <S.ChipText>{recipe.servings} servings</S.ChipText>
            </S.Chip>
          </S.MetaRow>

          <S.SectionTitle>Ingredients</S.SectionTitle>
          {recipe.ingredients.map((ingredient, index) => (
            <S.Ingredient key={`${index}-${ingredient}`}>• {ingredient}</S.Ingredient>
          ))}

          <S.SectionTitle>Instructions</S.SectionTitle>
          {recipe.instructions.map((instruction, index) => (
            <S.InstructionRow key={`${index}-${instruction}`}>
              <S.Step>{index + 1}.</S.Step>
              <S.Instruction>{instruction}</S.Instruction>
            </S.InstructionRow>
          ))}
        </S.Body>
      </S.Content>
    </S.Container>
  );
}
