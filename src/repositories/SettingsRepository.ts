import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";//importando a entidade para aplicá-la nesse repositório

//Esse '@' indica que é uma anotação
@EntityRepository(Setting)//Relaciona o repositório à uma entidade do tipo 'setting'(mesmo nome da classe que está dentro de entities)
class SettingsRepository extends Repository<Setting>{}//o nome entre as tags <> define o tipo das entidades que esse repositorio se comunicará

export {SettingsRepository};//exportando o repositorio do tipo "SettingsRepository" para torná-lo acessível aos outros documentos do projeto