import express from "express";
import LivroController from "../controllers/livroController.js";
const livroRoutes = express.Router();

//Rota para obter os livros cadastrados.
livroRoutes.get("/livros", LivroController.listarLivros);

//Rota para obter livros por editora.
livroRoutes.get("/livros/busca", LivroController.listarLivrosPorEditora);

//Rota para listar livro por id.
livroRoutes.get("/livros/:id", LivroController.listarLivroPorId);

//Rota para cadastrar os livros.
livroRoutes.post("/livros", LivroController.cadastrarLivro);

//Rota para atualizar livro por id.
livroRoutes.put("/livros/:id", LivroController.atualizarLivroPorId);

//Rota para deletar livro por id.
livroRoutes.delete("/livros/:id", LivroController.deletarLivro);

export default livroRoutes;