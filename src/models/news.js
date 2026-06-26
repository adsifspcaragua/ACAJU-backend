import { prisma } from "../helpers/dbConnection.js"

export const newsModel = {

    async criar(dados) {
        return await prisma.NEWS.create({
            data: {
                title: dados.title,
                content: dados.content,
                videoUrl: dados.videoUrl,
                coverImage: dados.coverImage,
                galleryImages: dados.galleryImages,
                authorId: dados.authorId,
                status: status || 'PENDING'
            }
        });
    }
}

