import swaggerJsdoc from "swagger-jsdoc";
import path from "path";


const options: swaggerJsdoc.Options = {

    definition: {

        openapi: "3.0.0",


        info: {

            title: "DevFlow API",

            version: "1.0.0",

            description:
                "API de gerenciamento de projetos e tarefas com autenticação JWT"

        },


        servers: [

            {
                url: process.env.API_URL || `http://localhost:${process.env.PORT || 3000}/api`,
                description: "Servidor local"
            }

        ],


        components: {

            securitySchemes: {

                jwtAuth: {

                    type: "http",

                    scheme: "bearer",

                    bearerFormat: "JWT",

                    description:
                        "Digite seu token JWT"

                }

            },

            schemas: {
                User: {
                    type: "object",
                    properties: {
                        id: { type: "string", format: "uuid" },
                        name: { type: "string" },
                        email: { type: "string", format: "email" }
                    }
                },
                Project: {
                    type: "object",
                    properties: {
                        id: { type: "string", format: "uuid" },
                        title: { type: "string" },
                        description: { type: "string" },
                        status: { type: "string", example: "PENDING" },
                        userId: { type: "string", format: "uuid" },
                        createdAt: { type: "string", format: "date-time" }
                    }
                },
                Task: {
                    type: "object",
                    properties: {
                        id: { type: "string", format: "uuid" },
                        title: { type: "string" },
                        status: { type: "string", example: "TODO" },
                        projectId: { type: "string", format: "uuid" },
                        createdAt: { type: "string", format: "date-time" }
                    }
                },
                Error: {
                    type: "object",
                    properties: {
                        error: { type: "string", example: "Token inválido" }
                    }
                }
            }

        },


        security: [

            {

                jwtAuth: []

            }

        ]

    },


    apis: [
        path.join(__dirname, "../modules/**/*.ts").replace(/\\/g, "/"),
        path.join(__dirname, "../modules/**/*.js").replace(/\\/g, "/")
    ]

};



export const swaggerSpec =
    swaggerJsdoc(options);