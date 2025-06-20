// Importando as rotas express
import app from "./src/app.js";

//Indicando qual porta será usada no servidor.
const PORT = 3000;

//Inicializando o servidor na porta 3000.
app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})