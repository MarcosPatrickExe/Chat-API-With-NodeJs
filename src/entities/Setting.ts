//criando a classe (ou entidade) que vai representar a tabela Settings do database dentro da aplicação
import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from "typeorm"
import{ v4 } from "uuid";
/**
 * OBS: cada versão da biblioteca cria os IDs de forma diferente:
 * v1 - gera a partir de um tempo e relacionado ao endereco mac da máquina
 * v2 e v3 - gera id por hash (name space)
 * v4 - gera números aleatórios qualquer
 */

@Entity("settings")//define qual o elemento que é uma entidade, no caso, o "Settings". Essa vai representar a tabela settings na aplicação
class Setting{
   @PrimaryColumn()//exemplo de anotation ou anotação
   id: string;//generationStrategy: "uuid",'
   /*esse comando acima permite que o próprio banco defina o valor de uuid
   porém, há a bilbioteca chamada de "uuid" que gera um valor dese tipo. Logo, isso não é gerado
   mais pelo banco de dados, e sim pela aplicação. A "uuid" também apresenta tipagens assim como 
   o Express, assim, precisa ser instalada em modo de desenvolvmento. Para utilizá-la faça a 
   importação da linha 4 e crie um construtor dentro dessa classe, como na linha  50.*/

   @Column()//indica que o atributo abaixo será uma coluna
   username: string;

   @Column()//indica que o atributo abaixo será uma coluna
   chat: boolean;

   @UpdateDateColumn()//Esse atributo "update_at" terá o valor gerado automaticamente por essa anotação/função ("UpdateDateColumn") que vem do framework typeorm
   update_at: Date;//tipo "Data"

   @CreateDateColumn()//Esse atributo "created_at" terá o valor gerado automaticamente por essa anotação/função ("CreatedDateColumn") que vem do framework typeorm
   created_at: Date;

   constructor(){
     if(!this.id){ this.id = v4(); }//se o id vier não preenchido ele recebe um novo número uuid automaticamente.
   }
}

/**
 * Caso ocorra algum erro ao implementar as anotations por causa do uso do typescript
 * é necessário descomentar as seguintes anotações no arquivo "tsconfig.json" que são
 * "experimentalDecorators": true,  e "emitDecoratorMetadata": true
 */

/**
 * OBS: para que as entidades funcionem é necessário mapeá-las para que sejam visíveis à 
 * aplicação. Para isso deve-se adionar o script abaixo no arquivo "ormconfig.json":
 * "entities":["./src/database/**.ts"]
 */

export {Setting}