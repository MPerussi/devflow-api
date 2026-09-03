import swaggerJsdoc from "swagger-jsdoc";


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
                url: "http://localhost:3000/api",
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

            }

        },


        security: [

            {

                jwtAuth: []

            }

        ]

    },


    apis: [

        "./src/modules/**/*.ts"

    ]

};



export const swaggerSpec =
    swaggerJsdoc(options);