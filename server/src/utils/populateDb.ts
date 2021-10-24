import { Group, GroupMember, User } from "../entities";

const userOptions = {
  username: "virren",
};

const groupOptions = {
  name: "Grupp 1",
};

export const populateDb = async () => {
  console.log("\n\n----- POPULATE DB -----");
  const user = await User.create(userOptions).save();
  const group = await Group.create(groupOptions).save();
  const groupMember = await GroupMember.create({
    userId: user.id,
    groupId: group.id,
  }).save();

  console.log(user);
  console.log();
  console.log(group);
  console.log();
  console.log(groupMember);
  console.log("\n\n");
};
