import { ADMModel } from "../../models/adm";
import { cadastroSchema } from "../../validator/auth";
import bcrypt from "bcryptjs";

export const sessionController = {
    async cadastro(next, req, res) {
        try {
            const dadosValidados = cadastroSchema.parse(req.body);

            const admExiste = await ADMModel.buscarPorEmail(dadosValidados.email);
            if (admExiste) {
                return res.status(400).json({ error: 'Este e-mail já está em uso' });
            }

            const passHash = await bcrypt.hash(dadosValidados.pass, 10);

            const novoAdmin = await ADMModel.criar({
                name: dadosValidados.name,
                email: dadosValidados.email,
                pass: passHash,
            });

            return res.status(201).json({
                message: 'Cadastro com sucesso!',
                admin: { id: novoAdmin.id, name: novoAdmin.name, email: novoAdmin.email}
            });
            
        } catch (error) {
            next(error);
        }
    },

    async login(next, req, res) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
}