import { prisma } from "../../database/prisma";


export class ProjectRepository {


    async create(data:any){

        return prisma.project.create({
            data
        });

    }



    async findByUser(userId:string){

        return prisma.project.findMany({

            where:{
                userId
            }

        });

    }

}