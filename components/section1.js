import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

const Section1 = () => {
  SwiperCore.use([Autoplay]);
  const bg = {
    background: 'url("/images/banner.png") no-repeat',
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center"> Treading</h1>

        <Swiper slidesPerView={1} loop="true" autoplay={{ delay: 2000 }}>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
const Slide = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image src={"/images/img1.jpg"} width={600} height={600} alt="" />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600 ">
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

export default Section1;
