import { createContext, useContext, useState, useEffect } from "react";

// # CREO UN NUOVO CONTESTO
const PostsContext = createContext();

// # EXPORT DEL PROVIDER
export const PostsContextProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_APP_URL;
  const [postsData, setPostsData] = useState({
    posts: [],
  });

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
        const posts = data.map((post) => ({
          id: post.id,
          titolo: post.titolo,
          immagine: post.immagine,
          tags: post.tags,
        }));

        const newPostsData = { ...postsData, posts };
        setPostsData(newPostsData);
        console.log(newPostsData);
      });
  };

  return (
    <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>
  );
};

// # EXPORT DEL CONTEXT PER I CONSUMERS
export const usePostsContext = () => useContext(PostsContext);
