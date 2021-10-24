import { Group } from "../../entities";
import { InputType, Field, ObjectType } from "type-graphql";
import { FieldError } from "../types";

@InputType()
export class GroupInput {
  @Field()
  name: string;
}

@ObjectType()
export class GroupResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Group, { nullable: true })
  group?: Group;
}
