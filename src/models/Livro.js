import mongoose from "mongoose";

//Criando o schema de livros.
const livroSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, required: true},
    autor: {type: String, required: true},
    editora: {type: String, required: true},
    preco: {type: Number, required: true}
}, {versionKey: false});


//Passando qual é a coleção que estamos usando e o schema dele.
const Livro = mongoose.model("livros", livroSchema);

export default Livro;