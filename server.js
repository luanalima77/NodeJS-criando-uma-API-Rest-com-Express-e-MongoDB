//Importando a biblioteca HTTP (nativa do NodeJS).
import http from 'http';

//Indicando qual porta será usada no servidor.
const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Livros",
    "/autores":"Autores"
};

// Criando o servidor.
const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type": "text/plain"}); //Construindo o cabeçalho da resposta.
    res.end(rotas[req.url]);
});

server.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})