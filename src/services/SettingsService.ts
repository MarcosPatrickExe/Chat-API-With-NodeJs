/* Os services são classes que tem a responsabilidades de exercer as regras de negócio, ou seja,
realizar as operções cruciais da aplicação que são criar, atualizar, deletar e consultar dados do 
database. Eles, assim como esse abaixo, recebem dados dos controllers e utilizam-se dos repositórios
para realizar operações sobre o banco de dados. */

import {getCustomRepository} from "typeorm";
import {SettingsRepository} from "../repositories/SettingsRepository";

interface ISettingsCreate{
    chat: boolean,
    username: string
}

class SettingsService{

    async createObj({chat, username}: ISettingsCreate){
        const obj = getCustomRepository(SettingsRepository);
        
        /*para criar um objeto dentro de uma tabela é necessário 2 passos: 
        criar representação desse objeto e
        salvar esse objeto. */
        
        const usuarioJaExiste = await obj.findOne({//a func "findOne()"" só retorna 1 registro do tipo Boolean
            username //Equivale ao seguinte comando SQL: "Select * from settings where username = "username" limit 1;"
        });

        if(usuarioJaExiste){
           throw new Error("Usuário já existe!");//imprime a mensagem de erro e para a execução desse arquivo
        }

        //criando o objeto:
        var settings = obj.create({/*esse método "create" equivale 
            ao "new Settings", no que faz o instanciando aquela classe 
            "Settings" que está dentro da pasta de entidades(Entities)*/
            chat: chat,//aplicando atributos vindos da request dentro do repositório
            username: username
        })

        //com o objeto criado agora vamos salvá-lo abaixo:
        await obj.save(settings) //.catch( ()=>{console.log("Promise rejection capturada!")} );
        
        return settings;
    }
}

export {SettingsService};