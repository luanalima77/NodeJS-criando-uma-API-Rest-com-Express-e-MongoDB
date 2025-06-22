//Importando o model Livro.
import livro from "../models/Livro.js";
import {autor} from "../models/Autor.js";

//Classe com os métodos para cada operação realizada com os livros.
class LivroController{
    static async listarLivros(req, res){
        try{
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
        }catch(erro){
            res.status(500).json(erro);
        }
    }

    static async cadastrarLivro(req, res){
       
        try{
            const novoLivro = req.body;
            console.log(novoLivro.autor);
            
            if (!novoLivro.autor) {
                return res.status(400).json({message: "ID do autor é obrigatório"});
            }

            const autorEncontrado = await autor.findById(novoLivro.autor);

             if (!autorEncontrado) {
                return res.status(404).json({message: "Autor não encontrado"});
            }

            const livroCompleto = {...novoLivro, autor:{...autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "Livro adicionado com sucesso", livro: livroCriado});
        }catch(erro){
            res.status(500).json({message: `Erro ao cadastrar novo livro: ${erro.message}`});
        }
    }


    static async listarLivroPorId(req, res){
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json({message: "Livro encontrado com sucesso", livro: livroEncontrado});
        }catch(erro){
            res.status(500).json({message: `Erro ao achar livro por id: ${erro.message}`});
        }
    }


    static async atualizarLivroPorId(req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado com sucesso", livro: id});
        }catch(erro){
            res.status(500).json({message: `Erro ao atualizar livro por id: ${erro.message}`});
        }
    }

    static async deletarLivro(req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro deletado com sucesso", livro: id});
        }catch(erro){
            res.status(500).json({message: `Erro ao deletar livro por id: ${erro.message}`});
        }
    }

    static async listarLivrosPorEditora(req, res){
        const editora = req.query.editora;
        try{
            const livrosPorEditora = await livro.find({editora: editora});
            res.status(200).json(livrosPorEditora);
        }catch(erro){
            res.status(500).json({message: `Erro ao listar livros por editora: ${erro.message}`});
        }
    }

}

export default LivroController;