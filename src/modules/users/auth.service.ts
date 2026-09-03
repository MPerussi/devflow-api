import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { UserRepository } from "./user.repository";


const repository = new UserRepository();


const SECRET =
    process.env.JWT_SECRET || "devflow_secret";



export class AuthService {


    async login(
        email:string,
        password:string
    ){


        const user =
            await repository.findByEmail(email);



        if(!user){

            throw new Error(
                "Usuário não encontrado"
            );

        }



        const passwordMatch =
            await bcrypt.compare(
                password,
                user.password
            );



        if(!passwordMatch){

            throw new Error(
                "Senha incorreta"
            );

        }



        const token =
            jwt.sign(

                {
                    id:user.id,

                    email:user.email

                },

                SECRET,

                {
                    expiresIn:"1d"
                }

            );



        return {

            user:{

                id:user.id,

                name:user.name,

                email:user.email

            },

            token

        };

    }

}