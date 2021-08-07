import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Button } from '../../components/Button';
import logoImg from '../../assets/logo.png';
import {
    ButtonAnimated,
    ContentAnimated,
    Logo,
    LogoAnimated,
    Subtitle,
    TextAnimated,
    Title,
} from './styles';

type Props = {
    batmanPosition: Animated.Value;
    setPage: (page: number) => void;
};

export const Welcome: React.FC<Props> = ({ batmanPosition, setPage }) => {
    const logoScale = useRef(new Animated.Value(22)).current;
    const logoPosition = useRef(new Animated.Value(0)).current;
    const logoOpacity = useRef(new Animated.Value(1)).current;
    const opacityText = useRef(new Animated.Value(0)).current;
    const buttonPosition = useRef(new Animated.Value(70)).current;
    const buttonOpacity = useRef(new Animated.Value(0)).current;
    const contentOpacity = useRef(new Animated.Value(1)).current;
    const contentPosition = useRef(new Animated.Value(0)).current;

    function handleAnimationSignup() {
        Animated.parallel([
            Animated.timing(contentPosition, {
                toValue: 100,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(contentOpacity, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(logoOpacity, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.sequence([
                Animated.timing(batmanPosition, {
                    toValue: 50,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(batmanPosition, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: true,
                }),
            ]),
        ]).start(() => setPage(1));
    }

    useEffect(() => {
        Animated.sequence([
            Animated.timing(logoScale, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.parallel([
                Animated.timing(opacityText, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(logoPosition, {
                    toValue: -60,
                    duration: 1200,
                    useNativeDriver: true,
                }),
            ]),
            Animated.parallel([
                Animated.timing(buttonPosition, {
                    toValue: 0,
                    duration: 1500,
                    useNativeDriver: true,
                }),
                Animated.timing(buttonOpacity, {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    }, []);

    return (
        <>
            <LogoAnimated
                style={{
                    transform: [
                        { scale: logoScale },
                        { translateY: logoPosition },
                    ],
                    opacity: logoOpacity
                }}
            >
                <Logo source={logoImg} resizeMode="contain" />
            </LogoAnimated>
            <ContentAnimated
                style={{
                    transform: [{ translateY: contentPosition }],
                    opacity: contentOpacity,
                }}
            >
                <TextAnimated style={{ opacity: opacityText }}>
                    <Title>Welcome to</Title>
                    <Subtitle>Gotham city</Subtitle>
                </TextAnimated>
                <ButtonAnimated
                    style={{
                        transform: [{ translateY: buttonPosition }],
                        opacity: buttonOpacity,
                    }}
                >
                    <Button
                        title="Login"
                        isIconRight
                        onPress={handleAnimationSignup}
                    />
                    <Button title="Signup" onPress={handleAnimationSignup} />
                </ButtonAnimated>
            </ContentAnimated>
        </>
    );
};
