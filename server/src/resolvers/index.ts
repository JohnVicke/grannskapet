import { BuildSchemaOptions } from "type-graphql";
import { GroupResolver } from "./group";
import { GroupMemberResolver } from "./groupMember";
import { GroupPostResolver } from "./groupPost";
import { UserResolver } from "./user";

export const resolvers: Pick<BuildSchemaOptions, "resolvers"> = {
  resolvers: [
    GroupResolver,
    UserResolver,
    GroupPostResolver,
    GroupMemberResolver,
  ],
};
