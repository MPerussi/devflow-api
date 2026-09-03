import { Router } from "express";
import { UserController } from "./user.controller";


const router = Router();

const controller = new UserController();

router.post(
    "/users",
    (req,res)=>controller.create(req,res)
);


import { authMiddleware } from "../../middlewares/auth.middleware";


router.get(
    "/users",
    authMiddleware,
    (req,res) => controller.findAll(req,res)
);


export default router;