import Image from "../../node_modules/next/image";

const Error = (): JSX.Element => {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-orange-600 py-10">
        Something Went Wrong
      </h1>
      <Image src={"/images/not_found.png"} alt="" height={400} width={400} />
    </div>
  );
};

export default Error;
