import {
  NextApiRequest,
  NextApiResponse,
} from "../../node_modules/next/dist/shared/lib/utils";
import data from "./data";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { Popular } = data;
  if (Popular) return res.status(200).json(Popular);
  return res.status(404).json({ error: "Data Not Found" });
};
export default handler;
