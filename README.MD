# 🚀 ACAJU - API Backend

Este é o repositório do backend para o projeto da ONG ACAJU. Desenvolvido em Node.js com foco em consistência, validação ágil e segurança.

## 🛠️ Tecnologias Utilizadas

*   **Node.js** (Ambiente de execução)
*   **Express** (Framework web)
*   **Prisma** (ORM para banco de dados)
*   **Zod** (Validação de esquemas e dados)
*   **ESLint** (Padronização e qualidade de código)

---

## 📥 Como Configurar o Projeto Localmente

Se você acabou de clonar o repositório ou outra pessoa adicionou dependências novas, NÃo se esqueça de seguir estes passos no terminal:

1. **Instalar as dependências:**
```bash
npm i
```

---

## 🚨 Padronização de Código (ESLint)

Para garantir que todo mundo da equipe escreva código do mesmo jeito e evitar bugs bobos antes de subir para o GitHub, usamos o **ESLint**. 

Sempre rode os comandos abaixo antes de fazer um `git commit`:

### 1. Verificar se existem erros no código:
```bash
npx eslint .
```

### 2. Corrigir automaticamente os erros de formatação:
```bash
npx eslint . --fix
```

--- 

### 🗄️ Guia do Prisma (ORM)

Siga estes passos na ordem para configurar e sincronizar o banco:

Não se esqueça de instalar as dependencias com o npm i
```bash
npm i
```

### 1. Criar BD no workbench até um official ser criado
No workbench use esse comando, ate o momento não temos um mongoDB configurado, então vai ser um MySQL.
```bash
create database ACAJU_DB;
```

### 2. Criar o arquivo .env
Criar o arquivo .env local: Como o .env não vai para o GitHub (graças ao .gitignore), cada um vai precisar criar o seu próprio .env e configurar as variaveis globais com base no arquivo .env.sample

### 3. Sincronizar o banco de dados e gerar o cliente
Rode o comando abaixo para criar as tabelas no seu banco local e gerar as funções do Prisma:
```bash
npx prisma db push
```

### 4. Gerar o cliente do prisma
```bash
npx prisma generate
```

---

# JsonWebToken

### Não esquecer de configurar o sercret, Cada um coloca o seu secret no .env