import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateNewColumnInUserTable1703991145412 implements MigrationInterface {
    name = 'CreateNewColumnInUserTable1703991145412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`createdAt\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`createdAt\``);
    }

}
