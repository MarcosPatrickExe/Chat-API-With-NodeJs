import {Router} from "express";//utilizando rotas para substituir a funnção do objeto "app" dentro de "server.ts"
import {getCustomRepository} from "typeorm";//importando função que irá chamar o repository que foi exportado no arquivo "settingsRepository"
import {SettingsRepository} from "./repositories/SettingsRepository";//importando o objeto "settingsRepository" exportado no arquivo "settingRepository"
import { SettingController } from "./controllers/SettingsController"; 
import { UsersController} from "./controllers/UsersController";

const routes = Router();

routes.post("/settings", new SettingController().passarDados);//instanciando um Controller, no caso a classe ettingController, e passando a sua função assíncrona que tem o nome "passarDados"
  //Estava assim: routes.post("/settings", async (request, response) => {});
  //todo o conteúdo que estava nessa função assíncrona foi movido para o arquivo "SettingsController.ts"


routes.post("/users", new UsersController().passarDados);

export {routes};//exportando objeto para que seja utilizado no arquivo 'server.ts'

/*Agora basta importar esse arquivo dentro de "server.ts" para que a requisição do tipo 'POST' 
funcione perfeitamente. Mas, ainda pra isso deve-se passar esse objeto importado para a função 'use' do objeto
app, que é o objeto que recebeu a instância do Express() */


/**
 * -Tipos de parâmetros:
 * 
 * -Routes Params => Parametros de rotas:
 * São aqueles valores que vem junto à rota, ou seja, ao endereço URL, exemplo:
 * <https://localhost:3333,/settings/1>
 * 
 * Query Params => Filtros e buscas
 * URLs com a estrutura chave-valor (com símbolos de ?, = e &), exemplo:
 * <http://localhost:3333/settings/1?search=algumascoisa&id=5>
 * 
 * Body Params => Servem para passar objetos e com isso fazer inserções ou alterações através da URL
 */
