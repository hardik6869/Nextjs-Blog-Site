import Image from "next/image";
import Link from "next/link";

const Author = () => {
  return (
    <div className="author flex py-5 ">
      <Image
        src="/images/author/author1.png"
        className="rouded-full "
        alt=""
        width={40}
        height={40}
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <a className="text-md font-bold text-gray-800 hover:text-gray-600">
          Jhon
        </a>
        <span className="text-sm text-gray-500">CEO & Founder</span>
      </div>
    </div>
  );
};

export default Author;
