import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.BG};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 32 },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Hero = styled.Image`
  width: 100%;
  height: 240px;
  background-color: ${Colors.BG};
`;

export const Body = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  color: ${Colors.DARKBLUE};
  font-size: 26px;
  font-weight: 800;
  line-height: 34px;
`;

export const MetaRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

export const Chip = styled.View`
  padding: 6px 12px;
  border-radius: 999px;
  border-width: 1px;
  border-color: ${Colors.BG};
  background-color: ${Colors.WHITE};
`;

export const ChipText = styled.Text`
  color: ${Colors.DARKBLUE};
  font-size: 13px;
  font-weight: 600;
`;

export const SectionTitle = styled.Text`
  margin-top: 28px;
  margin-bottom: 12px;
  color: ${Colors.DARKBLUE};
  font-size: 19px;
  font-weight: 700;
`;

export const Ingredient = styled.Text`
  color: ${Colors.DARKBLUE};
  font-size: 15px;
  line-height: 26px;
`;

export const InstructionRow = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
`;

export const Step = styled.Text`
  width: 28px;
  color: ${Colors.RED};
  font-size: 15px;
  font-weight: 700;
`;

export const Instruction = styled.Text`
  flex: 1;
  color: ${Colors.DARKBLUE};
  font-size: 15px;
  line-height: 22px;
`;

export const StateContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${Colors.BG};
`;

export const StateText = styled.Text`
  color: ${Colors.DARKBLUE};
  font-size: 15px;
  text-align: center;
`;
