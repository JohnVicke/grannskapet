import { BuildSchemaOptions } from "type-graphql";
import { resolvers } from "../resolvers/index";
export const buildSchemaOptions: BuildSchemaOptions = {
  validate: false,
  ...resolvers,
};
