import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient;

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
        return await prisma.ADMModel.create({
            data: {
                adminId: adminId,
                ip: ip,
                userAgent: userAgent
            }
        });
    }
}

