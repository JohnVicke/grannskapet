import { ConnectionOptions } from "typeorm";
import entities from "../entities/index";
import path from "path";

export const connectionOptions: ConnectionOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: true,
  synchronize: true,
  entities,
  migrations: [path.join(__dirname, "../migrations")],
};
