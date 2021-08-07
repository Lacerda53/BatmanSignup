import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    border: 1px solid gray;
    margin-bottom: 25px;
`;

export const TextInput = styled.TextInput`
    width: 100%;
    height: 100%;
    padding: 0 15px;
`;

export const Label = styled.Text`
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    top: -10px;
    left: 8px;
    padding: 0 8px;
    background: #100F0B;
    color: gray;
    text-transform: uppercase;
`;
