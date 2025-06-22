//Importando o model Livro.
import livro from "../models/Livro.js";

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
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "Livro adicionado com sucesso", livro: novoLivro});
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

}

export default LivroController;