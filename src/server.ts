import express, { response } from "express"/*eses 3 pontinhos indicam que as tipagens da biblioteca vem separadas
e você precisa instalar elas (pelo cmd)

digite esse comando:  yarn add @types/express -D
o "-D" faz com que as tipagens sejam instaladas como dependências de desenvolvimento
depois disso os 3 pontinhos irão sumir
*/

const app = express();//criando um App, que é um servidor

app.get("/", (request, response):Object => {
    //return response.send("olá NLW 05") //OU:
    return response.json({
      message: "seja bem vindo ao NLW 05 !!!!!!"
    });
})

//por padrão os navegadores utilizam as requisições do tipo GET

app.post("/users", function(request, response)  {//OU: , (request, response) => { ... }
  return response.send("Server is running on port 3333");
})

app.listen(5555, function():void { console.log("bem vindo usuário")})
//número da porta que a aplicação está sendo executada

/*É bem provável que ocorra um erro ao executar esse arquivo pois o Node não compreende
a sintaxe "import XXX from XXX". Logo, faz-se necessário instalar as bibiotecas "typescript" e "ts-node-dev"
para fazer a tradução desse comando (e do export) e dizer a forma de como o Node irá interpretá-lo sem precisar
substituí-lo pelo comando "require", um pouco mais antigo. 

comando CMD para instalar o TypeScript com yarn:
            typescript -D

              yarn tsc --init

depois será criado um arquivo de configuração do typescript conhecido como "tsconfig.json".
depois disso vá no arquivo de configuração gerado para alterar o atributo "strict" que por padrão
estará com o valor true e você mudará para false. Com ele desativado as verificações durante o desenvolvimento 
serão inativas.

comando CMD para instalar a dependência "ts-node-dev":
             yarn add ts-node-dev -D

para utilizar a biblioteca "ts-node-dev" adicione o seguinte script
no arquivo packge.json: 

scripts":{
    "dev": "ts-node-dev src/server.ts"
  },

Para executar o programa vá até a pasta do projeto via CMD e digite 
"yarn dev" ou "npm run dev"

*/

/*TIPOS DE ROTAS:
*  GET = consulta/busca
*  POST = criação
*  PUT = alteração
*  DELETE = deletar
*  PATCH = Alterar uma informação específica
*/
