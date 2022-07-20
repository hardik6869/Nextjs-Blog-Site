import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";

const Section3 = () => {
  return (
    <section className="container mc-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <Swiper slidesPerView={2}>
        <SwiperSlide> {Post()} </SwiperSlide>
        <SwiperSlide> {Post()} </SwiperSlide>
      </Swiper>
    </section>
  );
};

const Post = () => {
  return (
    <div className="grid">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image src={"/images/img1.jpg"} width={600} height={400} alt="" />
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
            <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600 ">
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
export default Section3;
