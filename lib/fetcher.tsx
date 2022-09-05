import useSWR from "swr";
const baseURL: string = `${process.env.BASEURL}/`;
const response = (...args: any) =>
  fetch(args)
    .then((res: Response) => res.json())
    .catch((e) => console.log(e));
function fetcher(endpoint?: string) {
  console.log(`${baseURL}${endpoint}`);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(`${baseURL}${endpoint}`, response, {
    refreshInterval: 1000,
  });
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
export default fetcher;
