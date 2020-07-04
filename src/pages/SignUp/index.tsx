import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from './../../components/Button';
import { Container, Background, Content } from './styles';

const SignUp: React.FC = () => {
    function handleSubmit(data: object): void{
        
    }

    return (
        <Container>
        <Background />
        <Content>
            <img src={logo} alt="GoBarber"/>
            <Form onSubmit={handleSubmit}>
                <h1>Faça seu cadastro</h1>

                <Input name="name" icon={FiUser} type="text" placeholder="Nome"/>

                <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>

                <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

                <Button type="submit">Cadastrar</Button>

            </Form>

            <a href="create">
                <FiArrowLeft/>
                Voltar para logon
            </a>
        </Content>
    </Container>
    );
}

export default SignUp;