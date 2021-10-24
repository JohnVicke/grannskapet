import {
  Arg,
  Mutation,
  Resolver,
  Subscription,
  PubSub,
  PubSubEngine,
  Root,
} from "type-graphql";
import { GroupPostInput, TOPICS } from "./type";
import { GroupPost } from "../../entities";

@Resolver()
export class GroupPostResolver {
  @Subscription({
    topics: TOPICS.NEW_POST,
  })
  newGroupPost(@Root() post: GroupPost): GroupPost {
    return post;
  }

  @Mutation(() => GroupPost)
  async addNewGroupPost(
    @Arg("postInput") postInput: GroupPostInput,
    @PubSub() pubSub: PubSubEngine
  ) {
    const creatorId = 1;
    const post = await GroupPost.create({ ...postInput, creatorId }).save();
    await pubSub.publish(TOPICS.NEW_POST, post);
    return post;
  }
}
