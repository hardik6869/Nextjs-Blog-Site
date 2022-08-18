import Header from "../components/header";
import Footer from "../components/footer";
import Head from "../node_modules/next/head";

const Format = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title> Blog </title>
      </Head>
      <Header></Header>
      <main> {children} </main>
      <Footer></Footer>
    </>
  );
};

export default Format;
