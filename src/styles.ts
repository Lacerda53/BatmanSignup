import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #100F0B;
`;

export const Background = styled.Image`
    position: absolute;
    top: 0;
    width: 100%;
    height: 45%;
    background: white;
`;

export const BatmanAnimated = styled(Animated.View)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50%;
`;

export const Batman = styled.Image`
    width: 100%;
    height: 100%;
`;

export const ContentAnimated = styled(Animated.View)`
    position: absolute;
    width: 100%;
    height: 100%;
`;