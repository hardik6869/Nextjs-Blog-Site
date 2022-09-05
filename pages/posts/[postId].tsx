import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image";
import Related from "../../components/_child/related";
import getPost from "../../lib/halper";
import { GetStaticPaths, GetStaticProps } from "next";
import { PostedAction, PostsAction } from "../../interface/Actions";

const Posts = (props: JSX.IntrinsicAttributes & PostsAction): JSX.Element => {
  return (
    <>
      <Article {...props} />
    </>
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
export const getStaticProps: GetStaticProps = async (context) => {
  const { postId } = context.params;
  const posts: PostsAction = await getPost(postId as string).catch((e) =>
    console.log(e)
  );
  return {
    props: posts,
    revalidate: 1,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const posts: PostsAction[] = await getPost();
  const paths: PostedAction[] = posts.map(
    (value: { id: { toString: () => string } }) => {
      return {
        params: {
          postId: value.id.toString(),
        },
      };
    }
  );
  return {
    paths,
    fallback: false,
  };
};
