import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {}

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome Completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                />

                <hr />

                <Input
                    name="oldPassoword"
                    type="password"
                    placeholder="Sua senha atual"
                />
                <Input
                    name="passoword"
                    type="password"
                    placeholder="Nova senha"
                />
                <Input
                    name="confirmPassoword"
                    type="password"
                    placeholder="Confirmação de senha"
                />

                <button type="submit">Atualizar perfil</button>
            </Form>

            <button type="button">Sair do GoBarber</button>
        </Container>
    );
}
