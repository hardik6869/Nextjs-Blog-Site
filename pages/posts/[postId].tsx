import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image";
import Related from "../../components/_child/related";
import getPost from "../../lib/halper";
import fetcher from "../../lib/fetcher";
import Spinner from "../../components/_child/spinner";
import Error from "../../components/_child/error";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

const Posts = ({ fallback }): JSX.Element => {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <SWRConfig value={fallback}>
      <Article {...data} />
    </SWRConfig>
  );
};

export default Posts;
const Article = ({ title, img, subtitle, description, author }) => {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <h1>{author ? <Author {...author} /> : ""}</h1>
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">{title}</h1>

          <p className="rext-gray-500 text-xl text-center">{subtitle}</p>
          <Image src={img} alt="" width={900} height={600} />
        </div>
        <div className="content text-gray-600 text-lg flex flex-col gap-4">
          <p className="rext-gray-500 text-xl text-center">{description}</p>
        </div>
        <Related></Related>
      </section>
    </Format>
  );
};

export async function getStaticProps({ params }) {
  const posts = await getPost(params.postId);
  return {
    props: {
      fallback: {
        "/api/posts": posts,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPost();
  const paths = posts.map((value) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
