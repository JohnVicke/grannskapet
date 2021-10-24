import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Group } from "../../entities";
import { GroupInput, GroupResponse } from "./types";

@Resolver()
export class GroupResolver {
  @Mutation(() => GroupResponse)
  async createGroup(
    @Arg("input") groupInput: GroupInput
  ): Promise<GroupResponse> {
    const { name } = groupInput;
    const groupAlreadyExists = await Group.findOne({ where: { name } });
    if (!!groupAlreadyExists) {
      return {
        errors: [{ field: "notification", message: "Group already exists" }],
      };
    }
    const group = await Group.create({ name }).save();
    if (!group) {
      return {
        errors: [{ field: "500", message: "Internal server error" }],
      };
    }
    return { group };
  }

  @Query(() => [Group])
  async getGroups() {
    const groups = await Group.find();
    return groups;
  }
}
