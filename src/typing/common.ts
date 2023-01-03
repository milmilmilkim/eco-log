export type UserInfo = {
  userId: Number;
  userNickname?: String;
  nickName?: String;
  selfIntroduce?: String;
};

export type UserProfile = {
  alreadyFollow: boolean;
  behaviorCount: number;
  createAt: string;
  myProfile: boolean;
  public: boolean;
  recentlyCustomBehaviorList: string[];
  selfIntroduce: string;
  userId: number;
  userNickname: string;
  userPostTotalCount: number;
  userSummary: Behavior[];
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

export interface FriendItem extends UserInfo {
  userSummary: Behavior[];
  alreadyFollow: boolean;
} 

export type Behavior = {
  behaviorId: Number;
  name: String;
  count?: number;
};

export type Post = {
  comment?: String;
  doingDay: String;
  behaviorList: Number[];
  customizedBehaviors?: String[];
};
