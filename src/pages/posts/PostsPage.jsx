import { useEffect, useState } from "react";
import { usePostsContext } from "../../contexts/PostsContext";
import PostsList from "../../components/PostsList";

export default function PostsPage() {
  const { posts } = usePostsContext();
  const apiUrl = import.meta.env.VITE_APP_URL;
  // console.log("apiUrl:" + apiUrl);

  return (
    <div className="container py-5">
      <h1>Posts</h1>

      <hr />

      {posts.length > 0 ? (
        <div className="py-4">
          <PostsList />
        </div>
      ) : (
        <h5 className="mt-5">Non ci sono posts!</h5>
      )}
    </div>
  );
}
