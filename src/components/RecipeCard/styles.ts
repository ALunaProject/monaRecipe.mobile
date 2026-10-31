import styled from 'styled-components/native';

import { Colors } from '../../theme';

export const Card = styled.TouchableOpacity`
    background-color: ${Colors.WHITE};
    border-radius: 10px;
    elevation: 3;
    shadow-color: ${Colors.DARKBLUE};
    shadow-opacity: 0.12;
    shadow-radius: 6px;
    shadow-offset: 0px 2px;
`;

export const CardImage = styled.Image`
    width: 100%;
    aspect-ratio: 1.05;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Content = styled.View`
    padding: 12px;
`;

export const Title = styled.Text`
    font-family: 'Montserrat_700Bold';
    font-size: 16px;
    color: ${Colors.DARKBLUE};
`;

export const Meta = styled.Text`
    font-family: 'Glory_300Light';
    font-size: 16px;
    color: ${Colors.DARKBLUE};
    margin-top: 2px;
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

export const Stats = styled.View`
    flex-direction: row;
    align-items: center;
    flex-shrink: 1;
`;

export const Rating = styled.Text`
  font-family: 'Glory_700Bold';
  font-size: 12px;
  color: ${Colors.DARKBLUE};
`;

export const Time = styled.Text`
  font-family: 'Glory_300Light';
  font-size: 12px;
  color: ${Colors.DARKBLUE};
`;

export const FavoriteButton = styled.TouchableOpacity`
  margin-left: 8px;
`;