import { Group, GroupMember, User } from "../../entities";
import { Field, InputType, ObjectType } from "type-graphql";
import { FieldError } from "../types";

@InputType()
export class UserInput {
  @Field()
  username: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [GroupMember], { nullable: true })
  groupMembers?: GroupMember[];
}

@ObjectType()
export class FullUserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => FieldError, { nullable: true })
  error?: FieldError;

  @Field(() => [Group], { nullable: true })
  groups?: Group[];
}
