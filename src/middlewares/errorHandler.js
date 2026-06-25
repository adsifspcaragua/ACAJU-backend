import { ZodError } from 'zod';

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {

    if (err instanceof ZodError) {
        return res.status(400).json({
            message: "Erro de validação nos campos. ",
            error: err.issues.map(issue => ({
                field: issue.path.join('.'),
                message: issue.message
            }))
        });
    }

    console.error(err);
    return res.status(500).json({ error: "Erro no servidor! " });

}