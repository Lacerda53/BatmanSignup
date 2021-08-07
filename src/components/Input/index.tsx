import React from 'react';
import { Container, Label, TextInput } from './styles';

type Props = {
    label: string;
};

export const Input: React.FC<Props> = ({ label }) => {
    return (
        <Container>
            <Label>{label}</Label>
            <TextInput />
        </Container>
    );
};
