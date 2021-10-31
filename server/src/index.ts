import 'reflect-metadata';
import 'dotenv-safe/config';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import { execute, subscribe } from 'graphql';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { connectionOptions } from './utils/connectionOptions';
import { buildSchemaOptions } from './utils/buildSchemaOptions';
import { populateDb } from './utils/populateDb';
import { purgeDb } from './utils/purgeDb';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { getApolloConfig } from './utils/getApolloConfig';

const PORT = process.env.PORT;
const POPULATE_DB = false;
const PURGE_DB = false;

(async () => {
  await createConnection(connectionOptions);
  if (PURGE_DB) await purgeDb();
  if (POPULATE_DB) await populateDb();

  const app = express();
  app.use(cors());

  const schema = await buildSchema(buildSchemaOptions);
  const httpServer = http.createServer(app);
  const subscriptionServer = SubscriptionServer.create(
    { execute, subscribe, schema },
    { server: httpServer, path: '/graphql' }
  );

  const apolloServer = new ApolloServer(
    getApolloConfig(schema, subscriptionServer)
  );

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });

  app.get('/', (_, res) => {
    res.json({
      welcome: 'Lets make grannskap great again!',
      message: 'Access graphql on /graphql',
      version: 'v1'
    });
  });

  httpServer.listen(
    typeof PORT === 'string' ? parseInt(PORT, 10) : 4000,
    () => {
      console.log(
        `
        Server started!
          port: ${PORT}
          http: http://localhost:${PORT}${apolloServer.graphqlPath}
          ws:   ws://localhost:${PORT}${apolloServer.graphqlPath}\n\n`
      );
    }
  );
})().catch((error) => console.error(error));
