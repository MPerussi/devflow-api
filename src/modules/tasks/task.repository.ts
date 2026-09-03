import { prisma } from "../../database/prisma";


export class TaskRepository {


    async create(data: {
        title: string;
        projectId: string;
    }) {

        return await prisma.task.create({

            data

        });

    }



    async findByProject(projectId: string) {

        return await prisma.task.findMany({

            where: {
                projectId
            },

            orderBy: {
                createdAt: "desc"
            }

        });

    }



    async findById(id: string) {

        return await prisma.task.findUnique({

            where: {
                id
            }

        });

    }



    async update(
        id: string,
        status: string
    ) {

        return await prisma.task.update({

            where: {
                id
            },

            data: {
                status
            }

        });

    }



    async delete(id: string) {

        return await prisma.task.delete({

            where: {
                id
            }

        });

    }


}