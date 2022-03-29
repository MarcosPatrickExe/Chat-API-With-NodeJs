import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from "typeorm";
import {v4 as randomId} from "uuid";

@Entity("users")//Entidade do tipo "User"
class User{
   constructor(){
      if(!this.id){ this.id = randomId(); }
   }
 
   @PrimaryColumn()
   id: string;
 
   @Column()
   email: string;
   
   @CreateDateColumn()
   created_at: Date;//tipo data
}

export {User}