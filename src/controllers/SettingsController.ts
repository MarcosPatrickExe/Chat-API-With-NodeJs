//controllers são classes que recebem dados das rotas(ou Routes) e se comunicam com os services

import {Request, Response} from "express";
import {SettingsService} from "../services/SettingsService";

class SettingController{//nome do Controller
    async passarDados(request: Request, response: Response){
        
        //aqui fica o mesmo código de criação do objeto do tipo repository
        const {chat, username} = request.body;//pegando atributos (através da desistruturação) de um objeto que vem de uma request do tipo "body"

        try{//tentando avaliar se o usuário já existe
            var setService = await new SettingsService().createObj({chat, username});//passando os dados à serem cadastrados para o arquivo "SettingsService.t"

            //retornando uma response como resposta à requisição feita:
            return response.json(setService);//retornando o objeto recém-criado dentro do repositório como response
       
        }catch(err){//caso já exista o programa vai até aqui
            return response.status(400).json({
                message: err.message
            });
            //se for um erro do servidor coloca-se 500, se for da aplicação é 400
        }
            
    }
}

export {SettingController};