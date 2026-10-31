import { Ionicons } from '@expo/vector-icons';

import type { Recipe } from '../../services';
import { Colors } from '../../theme';
import * as S from './styles';

type RecipeCardProps = {
  recipe: Recipe;
  onPress: () => void;
  favorite?: boolean;
  onToggleFavorite?: () => void;
};

export function RecipeCard({
                             recipe,
                             onPress,
                             favorite = false,
                             onToggleFavorite,
                           }: RecipeCardProps) {
  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
      <S.Card
          onPress={onPress}
          accessibilityRole="button"
          accessibilityLabel={`Open recipe ${recipe.name}`}
      >
        <S.CardImage source={{ uri: recipe.image }} resizeMode="cover" />
        <S.Content>
          <S.Title numberOfLines={1}>{recipe.name}</S.Title>
          <S.Meta numberOfLines={1}>
            {recipe.cuisine} | {recipe.difficulty}
          </S.Meta>
          <S.Footer>
            <S.Stats>
              <S.Rating>★ {recipe.rating.toFixed(1)}</S.Rating>
              <S.Time numberOfLines={1}> | {totalTime} min</S.Time>
            </S.Stats>

            {onToggleFavorite && (
                <S.FavoriteButton
                    onPress={onToggleFavorite}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    accessibilityRole="button"
                    accessibilityLabel={favorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Ionicons
                      name={favorite ? 'heart' : 'heart-outline'}
                      size={26}
                      color={Colors.RED}
                  />
                </S.FavoriteButton>
            )}
          </S.Footer>
        </S.Content>
      </S.Card>
  );
}