import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FullUserResponse = {
  __typename?: 'FullUserResponse';
  error?: Maybe<FieldError>;
  groups?: Maybe<Array<Group>>;
  user?: Maybe<User>;
};

export type Group = {
  __typename?: 'Group';
  createdAt: Scalars['String'];
  creator: User;
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  members: Array<GroupMember>;
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type GroupInput = {
  name: Scalars['String'];
};

export type GroupMember = {
  __typename?: 'GroupMember';
  createdAt: Scalars['String'];
  group: Group;
  groupId: Scalars['Float'];
  id: Scalars['Float'];
  updatedAt: Scalars['String'];
  user: User;
  userId: Scalars['Float'];
};

export type GroupMemberResponse = {
  __typename?: 'GroupMemberResponse';
  errors?: Maybe<Array<FieldError>>;
  groupMember?: Maybe<GroupMember>;
};

export type GroupPost = {
  __typename?: 'GroupPost';
  createdAt: Scalars['String'];
  creator: User;
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  message: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type GroupPostInput = {
  message: Scalars['String'];
  title: Scalars['String'];
};

export type GroupResponse = {
  __typename?: 'GroupResponse';
  errors?: Maybe<Array<FieldError>>;
  group?: Maybe<Group>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewGroupPost: GroupPost;
  createGroup: GroupResponse;
  joinGroup: GroupMemberResponse;
  leaveGroup: Scalars['Boolean'];
  register: UserResponse;
};


export type MutationAddNewGroupPostArgs = {
  postInput: GroupPostInput;
};


export type MutationCreateGroupArgs = {
  input: GroupInput;
};


export type MutationJoinGroupArgs = {
  groupId: Scalars['Float'];
};


export type MutationLeaveGroupArgs = {
  groupId: Scalars['Float'];
};


export type MutationRegisterArgs = {
  input: UserInput;
};

export type Query = {
  __typename?: 'Query';
  getAllGroupMembers: Array<GroupMember>;
  getGroupMembers: Array<GroupMember>;
  getGroups: Array<Group>;
  getUser: FullUserResponse;
  me: UserResponse;
};


export type QueryGetGroupMembersArgs = {
  groupId: Scalars['Float'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newGroupPost: GroupPost;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  groupMembers: Array<GroupMember>;
  groupPosts: Array<GroupPost>;
  groups: Array<Group>;
  id: Scalars['Float'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type UserInput = {
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  groupMembers?: Maybe<Array<GroupMember>>;
  user?: Maybe<User>;
};

export type GetGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGroupsQuery = { __typename?: 'Query', getGroups: Array<{ __typename?: 'Group', name: string, createdAt: string, updatedAt: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'UserResponse', user?: { __typename?: 'User', username: string, id: number } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };


export const GetGroupsDocument = gql`
    query GetGroups {
  getGroups {
    name
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetGroupsQuery__
 *
 * To run a query within a React component, call `useGetGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GetGroupsQuery, GetGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGroupsQuery, GetGroupsQueryVariables>(GetGroupsDocument, options);
      }
export function useGetGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupsQuery, GetGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGroupsQuery, GetGroupsQueryVariables>(GetGroupsDocument, options);
        }
export type GetGroupsQueryHookResult = ReturnType<typeof useGetGroupsQuery>;
export type GetGroupsLazyQueryHookResult = ReturnType<typeof useGetGroupsLazyQuery>;
export type GetGroupsQueryResult = Apollo.QueryResult<GetGroupsQuery, GetGroupsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    user {
      username
      id
    }
    errors {
      field
      message
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;