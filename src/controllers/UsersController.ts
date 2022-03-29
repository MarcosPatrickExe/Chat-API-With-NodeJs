import { UsersService } from "../services/UsersService";
import { Request, Response } from "express";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersController{
   async passarDados(request: Request, response: Response) : Promise<Response>{
        
        const {email} = request.body;
   
           var user = await new UsersService().repassarDados(email);

           //console.log("tipo de objeto com typeof: "+typeof user+" / tipo a partir do instanceof repository: "+(user instanceof UsersRepository));

           if (user instanceof UsersRepository){//se o objeto for do tipo "UsersRepository" é porque ele já existe no database
                response.send("Já existe um usuário com esse email!!!");
                return response.json(user);

           }else{//senão retorna um objeto do tipo User
               //response.status(404)
               return response.send("Email cadastrado e usuário criado!")
           }
    }
}

export {UsersController}