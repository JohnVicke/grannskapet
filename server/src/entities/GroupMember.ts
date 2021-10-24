import { Field, ObjectType } from "type-graphql";
import {
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Entity,
  Column,
} from "typeorm";
import { User, Group } from ".";

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

  @Field()
  @Column()
  userId: number;

  @Field()
  @Column()
  groupId: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt = Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = Date();
}
