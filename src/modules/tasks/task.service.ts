import { TaskRepository } from "./task.repository";


const repository = new TaskRepository();



export class TaskService {



    async create(
        title: string,
        projectId: string
    ) {


        return await repository.create({

            title,

            projectId

        });


    }




    async findByProject(
        projectId: string
    ) {


        return await repository.findByProject(
            projectId
        );


    }




    async update(
        id: string,
        status: string
    ) {


        const task =
            await repository.findById(id);



        if (!task) {

            throw new Error(
                "Tarefa não encontrada"
            );

        }



        return await repository.update(
            id,
            status
        );


    }




    async delete(
        id: string
    ) {


        const task =
            await repository.findById(id);



        if (!task) {

            throw new Error(
                "Tarefa não encontrada"
            );

        }



        return await repository.delete(id);


    }


}