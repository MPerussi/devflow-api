import express from "express";
import path from "path";

import { prisma } from "./database/prisma";

import userRoutes from "./modules/users/user.routes";
import authRoutes from "./modules/users/auth.routes";
import projectRoutes from "./modules/projects/project.routes";
import taskRoutes from "./modules/tasks/task.routes";


const app = express();


app.use(express.json());


// Arquivos públicos
app.use(
    express.static(
        path.join(__dirname, "../public")
    )
);



// Página principal

app.get("/", async (req, res) => {


    let stats = await prisma.apiStats.findFirst();



    if (!stats) {

        stats = await prisma.apiStats.create({

            data: {
                visits: 0
            }

        });

    }



    await prisma.apiStats.update({

        where:{
            id: stats.id
        },

        data:{
            visits:{
                increment:1
            }
        }

    });



    res.sendFile(

        path.join(
            __dirname,
            "views",
            "home.html"
        )

    );


});





// Página de testes amigável

app.get("/test-api", (req,res)=>{


    res.sendFile(

        path.join(
            __dirname,
            "views",
            "test-api.html"
        )

    );


});





// Estatísticas públicas

app.get("/api/stats", async(req,res)=>{


    const stats =
        await prisma.apiStats.findFirst();



    return res.json({

        status:"online",

        visits:
        stats?.visits || 0,

        database:"connected"

    });


});





// Rotas API

app.get("/api", (req, res) => {

    return res.json({
        name: "DevFlow API",
        status: "online",
        documentation: `${req.protocol}://${req.get("host")}/api-reference`,
        endpoints: {
            authentication: "/api/login",
            users: "/api/users",
            projects: "/api/projects",
            tasks: "/api/tasks",
            stats: "/api/stats"
        }
    });

});

app.use("/api", userRoutes);

app.use("/api", authRoutes);

app.use("/api", projectRoutes);

app.use("/api", taskRoutes);






const PORT =
process.env.PORT || 3000;



app.listen(PORT,()=>{


    console.log(
        `Servidor rodando na porta ${PORT}`
    );


});


// Documentação técnica interativa

app.get("/api-reference", (req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "views",
            "api-reference.html"
        )
    );

});