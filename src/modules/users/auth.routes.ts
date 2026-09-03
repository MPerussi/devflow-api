import { Router } from "express";

import { AuthController } from "./auth.controller";


const router = Router();

const controller = new AuthController();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realizar login
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */

router.post(
    "/login",
    (req,res)=>controller.login(req,res)
);



export default router;