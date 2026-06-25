/* global describe, it, expect */

import request from 'supertest';

describe('Testes Funcionais (API) - Módulo de Autenticação ACAJU', () => {

    const api = 'http://localhost:3300';

    it('Deve retornar erro 400 (Bad Request) ao tentar cadastrar usuário sem o campo senha', async () => {

        const response = await request(api)
            .post('/auth/cadastro')
            .send({
                name: "Usuario Teste Jest",
                email: "jest@acaju.com.br"
            });

        expect(response.status).toBe(400);

        expect(response.body.message).toContain("validação");
    });

    it('A API deve retornar o código HTTP 201 Created, salvar o usuário no banco e usar Hash (BCrypt) para senhas (Ref: RFN-05)', async () => {

        const response = await request(api)
            .post('/auth/cadastro')
            .send({
                name: "Usuario Teste Jest4",
                email: "jest4@acaju.com.br",
                pass: "acaju4"
            })

        expect(response.status).toBe(201);

        expect(response.body.message).toContain("Cadastro com sucesso!");
    })

    it('A API deve barrar a criação, retornando o código HTTP 400 Bad Request  acompanhado com um erro informando que o e-mail já está em uso.', async () => {

        const response = await request(api)
            .post('/auth/cadastro')
            .send({
                name: "Usuario Teste Jest4",
                email: "jest4@acaju.com.br",
                pass: "acaju4"
            })

        expect(response.status).toBe(400);
    })

    it('A API deve validar as credenciais no banco, retornar o código HTTP 200 OK e devolver o token de autenticação no corpo da resposta.', async () => {

        const response = await request(api)
            .post('/auth/login')
            .send({
                email: "jest4@acaju.com.br",
                password: "acaju4"
            })

        expect(response.status).toBe(200);

    })

    it('A API deve negar o acesso, não gerando o token e retornando o código HTTP 401 Unauthorized.', async () => {

        const response = await request(api)
            .post('/auth/login')
            .send({
                email: "jest@acaju.com.br",
                password: "acaju112312312"
            })

        expect(response.status).toBe(401);
    })

});