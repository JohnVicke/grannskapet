import "reflect-metadata";
import "dotenv-safe/config";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { connectionOptions } from "./utils/connectionOptions";
import { buildSchemaOptions } from "./utils/buildSchemaOptions";
import { Context } from "./types";

const PORT = process.env.PORT;

(async () => {
  await createConnection(connectionOptions);

  const app = express();
  app.use(cors());

  const apolloServer = new ApolloServer({
    schema: await buildSchema(buildSchemaOptions),
    context: ({ req, res }): Context => ({
      req,
      res,
    }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(typeof PORT === "string" ? parseInt(PORT, 10) : 4000, () => {
    console.log(
      `\n\nServer started!\n    port: ${PORT}\n\nAccess graphqlserver on:\n    url: http://localhost:${PORT}/graphql\n\n`
    );
  });
})().catch((error) => console.error(error));
