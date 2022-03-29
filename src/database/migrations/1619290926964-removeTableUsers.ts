import {MigrationInterface, QueryRunner} from "typeorm";

export class removeTableUsers1619290926964 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");//removendo a tabela "users" que estava com problema
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
