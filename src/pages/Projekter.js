import { useState, useEffect } from "react";
import PostItem from "../components/PostItem";

export default function Projekter() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://react-pf.gerdacreates.dk//wp-json/wp/v2/posts?_embed"
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }
    getData();
  }, []);
  return (
    <section className="page">
      <h1>Projekter</h1>
      <section className="grid-container">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </section>
    </section>
  );
}
