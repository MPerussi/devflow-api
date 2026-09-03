# DevFlow API

API REST para gerenciamento de projetos e tarefas, com autenticação JWT, PostgreSQL e Prisma ORM.

## 🚀 API em produção

A versão online do DevFlow API está disponível em:

👉 **https://devflow-api-l4fk.onrender.com/**

### 📚 Documentação interativa

Acesse a documentação da API diretamente pelo navegador:

👉 **https://devflow-api-l4fk.onrender.com/api-reference**

Através da documentação, é possível executar requisições reais e visualizar os respectivos status HTTP e dados retornados em JSON.

## Sobre o projeto

O DevFlow é uma aplicação backend desenvolvida para demonstrar uma API organizada por módulos, com autenticação, rotas protegidas, persistência de dados e documentação técnica interativa.

O projeto também possui uma versão hospedada, permitindo testar a API sem necessidade de executar o servidor localmente.

## Funcionalidades

* Cadastro de usuários
* Login com autenticação JWT
* Criação e listagem de projetos
* Criação, consulta, atualização e remoção de tarefas
* Middleware para proteção das rotas
* Contador de visitas da API
* Documentação técnica interativa
* API disponível em ambiente de produção

## Tecnologias

* Node.js
* TypeScript
* Express
* Prisma ORM
* PostgreSQL
* JSON Web Token (JWT)

## Como executar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/MPerussi/devflow-api.git
cd devflow-api
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar as variáveis de ambiente

Crie um arquivo `.env`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/devflow"
JWT_SECRET="uma_chave_secreta_forte"
PORT=3000
```

O arquivo `.env.example` pode ser utilizado como referência.

### 4. Executar as migrações

```bash
npx prisma migrate deploy
```

Durante o desenvolvimento, também é possível utilizar:

```bash
npx prisma migrate dev
```

### 5. Iniciar o servidor

```bash
npm run dev
```

O servidor será iniciado em:

```text
http://localhost:3000
```

## Documentação interativa

### Produção

Acesse:

👉 **https://devflow-api-l4fk.onrender.com/api-reference**

### Desenvolvimento local

Após iniciar o servidor:

👉 **http://localhost:3000/api-reference**

### Fluxo de utilização

1. Crie um usuário em `POST /api/users`.
2. Faça login em `POST /api/login` e receba o JWT.
3. Crie um projeto em `POST /api/projects`.
4. Liste os projetos e copie o `projectId`.
5. Crie uma tarefa em `POST /api/tasks`.
6. Liste as tarefas do projeto.
7. Atualize o status da tarefa.
8. Remova a tarefa quando necessário.

Após o login, o token é armazenado temporariamente na sessão do navegador e enviado automaticamente nas rotas protegidas.

## Endpoints

| Método | Rota                    | Autenticação | Descrição                                 |
| ------ | ----------------------- | ------------ | ----------------------------------------- |
| POST   | `/api/users`            | Não          | Cria um usuário                           |
| POST   | `/api/login`            | Não          | Realiza login e retorna um JWT            |
| GET    | `/api/users`            | JWT          | Lista usuários                            |
| POST   | `/api/projects`         | JWT          | Cria um projeto                           |
| GET    | `/api/projects`         | JWT          | Lista os projetos do usuário              |
| POST   | `/api/tasks`            | JWT          | Cria uma tarefa                           |
| GET    | `/api/tasks/:projectId` | JWT          | Lista tarefas de um projeto               |
| PUT    | `/api/tasks/:id`        | JWT          | Atualiza o status de uma tarefa           |
| DELETE | `/api/tasks/:id`        | JWT          | Remove uma tarefa                         |
| GET    | `/api/stats`            | Não          | Retorna o status e as estatísticas da API |

## Estrutura

```text
src/
├── modules/
│   ├── users/
│   ├── projects/
│   └── tasks/
├── middlewares/
├── database/
├── types/
├── views/
└── server.ts

prisma/
└── schema.prisma

public/
└── code.png
```

## Scripts

| Comando                     | Função                                            |
| --------------------------- | ------------------------------------------------- |
| `npm run dev`               | Inicia o servidor com recarregamento automático   |
| `npx prisma migrate dev`    | Cria e aplica migrações durante o desenvolvimento |
| `npx prisma migrate deploy` | Aplica migrações existentes                       |

## Status do projeto

🟢 **Em desenvolvimento**

O DevFlow API continuará sendo desenvolvido com o objetivo de adicionar novas funcionalidades e aprimorar aspectos como arquitetura, testes automatizados, segurança, validação e boas práticas de Engenharia de Software.

## Licença

Projeto desenvolvido para fins de estudo e portfólio.