import Image from "../node_modules/next/image";
import Link from "../node_modules/next/link";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import { PostsAction } from "../interface/Actions";
import { Key } from "react";

const Section2 = (): JSX.Element => {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className=" font-bold text-4xl text-center py-12">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((value: PostsAction, index: Key) => (
          <Post data={value} key={index} />
        ))}
      </div>
    </section>
  );
};

const Post = ({ data }: { data: PostsAction }) => {
  const { id, title, category, img, published, author, subtitle } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img}
              className="rounded"
              width={500}
              height={350}
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-orange-600 hover:text-orange-800">{category}</a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600"> {published}</a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600 ">
              {title}
            </a>
          </Link>
        </div>
        <p className="text-grey-500 py-3 ">{subtitle}</p>
        <h1>{author ? <Author {...author} /> : ""}</h1>
      </div>
    </div>
  );
};

export default Section2;
