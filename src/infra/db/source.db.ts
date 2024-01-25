import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT as string, 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ["dist/modules/**/*.entity.js"],
  migrations: ["dist/infra/db/migrations/**/*.js"],
  migrationsTableName: "Migrations",
  migrationsRun: true,
  logging: true,
  logger: "file",
});
