import { BuildSchemaOptions } from "type-graphql";
import { GroupResolver } from "./group";

export const resolvers: Pick<BuildSchemaOptions, "resolvers"> = {
  resolvers: [GroupResolver],
};
