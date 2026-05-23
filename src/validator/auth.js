import { z } from 'zod';

export const cadastroSchema = z.object({
    name: z.string({
        invalid_type_error: "O nome deve ser uma string. ",
        required_error: "O nome é obrigatório. "
    })
        .min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' })
        .max(255, { message: 'O nome não pode passar de 255 caracteres.' }),

    email: z.string({
        invalid_type_error: "O email deve ser uma string.",
        required_error: "O email é obrigatório."
    })
        .email({ message: 'e-mail inválido.' })
        .max(255, { message: 'O e-mail não pode passar de 255 caracteres.' }),

    pass: z.string({
        invalid_type_error: "A senha deve ser uma string.",
        required_error: "A senha é obrigatória."
    })
        .min(6, { message: 'A senha deve ter pelo menos 6 caracteres.' })
        .max(255, { message: 'A senha não pode passar de 255 caracteres.' }),
});

export const loginSchema = z.object({
    email: z.string({
        invalid_type_error: "O email deve ser uma string.",
        required_error: "O email é obrigatório."
    })
        .email({ message: 'Insira um e-mail válido.' }),

    password: z.string({
        invalid_type_error: "A senha deve ser uma string.",
        required_error: "A senha é obrigatória."
    })
        .min(1, { message: 'A senha não pode estar vazia! ' })
});