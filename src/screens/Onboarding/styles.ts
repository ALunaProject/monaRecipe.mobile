import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { Colors } from "../../theme";

export const Background = styled.ImageBackground`
    flex: 1;
`;

export const Overlay = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.45);
`;

export const Content = styled(SafeAreaView)`
    flex: 1;
    display: flex;
    justify-content: space-between;
`;


export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px 0;
    min-height: 48px;
`;



export const Counter = styled.Text`
    font-size: 14px;
    color: #9ca3af;
`;

export const CounterCurrent = styled.Text`
    font-weight: 700;
    color: #ffffff;
`;

export const SkipButton = styled.TouchableOpacity`
    padding: 4px;
`;

export const SkipText = styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
`;

export const Title = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 40px;
    font-weight: 600;
    line-height: 100%;
    color: ${Colors.CREAM};
	padding: 0 14px;
    text-align: center;

`;

export const Actions = styled.View`
    flex: 1;
    display: flex;
    justify-content: space-between;
    height: 50%;
`;

export const Slide = styled.View<{width: number}>`
    width: ${({width}) => width}px;
    padding: 0 32px;
    align-items: center;
`;

export const Description = styled.Text<{emphasis?: boolean}>`
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
    text-align: center;
    font-weight: ${({emphasis}) => (emphasis ? '700' : '400')};
`;

export const ActionButton = styled.TouchableOpacity<{variant: 'primary' | 'secondary'}>`
    width: 100%;
    padding: 14px;
    margin-top: 16px;
    border-radius: 4px;
    align-items: center;
    background-color: ${({variant}) => (variant === 'primary' ? Colors.RED : Colors.BLUE)};
`;

export const ActionButtonText = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
`;

/* Rodapé: prev | dots | next */

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 32px 20px 16px;
`;

export const SideSlot = styled.View<{align: 'flex-start' | 'flex-end'}>`
    width: 80px;
    align-items: ${({align}) => align};
`;

export const NavButton = styled.TouchableOpacity`
    padding: 8px 20px;
    border-radius: 4px;
    background-color: ${Colors.RED};
`;

export const NavButtonText = styled.Text`
    font-size: 14px;
    font-weight: 600;
    color: ${Colors.WHITE};
`;

export const Pagination = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Dot = styled.View<{active: boolean}>`
    height: 8px;
    width: ${({active}) => (active ? 36 : 8)}px;
    border-radius: 4px;
    margin: 0 4px;
    background-color: ${({active}) => (active ? Colors.RED : Colors.WHITE)};
`;