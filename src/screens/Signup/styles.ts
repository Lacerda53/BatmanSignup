import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const ContentAnimated = styled(Animated.View)`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const CityAnimated = styled(Animated.View)`
    position: absolute;
    top: 24%;
    left: 11%;
    width: 80%;
    height: 30%;
`;

export const City = styled(Animated.Image)`
    width: 100%;
    height: 80%;
    overflow: hidden;
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
    width: 80%;
    font-family: 'Vidaloka-Regular';
    color: white;
    border-radius: 30px;
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    margin-bottom: 30px;
`;

export const FormAnimated = styled(Animated.View)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 54%;
    padding: 0 8%;
`;