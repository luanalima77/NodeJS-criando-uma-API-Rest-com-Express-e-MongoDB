//Importando a biblioteca mongoose.
import mongoose from "mongoose";

//Importando DNS.
import dns, { lookup } from "dns";

//Importando as configurações do .env para usar as strings de conexão.
import dotenv from "dotenv";
dotenv.config();

dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1', '1.0.0.1']);


async function conectarNoBancoDeDados() {
  try{

    //Verificando a conexão com DNS primeiro.
    console.log("Testando conexão com DNS...");

    try{
      await new Promise((resolve, reject) => {
        dns.lookup ('cluster0-shard-00-00.k4fs0qy.mongodb.net', (erro) =>{
          if(erro){
            reject(erro);
          }else{
            resolve();
          }
        });
        console.log("O DNS está funcionando!");
      })
    }catch(erroDeDNS){
      console.error("Erro de DNS", erroDeDNS.message);

      //Se o DNS não funcionar, usar string SRV normalmente.
      const mongoURIComSRV = process.env.MONGODB_URI_SRV_CONEXAO;

      await mongoose.connect(mongoURIComSRV, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 15000,
      });

      console.log("Conexão ao MongoDB com a string SRV feita com sucesso!");
      return mongoose.connection;
    }

    //Se o DNS funcionar, usar string completa.
    const mongoURISemSRV = process.env.MONGODB_URI_SEM_SRV_CONEXAO;
    console.log("Conectando ao MongoDB...");

    await mongoose.connect(mongoURISemSRV, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 15000,
    });

    console.log("Conexão ao MongoDB com a string sem SRV feita com sucesso!");
    return mongoose.connection;
  }catch (erro) {
    console.error("Erro ao conectar no MongoDB:", erro);
    if (erro.message.includes('ENOTFOUND')) {
      console.log("SOLUÇÃO: Configure DNS do Google no Windows:");
      console.log(" 1. Abra CMD como Administrador");
      console.log(" 2. netsh interface ip set dns \"Wi-Fi\" static 8.8.8.8");
      console.log(" 3. ipconfig /flushdns");
    }
    throw erro;
  }
}

export default conectarNoBancoDeDados;
