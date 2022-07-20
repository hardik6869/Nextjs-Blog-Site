import { ImFacebook, ImYoutube, ImTwitter } from "react-icons/im";
import Link from "next/link";
import NewsLatter from "./_child/newslatter";
const Footer = () => {
  const bg = {
    background: "url('/images/footer.png') no-repeat",
    backgroundPosition: "bottom left",
  };
  return (
    <footer className="bg-gray-50" style={bg}>
      <NewsLatter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <a>
                <ImFacebook color="blue" />
              </a>
            </Link>

            <Link href={"/"}>
              <a>
                <ImTwitter color="skyblue" />
              </a>
            </Link>

            <Link href={"/"}>
              <a>
                <ImYoutube color="red" />
              </a>
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            Copyright @2022 All rights reserved | This template is made with By
            ___
          </p>
          <p className="text-gray-400 text-center"> Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
