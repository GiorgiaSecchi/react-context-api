import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/PostCard";

export default function ShowPosts() {
  const apiUrl = import.meta.env.VITE_APP_URL;
  const postId = useParams().id;
  //   console.log(postId);

  const [post, setPost] = useState(null);
  useEffect(() => {
    fetchPost(postId);
  }, []);

  const fetchPost = (id) => {
    const url = `${apiUrl}/posts/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Aggiorna lo setPost con i dati ricevuti
        setPost(data);
      })
      .catch((error) => {
        console.error("Post not found", error);
      });
  };

  return (
    <div className="container py-2 d-flex justify-content-center">
      <div className="py-5">
        <div className="text-center mb-5">
          <h1>Dettaglio Post</h1>
        </div>
        {post ? (
          <PostCard
            titolo={post.titolo}
            immagine={post.immagine}
            descrizione={post.contenuto}
            tags={post.tags.map((tag, index) => (
              <span key={index} className="badge text-bg-secondary me-1">
                {tag}
              </span>
            ))}
          />
        ) : (
          <p>Caricamento in corso...</p>
        )}
      </div>
    </div>
  );
}

// (
//     <Cards
//       titolo={post.titolo}
//       immagine={post.immagine}
//       tags={post.tags}
//       contenuto={post.contenuto}
//     />
//   ) : (
//     <p>Caricamento in corso...</p>
//   )
