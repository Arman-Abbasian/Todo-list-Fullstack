import clientPromise from "../../lib/mongodb";


  async function getPosts(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const posts = await db.collection("posts").find({}).limit(20).toArray();
    res.json(posts);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
export default getPosts