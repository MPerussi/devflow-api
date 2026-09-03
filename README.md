# DevFlow API

![DevFlow](public/code.png)

API REST para gerenciamento de projetos e tarefas, com autenticacao JWT, PostgreSQL e Prisma ORM.

## Sobre o projeto

O DevFlow e uma aplicacao backend desenvolvida para demonstrar uma API organizada por modulos, com rotas protegidas e uma documentacao tecnica interativa propria. Pela interface da documentacao, e possivel executar requisicoes reais e visualizar o status HTTP e o JSON retornado.

## Funcionalidades

- Cadastro de usuarios
- Login com autenticacao JWT
- Criacao e listagem de projetos
- Criacao, consulta, atualizacao e remocao de tarefas
- Middleware para protecao das rotas
- Contador de visitas da API
- Documentacao tecnica interativa no navegador

## Tecnologias

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- JSON Web Token (JWT)

## Como executar

### 1. Clonar o repositorio

```bash
git clone https://github.com/MPerussi/devflow-api.git
cd devflow-api
```

### 2. Instalar as dependencias

```bash
npm install
```

### 3. Configurar as variaveis de ambiente

Crie um arquivo `.env` na pasta `backend`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/devflow"
JWT_SECRET="uma_chave_secreta_forte"
PORT=3000
```

O arquivo `.env.example` pode ser usado como referencia.

### 4. Executar as migracoes

```bash
npx prisma migrate deploy
```

Durante o desenvolvimento, tambem e possivel usar:

```bash
npx prisma migrate dev
```

### 5. Iniciar o servidor

Na pasta `backend`:

```bash
npm run dev
```

O servidor sera iniciado em `http://localhost:3000`.

## Documentacao interativa

Acesse `http://localhost:3000/api-reference` para seguir o fluxo completo da API:

1. Crie um usuario em `POST /users`.
2. Faca login em `POST /login` e receba o JWT.
3. Crie um projeto em `POST /projects`.
4. Liste os projetos e copie o `projectId`.
5. Crie uma tarefa em `POST /tasks`.
6. Liste as tarefas do projeto.
7. Atualize o status da tarefa.
8. Remova a tarefa quando necessario.

Depois do login, o token e armazenado temporariamente na sessao do navegador e enviado automaticamente nas rotas protegidas.

## Endpoints

| Metodo | Rota | Autenticacao | Descricao |
| --- | --- | --- | --- |
| POST | `/api/users` | Nao | Cria um usuario |
| POST | `/api/login` | Nao | Realiza login e retorna um JWT |
| GET | `/api/users` | JWT | Lista usuarios |
| POST | `/api/projects` | JWT | Cria um projeto |
| GET | `/api/projects` | JWT | Lista os projetos do usuario |
| POST | `/api/tasks` | JWT | Cria uma tarefa |
| GET | `/api/tasks/:projectId` | JWT | Lista tarefas de um projeto |
| PUT | `/api/tasks/:id` | JWT | Atualiza o status de uma tarefa |
| DELETE | `/api/tasks/:id` | JWT | Remove uma tarefa |
| GET | `/api/stats` | Nao | Retorna o status e as estatisticas da API |

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

| Comando | Funcao |
| --- | --- |
| `npm run dev` | Inicia o servidor com recarregamento automatico |
| `npx prisma migrate dev` | Cria e aplica migracoes durante o desenvolvimento |
| `npx prisma migrate deploy` | Aplica migracoes existentes |

## Licenca

Projeto desenvolvido para fins de estudo e portfolio.
