import "reflect-metadata";
import "dotenv-safe/config";
import express from "express";
import cors from "cors";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import { execute, subscribe } from "graphql";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { connectionOptions } from "./utils/connectionOptions";
import { buildSchemaOptions } from "./utils/buildSchemaOptions";
import { Context } from "./types";
import { populateDb } from "./utils/populateDb";
import { purgeDb } from "./utils/purgeDb";
import { SubscriptionServer } from "subscriptions-transport-ws";

const PORT = process.env.PORT;
const POPULATE_DB = false;
const PURGE_DB = false;

(async () => {
  await createConnection(connectionOptions);
  if (PURGE_DB) await purgeDb();
  if (POPULATE_DB) await populateDb();

  const app = express();
  const schema = await buildSchema(buildSchemaOptions);
  app.use(cors());

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): Context => ({
      req,
      res,
    }),
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });

  app.get("/", (_, res) => {
    res.json({
      welcome: "Lets make grannskap great again!",
      message: "Access graphql on /graphql",
      version: "v1",
    });
  });

  const httpServer = http.createServer(app);
  const subscriptionServer = SubscriptionServer.create(
    { execute, subscribe, schema },
    { server: httpServer, path: apolloServer.graphqlPath }
  );

  httpServer.listen(
    typeof PORT === "string" ? parseInt(PORT, 10) : 4000,
    () => {
      console.log(
        `\n\nServer started!\n    port: ${PORT}\n\nAccess graphqlserver on:\n    url: http://localhost:${PORT}${apolloServer.graphqlPath}\n\n`
      );
    }
  );
})().catch((error) => console.error(error));
