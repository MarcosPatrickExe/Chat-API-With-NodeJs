/**
 * OBS: caso o usuário tenha passado o seu email mas ele 
 * não está cadastrado, ou seja, não está no banco de dados,
 * deve-se cadastrá-lo automaticamente. 
 * 
 * OBS2: já que o ID do usuário ficará na tabela "mensagens"
 * e tanbém na "connections", atuando nelas como uma Foreign Key
 * elas deverão ser criadas quando somente o usuário for criado antes delas,
 * uma vez que caso sejam criadas primeiramente não poderão acessar
 * o local onde está o ID do usuário, pois o mesmo não existe.
 */

import {UsersRepository} from "../repositories/UsersRepository";
import {getCustomRepository} from "typeorm";
import {User} from "..//entities/User";

/*aqui, diferente do arquivo "SettingsService.ts", 
não vai precisar de uma interface, pois a informação à ser 
recebida se resume à um só parâmetro, que no caso é o "email" */

class UsersService{
    async repassarDados(email: string){//recebendo objeto do tipo "User"
        
        var objUser = getCustomRepository(UsersRepository)

        const userExiste =  await objUser.findOne(email);//passando o atributo "email" do objeto do tipo User para a função "findOne"

        console.log("encontrado instanceof User: "+ (userExiste instanceof User)+"/ encontrado instanceof UsersRepository: " + (userExiste instanceof UsersRepository));

        if(userExiste){  
            return objUser 
        }else{
            var obj = objUser.create({ email });//criando objeto do tipo "User" com o atributo email inserido pelo usuário

            await objUser.save(obj);//salvando o objeto (que é "obj") recentemente criado dentro do repositório
            return obj
        }

    }
}

export {UsersService}