import { ObjectType, Field } from '@nestjs/graphql';

export type UserSignup = {
  projectId: string;
  method: string;
  password: string;
  email?: string;
  username?: string;
};

export type UsernameLogin = {
  projectId: string;
  username: string;
  password: string;
};

export type EmailLogin = {
  projectId: string;
  email: string;
  password: string;
};

@ObjectType()
export class AccessToken {
  @Field()
  accessToken: string;
}

export type ValidatedUser = {
  id: string;
  projectId: string;
  role: string;
};
