## Test project

### Features

* Turbo
* Next.js
* Nest.js

### Host Machine Requirements

* NodeJS 22.x
* Pnpm 9.7.1
* Docker

### Installation

1. **Copy project example .env file**
   ```sh
   cp apps/server/.env.example apps/server/.env
   cp apps/client/.env.example apps/client/.env
   ```
2. **Install dependencies**
   ```sh
   pnpm install
   ```
3. **Run, deploy and seed DB**
   ```sh
   pnpm docker:up
   pnpm db:migrate:dep
   pnpm db:seed
   ```
4. **Run project**
   ```sh
   pnpm dev
   ```
5. **[Go to client view](http://localhost:3000)**
6. **[Go to server view](http://localhost:3000/api)**

#### Run admin console for database

   ```sh
   pnpm db:studio
   ```
