import { ProjectRepository } from "./project.repository";


const repository = new ProjectRepository();


export class ProjectService {


    async create(
        title:string,
        description:string,
        userId:string
    ){

        return repository.create({

            title,

            description,

            userId

        });

    }



    async findByUser(userId:string){

        return repository.findByUser(userId);

    }

}