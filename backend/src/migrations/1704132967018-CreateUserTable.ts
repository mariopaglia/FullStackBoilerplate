import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1704132967018 implements MigrationInterface {
  name = 'CreateUserTable1704132967018';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" character varying NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "createdAt" text NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
