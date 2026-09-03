import { prisma } from "../../database/prisma";


export class UserRepository {


    async create(data: {
        name: string;
        email: string;
        password: string;
    }) {

        return await prisma.user.create({
            data
        });

    }


    async findByEmail(email: string) {

        return await prisma.user.findUnique({
            where: {
                email
            }
        });

    }


    async findAll() {

        return await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true
            }
        });

    }

}