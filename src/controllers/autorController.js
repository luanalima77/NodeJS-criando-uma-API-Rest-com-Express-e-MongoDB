//Importando o model Autor.
import autor from "../models/Autor.js";

//Classe com os métodos para cada operação realizada com os autores.
class AutorController{
    static async listarAutores(req, res){
        try{
        const listaAutores = await autor.find({});
        res.status(200).json(listaAutores);
        }catch(erro){
            res.status(500).json(erro);
        }
    }

    static async cadastrarAutor(req, res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Autor adicionado com sucesso", autor: novoAutor});
        }catch(erro){
            res.status(500).json({message: `Erro ao cadastrar novo autor: ${erro.message}`});
        }
    }


    static async listarAutorPorId(req, res){
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json({message: "Autor encontrado com sucesso", autor: autorEncontrado});
        }catch(erro){
            res.status(500).json({message: `Erro ao achar autor por id: ${erro.message}`});
        }
    }


    static async atualizarAutorPorId(req, res){
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Autor atualizado com sucesso", autor: id});
        }catch(erro){
            res.status(500).json({message: `Erro ao atualizar autor por id: ${erro.message}`});
        }
    }

    static async deletarAutor(req, res){
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor deletado com sucesso", autor: id});
        }catch(erro){
            res.status(500).json({message: `Erro ao deletar autor por id: ${erro.message}`});
        }
    }

}

export default AutorController;