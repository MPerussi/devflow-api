import { Router } from "express";

import { ProjectController } from "./project.controller";

import { authMiddleware } from "../../middlewares/auth.middleware";


const router = Router();

const controller = new ProjectController();

router.post(
"/projects",
authMiddleware,
(req,res)=>controller.create(req,res)
);

router.get(
"/projects",
authMiddleware,
(req,res)=>controller.findAll(req,res)
);



export default router;