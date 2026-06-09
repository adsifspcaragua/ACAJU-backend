import { ADMModel } from "../../models/adm.js";
import { cadastroSchema, loginSchema } from "../../validator/auth.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";

export const sessionController = {
    async cadastro(req, res, next) {
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

    async login(req, res, next) {
        try {
        const dadosValidados = loginSchema.parse(req.body);

        const admin = await ADMModel.buscarPorEmail(dadosValidados.email);
        if(!admin) {
            return res.status(401).json({ error: "Email ou senha invalidos. "});
        }

        const senha = await bcrypt.compare(dadosValidados.password, admin.pass);
        if (!senha) {
            return res.status(401).json({ error: "Email ou senha invalidos. "});
        }

        await ADMModel.criarLogDeAcesso(
            admin.id,
            req.ip || '127.0.0.1',
            req.headers['user-agent'] || 'Unknown'
        );

        const token = jwt.sign(
            { id: admin.id, email: admin.email},
            process.env.JWT_SECRET,
            { expiresIn: '1d'}
        )

        return res.json({
            token,
            admin: { id: admin.id, name: admin.name, email: admin.email}
        });

        } catch (error) {
            next(error);
        }
    }
};