import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: bollean
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
    <Container type="button" {...rest}>
        {loading ? 'Carregando...' : children}
        {children}
    </Container>
)

export default Button;