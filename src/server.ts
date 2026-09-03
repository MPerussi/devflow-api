import express from "express";

import userRoutes from "./modules/users/user.routes";
import authRoutes from "./modules/users/auth.routes";
import projectRoutes from "./modules/projects/project.routes";
import taskRoutes from "./modules/tasks/task.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger";

const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "DevFlow API",
    status: "online",
    documentation: "/api-docs"
  });
});

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use("/api", userRoutes);

app.use("/api", authRoutes);

app.use("/api", projectRoutes);

app.use("/api", taskRoutes);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {

        customSiteTitle: "DevFlow API - Documentação",

        customCss: `
            .swagger-ui .authorize span {
                font-size: 0;
            }

            .swagger-ui .authorize span::after {
                content: "Autorizar";
                font-size: 14px;
            }
        `

    })
);


app.listen(3000,()=>{

    console.log(
        "Servidor rodando na porta 3000"
    );

});