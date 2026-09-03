import {
    Request,
    Response,
    NextFunction
} from "express";

import jwt from "jsonwebtoken";


const SECRET =
    process.env.JWT_SECRET || "devflow_secret";



export function authMiddleware(
    req:Request,
    res:Response,
    next:NextFunction
){


    const header =
        req.headers.authorization;



    if(!header){

        return res.status(401).json({

            error:"Token não informado"

        });

    }



    const token =
        header.replace(
            "Bearer ",
            ""
        );



    try{


        const decoded =
            jwt.verify(
                token,
                SECRET
            );



        (req as any).user =
            decoded;



        next();



    }catch{


        return res.status(401).json({

            error:"Token inválido"

        });


    }

}