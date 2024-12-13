import { useEffect, useState } from "react";
import PostList from "../../components/PostList";
// import { Link } from "react-router-dom";

export default function IndexPosts() {
  const [posts, setPosts] = useState([]);
  const apiUrl = import.meta.env.VITE_APP_URL;
  console.log("apiUrl:" + apiUrl);

  useEffect(() => {
    fetchPosts();
  }, []);

  //   const fetchPosts = () => {
  //     fetch(apiUrl + "/posts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   };

  const fetchPosts = () => {
    fetch(apiUrl + "/posts")
      .then((res) => res.json())
      .then((data) => {
        const postsData = data.map((post) => ({
          id: post.id,
          titolo: post.titolo,
          immagine: post.immagine,
          tags: post.tags,
        }));

        console.log(postsData);
        setPosts(postsData);
      });
  };

  return (
    <div className="container py-5">
      <h1>Posts</h1>

      <hr />

      {posts.length > 0 ? (
        <div className="py-4">
          <PostList posts={posts} apiUrl={apiUrl} />
        </div>
      ) : (
        <h5 className="mt-5">Non ci sono posts!</h5>
      )}
    </div>
  );
}
