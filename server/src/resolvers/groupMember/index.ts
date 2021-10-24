import { Query, Arg, Mutation, Resolver } from "type-graphql";
import { GroupMember } from "../../entities";
import { GroupMemberResponse } from "./types";

@Resolver()
export class GroupMemberResolver {
  @Mutation(() => GroupMemberResponse)
  async joinGroup(@Arg("groupId") groupId: number) {
    // TODO: Use JWT or similar to get user token here
    const userId = 1;
    const isAlreadyMember = await GroupMember.findOne({
      where: { userId, groupId },
    });
    if (!!isAlreadyMember) {
      return {
        errors: [
          {
            field: "notification",
            message: "is already a member",
          },
        ],
      };
    }
    const groupMember = await GroupMember.create({ userId, groupId }).save();
    return { groupMember };
  }

  @Mutation(() => Boolean)
  async leaveGroup(@Arg("groupId") groupId: number) {
    const userId = 1;
    const deleteResult = await GroupMember.delete({ userId, groupId });
    return deleteResult.affected === 1;
  }

  @Query(() => [GroupMember])
  async getGroupMembers(@Arg("groupId") groupId: number) {
    // TODO: Add blocking for what fields are returned for users that !== me
    const groupMembers = await GroupMember.find({
      where: { groupId },
      relations: ["user"],
    });
    return groupMembers;
  }

  @Query(() => [GroupMember])
  async getAllGroupMembers() {
    const groupMembers = await GroupMember.find({
      relations: ["group", "user"],
    });
    return groupMembers;
  }
}
