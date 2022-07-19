import { ImFacebook, ImYoutube, ImTwitter } from "react-icons/im";

const Header = () => {
  return (
    <header className="bg-grey-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="search.." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <a className="font-bold uppercase text3-xl">Design</a>
        </div>
        <div className="w-96 order-3 flex justify-center ">
          <div className="flex gap-6">
            <a href="">
              <ImFacebook color="blue" />
            </a>
            <a href="">
              <ImTwitter color="skyblue" />
            </a>
            <a href="">
              <ImYoutube color="red" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
