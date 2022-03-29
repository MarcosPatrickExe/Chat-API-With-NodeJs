import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1619030096663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                   {
                      name: "id",
                      type: "uuid",
                      isPrimary: true
                   },
                   {
                       name: "username",
                       type: "varchar"
                   },
                   {
                       name: "chat",
                       type: "boolean",
                       default: true /*para o dado ser inserido dentro de uma 
                       tabela com o valor default*/
                   },
                   {
                       name: "update_at",
                       type: "timestramp",
                       default: "now()"//insere o horário que ocorreu essa alteração
                   },
                   {
                       name: "created_at",
                       type: "timestamp",
                       default: "now()"//insere o horário que ocorreu essa alteração, ou seja, no momento que o registro for criado
                   }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");//apagando tabela
    }
}
