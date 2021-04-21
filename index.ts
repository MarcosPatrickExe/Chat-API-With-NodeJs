
//MÉTODO 1:
/*
function userData(id: Number , nome: String, senha: Number, CPF: String, RG: String, telefone: Number, email: String){
    console.log(id, nome, CPF, RG, senha, telefone, email)
}
*/

//MÉTODO 2: criar interface e definir o seu tipo nas variável dos argumentos
interface userDates{
    id: Number,
    nome: String,
    senha: Number,
    CPF: String,
    RG: String,
    telefone: Number,
    email: String
}

function userData( {id, nome, CPF, senha, RG, telefone, email} : userDates){
    //console.log(dados.nome) //OU:
    console.log(id, nome, CPF, senha, RG, telefone, email)
}

//---------------------------------------------------------------------

class registerAdmin{
    cadastre(): void{
        userData({id: 5, 
                  nome: "jessica", 
                  CPF: "000.000.000-00", 
                  senha: 12345, 
                  RG: "0000000000-0", 
                  telefone: 88888888, 
                  email: "jessicalvaes@gmail.com"})
    }
}

class registerVendor{
   cadastre(): void{
      userData({id: 9, 
        nome: "lorrane", 
        CPF: "000.000.000-00", 
        senha: 67891, 
        RG: "0000000000-0", 
        telefone: 99999999, 
        email: "lorranefonseca@gmail.com"})
   }
}




