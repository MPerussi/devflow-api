import { Request, Response } from "express";

import { ProjectService } from "./project.service";


const service = new ProjectService();



export class ProjectController {



async create(
req:Request,
res:Response
){


const {
title,
description
}=req.body;



const user = (req as any).user;



const project =
await service.create(
title,
description,
user.id
);



return res.status(201).json(project);


}



async findAll(
req:Request,
res:Response
){


const user=(req as any).user;


const projects =
await service.findByUser(user.id);



return res.json(projects);


}


}