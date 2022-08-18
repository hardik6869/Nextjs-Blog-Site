const baseURL = `${process.env.BASEURL}/api/posts`;

const getPost = async (id: String) => {
  const res = await fetch(`${baseURL}`);
  const posts = await res.json();

  if (id) {
    return posts.find((value: { id: String }) => value.id == id);
  }
  return posts;
};

export default getPost;
