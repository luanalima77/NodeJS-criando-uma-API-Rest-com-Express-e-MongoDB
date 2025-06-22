import express from "express";
import AutorController from "../controllers/autorController.js";
const autorRoutes = express.Router();

//Rota para obter os livros cadastrados.
autorRoutes.get("/autores", AutorController.listarAutores);

//Rota para cadastrar os livros.
autorRoutes.post("/autores", AutorController.cadastrarAutor);

//Rota para listar livro por id.
autorRoutes.get("/autores/:id", AutorController.listarAutorPorId);

//Rota para atualizar livro por id.
autorRoutes.put("/autores/:id", AutorController.atualizarAutorPorId);

//Rota para deletar livro por id.
autorRoutes.delete("/autores/:id", AutorController.deletarAutor);

export default autorRoutes;