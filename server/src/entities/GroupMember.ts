import { Field, ObjectType } from "type-graphql";
import {
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Entity,
} from "typeorm";
import { User, Group } from "./index";

@ObjectType()
@Entity()
export class GroupMember extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Group)
  @ManyToOne(() => Group, (group) => group.members)
  group: Group;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.groupMembers)
  user: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt = Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = Date();
}
