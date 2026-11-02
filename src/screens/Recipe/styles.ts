import styled from 'styled-components/native';

import { Colors } from '../../theme';

const IMAGE_SIZE = 240;
const IMAGE_OVERFLOW = 70;

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.CREAM};
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const TopSection = styled.View`
  padding: 0 20px 28px;
  background-color: ${Colors.CREAM};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-family: Montserrat_700Bold;
  font-size: 26px;
  line-height: 34px;
  color: ${Colors.DARKBLUE};
`;

export const MetaRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

export const Chip = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: ${Colors.RED};
  elevation: 4;
  shadow-color: ${Colors.BLACK};
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  shadow-offset: 0px 4px;
`;

export const ChipFlag = styled.Text`
  font-size: 14px;
`;

export const ChipText = styled.Text`
  font-family: Montserrat_600SemiBold;
  font-size: 14px;
  color: ${Colors.WHITE};
  text-transform: capitalize;
`;

/* Shared */

export const SectionTitle = styled.Text`
  margin-bottom: 8px;
  font-family: Montserrat_700Bold;
  font-size: 22px;
  color: ${Colors.DARKBLUE};
`;

export const ListText = styled.Text`
  flex-shrink: 1;
  font-family: Glory_300Light;
  font-size: 14px;
  line-height: 16px;
  color: ${Colors.DARKBLUE};
`;

/* Ingredients section */

export const IngredientsSection = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0 16px 20px;
  background-color: ${Colors.WHITE};
  overflow: hidden;
`;

export const IngredientsColumn = styled.View`
  flex: 1;
  padding-right: 16px;
`;

export const RecipeImage = styled.Image`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  border-width: 5px;
  border-color: ${Colors.DARKBLUE};
  background-color: ${Colors.CREAM};
  margin-right: -${IMAGE_OVERFLOW}px;
  margin-bottom: 9px;
  margin-left: 9px;
`;


export const InstructionsSection = styled.View`
  padding: 28px 20px 0;
  background-color: ${Colors.CREAM};
`;

export const BulletRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding-left: 8px;
  margin-bottom: 2px;
`;

export const Bullet = styled.View`
  width: 4px;
  height: 4px;
  margin-top: 6px;
  margin-right: 10px;
  border-radius: 2px;
  background-color: ${Colors.DARKBLUE};
`;


export const StateContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${Colors.CREAM};
`;

export const StateText = styled.Text`
  font-family: Glory_400Regular;
  font-size: 15px;
  text-align: center;
  color: ${Colors.DARKBLUE};
`;
