import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background: #DAC942;
    width: 100%;
    height: 60px;
    margin-bottom: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'Vidaloka-Regular';
    font-size: 18px;
    color: #100F0B;
    text-transform: uppercase;
`;

type IconProps = {
    isRight?: boolean;
};

export const Icon = styled.Image`
    position: absolute;
    ${(props: IconProps) => props.isRight ? 'right: -20px' : 'left: -20px'}
    transform: rotate(${(props: IconProps) => props.isRight ? '-30deg' : '30deg'});
    width: 100px;
    opacity: .18;
`;