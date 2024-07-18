export type TUser = {
  id: string;
  name: string;
  image: string;
};

export type TContent = {
  id: number;
  commentId?: number;
  name?: string;
  postId?: number;
};

export type TJoinGroup = {
  id: number;
  name: string;
};

export type TMention = {
  id: number;
  commentId: number;
};

export type TPost = {
  id: number;
  postId: number;
};

export type TNotification<T> = {
  id: number;
  user: TUser;
  type: string;
  date: number;
  content: T | null;
};
