import { Request, Response } from "express";

import { TaskService } from "./task.service";


const service = new TaskService();



export class TaskController {



    async create(
        req: Request,
        res: Response
    ) {

        try {

            const {
                title,
                projectId
            } = req.body;


            const task =
                await service.create(
                    title,
                    projectId
                );


            return res.status(201).json(task);


        } catch (error: any) {

            return res.status(400).json({

                error: error.message

            });

        }

    }




    async findByProject(
        req: Request,
        res: Response
    ) {

        try {

            const projectId =
                req.params.projectId as string;


            const tasks =
                await service.findByProject(
                    projectId
                );


            return res.json(tasks);


        } catch (error: any) {

            return res.status(400).json({

                error: error.message

            });

        }

    }




    async update(
        req: Request,
        res: Response
    ) {

        try {

            const id =
                req.params.id as string;


            const {
                status
            } = req.body;


            const task =
                await service.update(
                    id,
                    status
                );


            return res.json(task);


        } catch (error: any) {

            return res.status(400).json({

                error: error.message

            });

        }

    }





    async delete(
        req: Request,
        res: Response
    ) {

        try {

            const id =
                req.params.id as string;


            await service.delete(id);


            return res.json({

                message: "Tarefa removida"

            });


        } catch (error: any) {

            return res.status(400).json({

                error: error.message

            });

        }

    }


}