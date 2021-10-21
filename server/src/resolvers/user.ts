import { Query, Resolver } from "type-graphql";
import { Group } from "../entities/Group";

@Resolver(Group)
export class UserResolver {
  @Query(() => String)
  helloWorld() {
    return "hello world";
  }
}
