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

### 2. Corrigir automaticamente os errinhos de formatação:
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

### 1. criar o arquivo 
Criar o arquivo .env local: Como o .env não vai para o GitHub (graças ao .gitignore), cada um vai precisar criar o seu próprio .env e colar a senha do banco de dados.

### 2. gerar o cliente do prisma
```bash
npx prisma generate
```