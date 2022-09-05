import { PostsAction } from "../interface/Actions";

const baseURL = `${process.env.BASEURL}/api/posts`;
const getPost = async (id?: string) => {
  const res: Response = await fetch(`${baseURL}`);
  const posts: PostsAction = await res.json();
  if (id) {
    return posts.find((value: { id: string }) => value.id == id);
  }
  return posts;
};

export default getPost;
