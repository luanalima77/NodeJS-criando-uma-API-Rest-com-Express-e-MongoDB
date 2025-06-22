# API Livraria – Node.js + Express + MongoDB
&nbsp; &nbsp; &nbsp; &nbsp;API RESTful para gerenciamento de livros e autores, desenvolvida com Node.js, Express e MongoDB usando Mongoose como ODM (Object Document Mapper: camada  que faz a ponte entre objetos da aplicação e documentos no banco de dados MongoDB). Este projeto foi desenvolvido durante o curso "Node.js: criando uma API Rest com Express e MongoDB" da Alura.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)


## 📁 Estrutura do Projeto
```
NodeJS-criando-uma-API-Rest-com-Express-e-MongoDB/
├── src/                      # Código-fonte
│   ├── config/
│   │   └── dbConnect.js      # Conexão com MongoDB
│   ├── controllers/
│   │   ├── autorController.js # Lógica de negócio para autores
│   │   └── livroController.js # Lógica de negócio para livros
│   ├── models/
│   │   ├── Autor.js          # Model/Schema do Autor
│   │   └── Livro.js          # Model/Schema do Livro
│   ├── routes/
│   │   ├── autorRoutes.js    # Rotas específicas para autores
│   │   ├── livroRoutes.js    # Rotas específicas para livros
│   │   └── index.js          # Centralizador de rotas
│   ├── app.js                # Configuração principal do Express
│   └── server.js             # Ponto de entrada do servidor
├── .env.example              # Template de variáveis de ambiente
├── package.json              # Gerenciamento de dependências do projeto
├── .gitattributes            # Configurações do Git
├── .gitignore                # Arquivos ignorados pelo Git
├── package-lock.json         # Lock das versões
└── README.md                 # Documentação
```

---

## 🌐 Endpoints da API

| Método | Rota                | Descrição                       |
|--------|---------------------|----------------------------------|
| GET    | `/autores`          | Lista todos os autores          |
| POST   | `/autores`          | Cria um novo autor              |
| PUT    | `/autores/:id`      | Atualiza um autor               |
| DELETE | `/autores/:id`      | Remove um autor                 |
| GET    | `/livros`           | Lista todos os livros           |
| POST   | `/livros`           | Cria um novo livro              |
| PUT    | `/livros/:id`       | Atualiza um livro               |
| DELETE | `/livros/:id`       | Remove um livro                 |

---

## ⚙️ Instalação e Execução
&nbsp; &nbsp; &nbsp; &nbsp;Primeiramente, certifique-se de ter instalado as seguintes ferramentas: 
- Node.js (v18+);
- Git.
<br> <br>
&nbsp; &nbsp; &nbsp; &nbsp;Após isso, siga os passos subsequentes:
<br><br>

1. **Clone o repositório**
```bash
git clone https://github.com/luanalima77/NodeJS-criando-uma-API-Rest-com-Express-e-MongoDB.git
cd NodeJS-criando-uma-API-Rest-com-Express-e-MongoDB
```

<br>

2. **Instale as dependências**
```bash
npm install
```
<br>

```bash
npm install express
```
<br>

```bash
npm install nodemon
```
<br>

```bash
npm install mongoose
```

<br>

```bash 
npm install dotenv
```
<br>

3. **Configure o .env**

&nbsp; &nbsp; &nbsp; &nbsp;Renomeie o arquivo .env.example para .env e edite as variáveis de ambiente conforme sua coleção no MongoDB e insira as strings de conexão solicitadas nas seguintes variáveis de ambiente:
```
MONGODB_URI_SRV_CONEXAO=
MONGODB_URI_SEM_SRV_CONEXAO=
```

<br>

4. **Inicie o servidor**
```bash
npm run dev
```