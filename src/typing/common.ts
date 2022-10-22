import { SetStateAction, Dispatch } from 'react';

export type UserInfo = {
  userId: Number;
  userNickname: String;
  selfIntroduce?: String;
};

export type Card = {
  postId: Number;
  userInfo: UserInfo;
  customBehaviorList: Array<String>;
  behaviorList: Array<String>;
  comment?: String;
};

export type TagProps = {
  text: String;
  backgroundColor?: String;
  border?: Boolean;
  hover?: Boolean;
};

export type Behavior = {
  behaviorId: Number;
  name: String;
};
