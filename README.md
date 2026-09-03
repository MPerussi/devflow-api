# DevFlow API

API REST para gerenciamento de projetos e tarefas com autenticação JWT.

## 🖥️ Tecnologias

- Node.js
- TypeScript
- Express
- PostgreSQL
- Prisma ORM
- JWT
- Swagger

## 🗺️ Funcionalidades

- Cadastro de usuários
- Login com autenticação JWT
- Gerenciamento de projetos
- Gerenciamento de tarefas
- Proteção de rotas
- Documentação Swagger

## 📂 Estrutura
src
├── modules
│ ├── users
│ ├── projects
│ └── tasks
├── middlewares
├── docs
└── server.ts

prisma
└── schema.prisma


## ⚙️ Instalação

Clone o projeto:

```bash
git clone https://github.com/MPerussi/devflow-api.git

Instale as dependências:

npm install

Configure o .env

DATABASE_URL=""
JWT_SECRET=""

Execute as migrations:

npx prisma migrate dev

📖 Swagger

A documentação da API fica disponível em:

http://localhost:3000/api-docs