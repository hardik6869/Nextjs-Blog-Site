import Image from "../../node_modules/next/image";

const Author = ({
  name,
  img,
  designation,
}: {
  name: string;
  img: string;
  designation: string;
}): "" | JSX.Element => {
  if (!name && !img) return "";
  return (
    <div className="author flex py-5 ">
      <Image
        src={img}
        className="rouded-full "
        alt=""
        width={40}
        height={40}
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <a className="text-md font-bold text-gray-800 hover:text-gray-600">
          {name}
        </a>
        <span className="text-sm text-gray-500">{designation}</span>
      </div>
    </div>
  );
};

export default Author;
