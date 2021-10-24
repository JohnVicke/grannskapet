import { Field, InputType } from "type-graphql";

@InputType()
export class GroupPostInput {
  @Field()
  title: string;

  @Field()
  message: string;
}

export const TOPICS = {
  NEW_POST: "NEW_GROUP_POST",
};
