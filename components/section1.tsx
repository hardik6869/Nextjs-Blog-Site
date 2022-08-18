import Image from "../node_modules/next/image";
import Link from "../node_modules/next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "../node_modules/swiper/react";
import SwiperCore, { Autoplay } from "../node_modules/swiper";
import "swiper/css";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import fetcher from "../lib/fetcher";
import { PostsAction } from "../interface/Actions";
import { Key } from "react";

const Section1 = (): JSX.Element => {
  const { data, isLoading, isError } = fetcher("api/trending");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  SwiperCore.use([Autoplay]);
  const bg = {
    background: 'url("/images/banner.png") no-repeat',
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center"> Trending</h1>
        <Swiper
          breakpoints={{ 640: { slidesPerView: 1, spaceBetween: 20 } }}
          loop="true"
          autoplay={{ delay: 2000 }}
        >
          {data.map((value: PostsAction, index: Key) => (
            <SwiperSlide key={index}>
              <Slide data={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
const Slide = ({ data }: { data: PostsAction }): JSX.Element => {
  const { id, title, category, img, published, description, author } = data;
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <a>
            <Image src={img} width={600} height={600} alt="" />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600 ">
              {title}
            </a>
          </Link>
        </div>
        <p className="text-grey-500 py-3 ">{description}</p>
        <h1>{author ? <Author {...author} /> : ""}</h1>
      </div>
    </div>
  );
};

export default Section1;
