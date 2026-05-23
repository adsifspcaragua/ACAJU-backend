export function errorHandler(err, req, res, next) {

    if (err.name === "ZodError") {
        return res.status(400).json({ errors: err.errors.map(e => e.message) });
    }

    console.error(err);
    return res.status(500).json({ error: "Erro no servidor! "});

}