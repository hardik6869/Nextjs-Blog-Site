import useSWR from "swr";
import { PostsAction } from "../interface/Actions";

const baseURL: string = `${process.env.BASEURL}/`;
const response = (args: RequestInfo | URL) =>
  fetch(args).then((res) => res.json());

export default function fetcher(endpoint: string) {
  if (endpoint) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error } = useSWR(`${baseURL}${endpoint}`, response);

    return {
      data,
      isLoading: !error && !data,
      isError: error,
    };
  }
}
