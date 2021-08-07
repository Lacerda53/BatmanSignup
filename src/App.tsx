import React, { useEffect, useRef, useState } from 'react';
import backgroundImg from './assets/background.png';
import batmanImg from './assets/batman.png';
import { Animated, StatusBar } from 'react-native';
import { Background, Batman, BatmanAnimated, Container } from './styles';
import { Welcome } from './screens/Welcome';
import { Signup } from './screens/Signup';

export const App: React.FC = () => {
    const batmanScale = useRef(new Animated.Value(4)).current;
    const batmanPosition = useRef(new Animated.Value(0)).current;
    const [page, setPage] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            Animated.timing(batmanScale, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }).start();
        }, 2400);

        return () => clearTimeout(timer);
    }, [batmanScale]);

    return (
        <>
            <StatusBar hidden />
            <Container>
                <Background source={backgroundImg} resizeMode="cover" />
                <BatmanAnimated
                    style={{
                        transform: [
                            { scale: batmanScale },
                            { translateY: batmanPosition },
                        ],
                    }}
                >
                    <Batman source={batmanImg} resizeMode="cover" />
                </BatmanAnimated>
                {!page ? (
                    <Welcome
                        batmanPosition={batmanPosition}
                        setPage={setPage}
                    />
                ) : (
                    <Signup />
                )}
            </Container>
        </>
    );
};
