import bcrypt from "bcrypt";

import { UserRepository } from "./user.repository";


const repository = new UserRepository();


export class UserService {


    async create(
        name: string,
        email: string,
        password: string
    ) {


        const existingUser =
            await repository.findByEmail(email);


        if (existingUser) {
            throw new Error("Email já cadastrado");
        }


        const hashedPassword =
            await bcrypt.hash(password, 10);


        return await repository.create({

            name,

            email,

            password: hashedPassword

        });

    }



    async findAll(){

        return await repository.findAll();

    }

}