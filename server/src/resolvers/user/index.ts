import { User } from "../../entities";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { FullUserResponse, UserInput, UserResponse } from "./types";

@Resolver(User)
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(@Arg("input") userInput: UserInput): Promise<UserResponse> {
    const { username } = userInput;
    const user = await User.create({ username }).save();
    if (!user) {
      return {
        errors: [{ field: "500", message: "Internal server error" }],
      };
    }
    return { user };
  }

  @Query(() => UserResponse)
  async me(): Promise<UserResponse> {
    const userId = 1;
    const user = await User.findOne(userId, {
      relations: ["groupMembers"],
    });
    return { user };
  }

  @Query(() => FullUserResponse)
  async getUser(): Promise<FullUserResponse> {
    const userId = 1;
    const user = await User.findOne(userId, { relations: ["Group"] });
    console.log(user);
    return { user };
  }
}
