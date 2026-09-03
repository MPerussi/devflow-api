import { Request, Response } from "express";

import { UserService } from "./user.service";


const service = new UserService();


export class UserController {


    async create(
        req: Request,
        res: Response
    ){

        try {

            const {
                name,
                email,
                password
            } = req.body;


            const user =
                await service.create(
                    name,
                    email,
                    password
                );


            return res.status(201).json({

                id: user.id,

                name: user.name,

                email: user.email

            });


        } catch(error:any){

            return res.status(400).json({

                error: error.message

            });

        }

    }



    async findAll(
        req: Request,
        res: Response
    ){

        const users =
            await service.findAll();


        return res.json(users);

    }

}