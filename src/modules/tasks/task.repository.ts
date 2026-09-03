import { prisma } from "../../database/prisma";


export class TaskRepository {


    async create(data: {
        title: string;
        projectId: string;
    }) {


        console.log("Dados recebidos para criar task:", data);



        const task = await prisma.task.create({

            data

        });



        console.log("Task criada no banco:", task);



        const totalTasks = await prisma.task.count();



        console.log(
            "Total de tasks no banco:",
            totalTasks
        );



        return task;

    }





    async findByProject(projectId: string) {


        console.log(
            "Buscando tasks do projeto:",
            projectId
        );



        const tasks = await prisma.task.findMany({

            where: {

                projectId

            },

            orderBy: {

                createdAt: "desc"

            }

        });



        console.log(
            "Tasks encontradas:",
            tasks
        );



        return tasks;

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