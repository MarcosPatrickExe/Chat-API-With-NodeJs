import { Repository, EntityRepository } from "typeorm"
import {User} from "../entities/User"

@EntityRepository(User)//Anotação que define o tipo dessa classe abaixo, ou seja, um repositório e entidade
class UsersRepository extends Repository<User>{}

export {UsersRepository}//exportando repositório da entidade do tipo "Users"

//Se a anotação da linha 4 der erro quer dizer que a classe com o nome dela não existe ou que ela não importada