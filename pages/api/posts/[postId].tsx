import { PostsAction } from "../../../interface/Actions";
import {
  NextApiRequest,
  NextApiResponse,
} from "../../../node_modules/next/dist/shared/lib/utils";
import data from "../data";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { postId } = req.query;
  const { Posts } = data;
  if (postId) {
    const post = Posts.find((value: PostsAction) => value.id == postId);
    return res.status(200).json(post);
  }
  return res.status(404).json({ error: "Post Not Found" });
};

export default handler;
