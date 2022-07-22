import Image from "next/image";
import Link from "next/link";
import Author from "./author";
import Spinner from "./spinner";
import Error from "./error";
import fetcher from "../../lib/fetcher";

const Related = () => {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <section className=" pt-20">
      <h1 className="font-bold text-4xl text-left">Related</h1>
      <div className="flex flex-col gap-10">
        {data.map((value, index) => (
          <Post key={index} data={value} />
        ))}
      </div>
    </section>
  );
};

const Post = ({ data }) => {
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
