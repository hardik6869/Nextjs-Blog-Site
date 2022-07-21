import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image";
const Page = () => {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Your most unhappy customers are your greatest source of learning
          </h1>

          <p className="rext-gray-500 text-xl text-center">
            Your most unhappy customers are your greatest source of learning
          </p>
          <Image src="/images/img1.jpg" alt="" width={900} height={600} />
        </div>
        <div className="content text-gray-600 text-lg flex flex-col gap-4">
          <p className="rext-gray-500 text-xl text-center">
            Your most unhappy customers are your greatest source of learning
            Your most unhappy customers are your greatest source of learning
            Your most unhappy customers are your greatest source of learning
          </p>
          <p className="rext-gray-500 text-xl text-center">
            Your most unhappy customers are your greatest source of learning
            Your most unhappy customers are your greatest source of learning
          </p>
          <p className="rext-gray-500 text-xl text-center">
            Your most unhappy customers are your greatest source of learning
            Your most unhappy customers are your greatest source of learning
            Your most unhappy customers are your greatest source of learning
          </p>
          <p className="rext-gray-500 text-xl text-center">
            Your most unhappy customers are your greatest source of learning
            Your most unhappy customers are your greatest source of learning
            Your most unhappy customers are your greatest source of learningYour
            most unhappy customers are your greatest source of learning
          </p>
        </div>
      </section>
    </Format>
  );
};

export default Page;
