import { Router } from "express";

import { TaskController } from "./task.controller";

import { authMiddleware } from "../../middlewares/auth.middleware";


const router = Router();

const controller = new TaskController();

router.post(
    "/tasks",
    authMiddleware,
    (req, res) =>
        controller.create(req, res)
);

router.get(
    "/tasks/:projectId",
    authMiddleware,
    (req, res) =>
        controller.findByProject(req, res)
);

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