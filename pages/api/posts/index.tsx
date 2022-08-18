import {
  NextApiRequest,
  NextApiResponse,
} from "../../../node_modules/next/dist/shared/lib/utils";
import data from "../data";

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const { Posts } = data;
  if (Posts) return res.status(200).json(Posts);
  return res.status(404).json({ error: "Data Not Found" });
};

export default handler;
