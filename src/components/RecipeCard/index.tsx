import type { Recipe } from '../../services';
import {
  Card,
  CardImage,
  Content,
  Footer,
  Meta,
  Rating,
  Time,
  Title,
} from './styles';

type RecipeCardProps = {
  recipe: Recipe;
  onPress: () => void;
};

export function RecipeCard({ recipe, onPress }: RecipeCardProps) {
  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <Card
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Abrir receita ${recipe.name}`}
    >
      <CardImage source={{ uri: recipe.image }} resizeMode="cover" />
      <Content>
        <Title numberOfLines={1}>{recipe.name}</Title>
        <Meta>
          {recipe.cuisine} • {recipe.difficulty}
        </Meta>
        <Footer>
          <Rating>★ {recipe.rating.toFixed(1)}</Rating>
          <Time>{totalTime} min</Time>
        </Footer>
      </Content>
    </Card>
  );
}
