import { json } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {

    const authHeader = req.headers.autorization;

    if(!authHeader) {
        return res.status(401).json({ error: 'token não fornecido. '});
    }

    const parts = authHeader.split(' ');

    if(parts,length !== 2) {
        return res.status(401).json({ error: 'Erro no formato do token. '});
    }

    const [schema, token] = parts;

    if (!/Bearer$/i.test(schema)) {
        return res.status(401).json({ error: 'Token malformatado. '});
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.adminId = decoded.id;

        return next();

    } catch {
        return res.status(401).json({ error: 'Token invalido ou expirado. '});
    }

}