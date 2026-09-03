import { Request, Response } from "express";

import { AuthService } from "./auth.service";


const service = new AuthService();



export class AuthController {


    async login(
        req:Request,
        res:Response
    ){


        try{


            const {
                email,
                password
            } = req.body;



            const result =
                await service.login(
                    email,
                    password
                );



            return res.json(result);



        }catch(error:any){


            return res.status(401).json({

                error:error.message

            });


        }

    }

}