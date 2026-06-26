import { newsModel } from "../../models/news.js";
import { newsSchema } from "../../validator/news.js";

export const newsController = {
    async newNews(req, res, next) {
        try {
            // 1. Valida os dados pelo Zod
            const dadosValidados = newsSchema.parse(req.body);

            // 2. Chama o modelo da notícia
            const novaNoticia = await newsModel.criar({
                ...dadosValidados, // Espalha os dados que já passaram pelo Zod
                coverImage: req.body.coverImage,
                galleryImages: req.body.galleryImages,
                videoUrl: req.body.videoUrl,
                status: req.body.status
            });

            // 3. Resposta de sucesso
            return res.status(201).json({
                message: 'Notícia criada com sucesso!',
                noticia: novaNoticia
            });

        } catch (error) {
            next(error); // O seu middleware de erro vai pegar isso
        }
    }
};