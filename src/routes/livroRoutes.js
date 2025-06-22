import express from "express";
import LivroController from "../controllers/livroController.js";
const routes = express.Router();

//Rota para obter os livros cadastrados.
routes.get("/livros", LivroController.listarLivros);

//Rota para cadastrar os livros.
routes.post("/livros", LivroController.cadastrarLivro);

//Rota para listar livro por id.
routes.get("/livros:id", LivroController.listarLivroPorId);

//Rota para atualizar livro por id.
routes.put("/livros:id", LivroController.atualizarLivroPorId);

//Rota para deletar livro por id.
routes.delete("/livros:id", LivroController.deletarLivro);

export default routes;