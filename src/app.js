//Importando o express.
import express from 'express';

//Criando uma instância de express.
const app = express();

//Usando o middleware express.json() nas requisições.
app.use(express.json());

// Array de livros.
const livros =[
    {
        id: 1,
        titulo: "Dom Casmurro",
    },

    {
        id: 2,
        titulo: "Memórias Póstumas de Brás Cubas",
    },
]

//Função para buscar livros por id
function buscarLivros(id){
    return livros.findIndex(livro =>{
        return livro.id === Number(id);
    });
}


// ***CRIANDO ROTAS ***

//Rota raiz.
app.get("/", (req, res)=>{
    res.status(200).send("Curso de Node.js");
});

//Rota pegar os livros já adicionados.
app.get("/livros", (req, res)=>{
    res.status(200).json(livros);
});


// Rota para adicionar livros.
app.post ("/livros", (req, res)=>{
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
});

//Rota para pegar um livro específico.
app.get("/livros/:id", (req, res)=>{
    const index = buscarLivros(req.params.id);
    res.status(200).json(livros[index]);
})


//Rota para atualizar um livro.
app.put("/livros/:id", (req, res)=>{
    const index = buscarLivros(req.params.id);
    livros[index].titulo == req.body.titulo;
    res.status(200).json(livros);
})


app.delete("/livros/:id", (req, res)=>{
    const index = buscarLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso!");
})

//Exportando a instância de express.
export default app;