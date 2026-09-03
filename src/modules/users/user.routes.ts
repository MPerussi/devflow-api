import { Router } from "express";
import { UserController } from "./user.controller";


const router = Router();

const controller = new UserController();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criar usuário
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Joao
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Usuário criado
 *     security: []
 */

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