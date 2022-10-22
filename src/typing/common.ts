export type UserInfo = {
  userId: Number;
  userNickname: String;
  selfIntroduce?: String;
};

export type Card = {
  postId: Number;
  userInfo: UserInfo;
  customBehaviorList?: Array<String>;
  behaviorList: Array<String>;
  comment?: String;
  heartCount: Number;
  alreadyHeart: Boolean;
};

export type TagProps = {
  children: JSX.Element | String;
  backgroundColor?: String;
  border?: Boolean;
  hover?: Boolean;
  className?: String;
};

export type Behavior = {
  behaviorId: Number;
  name: String;
};

export type Post = {
  comment?: String;
  doingDay: String;
  behaviorList: Number[];
  customizedBehaviors?: String[];
};
