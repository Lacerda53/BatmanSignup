import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const LogoAnimated = styled(Animated.View)`
    position: absolute;
    top: 35%;
    left: 35%;
    width: 30%;
    height: 30%;
`;

export const Logo = styled.Image`
    width: 100%;
    height: 100%;
`;

export const TextAnimated = styled(Animated.View)`
    position: absolute;
    top: 52%;
    left: 0;
    right: 0;
    width: 100%;
    height: 50%;
`;

export const Title = styled.Text`
    width: 100%;
    font-family: 'Vidaloka-Regular';
    color: white;
    font-size: 25px;
    text-align: center;
    text-transform: uppercase;
`;

export const Subtitle = styled.Text`
    width: 100%;
    font-family: 'Vidaloka-Regular';
    color: white;
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
`;

export const ButtonAnimated = styled(Animated.View)`
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0 8%;
`;

export const ContentAnimated = styled(Animated.View)`
    position: absolute;
    width: 100%;
    height: 100%;
`;