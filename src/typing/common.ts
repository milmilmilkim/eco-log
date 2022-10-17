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
