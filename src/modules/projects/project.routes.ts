import { Router } from "express";

import { ProjectController } from "./project.controller";

import { authMiddleware } from "../../middlewares/auth.middleware";


const router = Router();

const controller = new ProjectController();

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Criar um novo projeto
 *     tags:
 *       - Projects
 *     security:
  - jwtAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: DevFlow API
 *               description:
 *                 type: string
 *                 example: Sistema de gerenciamento de projetos
 *     responses:
 *       201:
 *         description: Projeto criado com sucesso
 *       401:
 *         description: Token inválido ou não informado
 */

router.post(
"/projects",
authMiddleware,
(req,res)=>controller.create(req,res)
);

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Listar projetos do usuário autenticado
 *     tags:
 *       - Projects
 *     security:
  - jwtAuth: []
 *     responses:
 *       200:
 *         description: Lista de projetos
 *       401:
 *         description: Token inválido
 */

router.get(
"/projects",
authMiddleware,
(req,res)=>controller.findAll(req,res)
);



export default router;