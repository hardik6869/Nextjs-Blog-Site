import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";
import Author from "./author";
import Spinner from "./spinner";
import Error from "./error";
import fetcher from "../../lib/fetcher";
import { Key } from "react";
import { PostsAction } from "../../interface/Actions";

const Related = (): JSX.Element => {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <section className=" pt-20">
      <h1 className="font-bold text-4xl text-left">Related</h1>
      <div className="flex flex-col gap-10">
        {data.map((value: PostsAction, index: Key) => (
          <Post key={index} data={value} />
        ))}
      </div>
    </section>
  );
};

const Post = ({ data }: { data: PostsAction }): JSX.Element => {
  const { id, title, category, img, published, author } = data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img}
              className="rounded"
              width={300}
              height={200}
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-orange-600 hover:text-orange-800">{category}</a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">{published}</a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600 ">
              {title}
            </a>
          </Link>
        </div>
        <h1>{author ? <Author {...author} /> : ""}</h1>
      </div>
    </div>
  );
};

export default Related;
