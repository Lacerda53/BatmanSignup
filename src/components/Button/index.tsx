import React from 'react';
import { Container, Icon, Title } from './styles';
import logoImg from '../../assets/logo.png';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    title: string;
    isIconRight?: boolean;
};

export const Button: React.FC<Props> = ({ title, isIconRight, ...rest }) => {
    return (
        <Container activeOpacity={0.8} {...rest}>
            <Title>{title}</Title>
            <Icon
                source={logoImg}
                resizeMode="contain"
                style={{ tintColor: '#000' }}
                isRight={isIconRight}
            />
        </Container>
    );
};
