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

export interface AuthorAction {
  name: string;
  img: string;
  designation: string;
}
