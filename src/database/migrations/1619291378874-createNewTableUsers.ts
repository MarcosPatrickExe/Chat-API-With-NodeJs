import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createNewTableUsers1619291378874 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( 
            new Table({//passando um objeto para o construtor da classe "Table"
                name: "users",

                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                      name: "email",
                      type: "varchar",
                    },
                    {
                      name: "created_at",
                      type: "timestamp",
                      default: "now()"
                    },
                ]

            })
      );//await queryRunner.createTable( 
    }

    public async down(queryRunner: QueryRunner): Promise<void> { }

}
