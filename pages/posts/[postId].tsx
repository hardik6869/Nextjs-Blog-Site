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
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import {
  ArticleAction,
  PostedAction,
  PostsAction,
} from "../../interface/Actions";

const Posts = ({ fallback }): JSX.Element => {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <SWRConfig value={fallback}>
      <Article
        title={""}
        subtitle={""}
        img={""}
        description={""}
        author={{
          name: "",
          img: "",
          designation: "",
        }}
        {...data}
      />
    </SWRConfig>
  );
};

export default Posts;
const Article = (_data: ArticleAction) => {
  const { title, img, subtitle, description, author } = _data;
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

export const getStaticProps: GetStaticProps = async ({
  params,
}: ParsedUrlQuery & PostedAction) => {
  const posts: PostedAction = await getPost(params.postId);
  return {
    props: {
      fallback: {
        "/api/posts": posts,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: PostsAction[] = await getPost();
  const paths = posts.map((value: { id: { toString: () => string } }) => {
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
};
