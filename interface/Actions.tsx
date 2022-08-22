export interface PostsAction {
  find(arg0: (value: { id: string }) => boolean);
  id: number | string | string[];
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

export interface ArticleAction {
  title: string;
  subtitle: string;
  img: string;
  description: string;
  author: {
    name: string;
    img: string;
    designation: string;
  };
}

export interface PostedAction {
  params: {
    postId: string;
  };
}
