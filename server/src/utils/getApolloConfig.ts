import { Config, ExpressContext } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { Context } from '../types/context';

export const getApolloConfig = (
  schema: GraphQLSchema,
  subscriptionServer: SubscriptionServer
): Config<ExpressContext> => {
  return {
    schema,
    context: async ({ req, res }: Context) => ({
      req,
      res
    }),
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            }
          };
        }
      }
    ]
  };
};
