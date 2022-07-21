import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import getPost from "../lib/halper";
import fetcher from "../lib/fetcher";

const Section2 = () => {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (data) {
    console.log(data);
  }
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className=" font-bold text-4xl text-center py-12">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
};

const Post = () => {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/img1.jpg"}
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
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              Business,Travel
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600"> - June 3, 2022</a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600 ">
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <p className="text-grey-500 py-3 ">
          Your most unhappy customers are your greatest source of learningYour
          most unhappy customers are your greatest source of learningYour most
          unhappy customers are your greatest source of learning
        </p>
        <h1>
          <Author />
        </h1>
      </div>
    </div>
  );
};

export default Section2;
