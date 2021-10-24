import { GroupMember } from "../../entities";
import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../types";

@ObjectType()
export class GroupMemberResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => GroupMember, { nullable: true })
  groupMember?: GroupMember;
}
