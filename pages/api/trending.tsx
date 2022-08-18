import {
  NextApiRequest,
  NextApiResponse,
} from "../../node_modules/next/dist/shared/lib/utils";
import data from "./data";

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const { Trending } = data;
  if (Trending) return res.status(200).json(Trending);
  return res.status(404).json({ error: "Data Not Found" });
};
export default handler;
