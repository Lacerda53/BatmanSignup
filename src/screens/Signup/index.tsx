import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import cityImg from '../../assets/city.png';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import {
    City,
    CityAnimated,
    ContentAnimated,
    FormAnimated,
    Title,
} from './styles';

export const Signup: React.FC = () => {
    const cityOpacity = useRef(new Animated.Value(0)).current;
    const formOpacity = useRef(new Animated.Value(0)).current;
    const formPosition = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(cityOpacity, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            }),
            Animated.timing(formOpacity, {
                toValue: 1,
                duration: 900,
                useNativeDriver: true,
            }),
            Animated.timing(formPosition, {
                toValue: 0,
                duration: 900,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <ContentAnimated>
            <CityAnimated style={{ opacity: cityOpacity }}>
                <City source={cityImg} resizeMode="contain" />
            </CityAnimated>
            <FormAnimated
                style={{
                    transform: [{ translateY: formPosition }],
                    opacity: formOpacity,
                }}
            >
                <Title>Get Access</Title>
                <Input label="Full Name" />
                <Input label="Email" />
                <Input label="Password" />
                <Button title="Signup" />
            </FormAnimated>
        </ContentAnimated>
    );
};
