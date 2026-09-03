import { Router } from "express";

import { TaskController } from "./task.controller";

import { authMiddleware } from "../../middlewares/auth.middleware";


const router = Router();

const controller = new TaskController();

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Criar uma nova tarefa
 *     tags:
 *       - Tasks
 *     security:
 *       - jwtAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Criar autenticação JWT
 *               projectId:
 *                 type: string
 *                 example: fd30f94f-cba4-4db1-8c29-ce2a8706f9e8
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 */

router.post(
    "/tasks",
    authMiddleware,
    (req, res) =>
        controller.create(req, res)
);

/**
 * @swagger
 * /tasks/{projectId}:
 *   get:
 *     summary: Listar tarefas de um projeto
 *     tags:
 *       - Tasks
 *     security:
 *       - jwtAuth: []
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: string
 *         example: fd30f94f-cba4-4db1-8c29-ce2a8706f9e8
 *     responses:
 *       200:
 *         description: Lista de tarefas
 */

router.get(
    "/tasks/:projectId",
    authMiddleware,
    (req, res) =>
        controller.findByProject(req, res)
);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualizar status de uma tarefa
 *     tags:
 *       - Tasks
 *     security:
*       - jwtAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 8c1fd489-b9d4-40e0-8d69-6cbe103afad8
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: DONE
 *     responses:
 *       200:
 *         description: Tarefa atualizada
 */

router.put(
    "/tasks/:id",
    authMiddleware,
    (req, res) =>
        controller.update(req, res)
);



router.delete(
    "/tasks/:id",
    authMiddleware,
    (req, res) =>
        controller.delete(req, res)
);



export default router;