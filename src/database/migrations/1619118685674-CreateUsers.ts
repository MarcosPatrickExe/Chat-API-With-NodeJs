import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1619118685674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({//nova tabela
                name: "users",//nome da tabela
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true//essa tabela vai ter chave primária
                    },
                    {
                        name: "email",
                        type: "varchar"//como se fosse o tipo String para o banco de dados
                    },
                    {
                        name: "created_at",//data de criação
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );//await queryRunner.createTable()
        //await queryRunner.dropTable("users")
        //apaga a tabela "users" caso o seguinte comando seja aplicado no terminal:
        // yarn typeorm migration:revert
        
    }//public async up(queryRunner: QueryRunner): Promise<void>

    public async down(queryRunner: QueryRunner): Promise<void> {
       
    }
}
