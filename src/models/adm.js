import {prisma} from "../helpers/dbConnection.js"

export const ADMModel = {
    async buscarPorEmail(email) {
        return await prisma.ADM.findUnique({
            where: { email }
        });
    },

    async criar(dados) {
        return await prisma.ADM.create({
            data: {
                name: dados.name,
                email: dados.email,
                pass: dados.pass
            }
        });
    },

    async criarLogDeAcesso(adminId, ip, userAgent) {
        return await prisma.ADM.create({
            data: {
                adminId: adminId,
                ip: ip,
                userAgent: userAgent
            }
        });
    }
}

