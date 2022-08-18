const baseURL = `${process.env.BASEURL}/api/posts`;

const getPost = async (id) => {
  const res = await fetch(`${baseURL}`);
  const posts = await res.json();

  if (id) {
    return posts.find((value) => value.id == id);
  }
  return posts;
};

export default getPost;
