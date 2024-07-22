export type TAUTHOR = {
  id: number;
  name: string;
  image: string;
};

export type TArticle = {
  id: number;
  name: string;
  author: TAUTHOR;
  content: string;
  date: number;
  coverPhoto: string;
};
