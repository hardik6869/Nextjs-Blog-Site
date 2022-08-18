export interface TrendingAction {
  id: Number;
  title: String;
  subtitle: String;
  category: String;
  img: String;
  description: String;
  published: String;
  author: {
    name: String;
    img: String;
    designation: String;
  };
}

export interface PopularAction {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  img: string;
  description: string;
  published: string;
  author: {
    name: string;
    img: string;
    designation: string;
  };
}

export interface PostsAction {
  id: number | string | String[];
  title: string;
  subtitle: string;
  category: string;
  img: string;
  description: string;
  published: string;
  author: {
    name: string;
    img: string;
    designation: string;
  };
}
