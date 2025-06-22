//Importando o express.
import express from 'express';
import conectarNoBancoDeDados from "./config/dbConnect.js";
import routes from './routes/index.js';

// Variável de conexão.
const conexao = await conectarNoBancoDeDados();

//Criando uma instância de express.
const app = express();
app.use(express.json());
routes(app);

// Averiguando erros.
conexao.on("error", (erro) =>{
    console.error("Erro na conexão com o banco de dados", erro);
});

// Criando a conexão.
conexao.once("open", ()=>{
    console.log("Conexão com o banco de dados feita com sucesso");
});

//Exportando a instância de express.
export default app;