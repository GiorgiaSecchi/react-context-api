import React from "react";
import { Link } from "react-router-dom";

export default function PostsList({ posts, apiUrl }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr className="table-light">
          <th scope="col">Immagine</th>
          <th scope="col">Titolo</th>
          <th scope="col">Tags</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>
              <img src={apiUrl + post.immagine} alt="IMG" width="100" />
            </td>
            <td>{post.titolo}</td>
            <td>
              {post.tags.map((tag, index) => (
                <span key={index} className="badge text-bg-secondary me-1">
                  {tag}
                </span>
              ))}
            </td>

            <td>
              {/* show post button */}
              <Link
                to={`/posts/${post.id}`}
                type="button"
                className="btn btn-primary btn-sm"
              >
                Mostra
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

//   <table className="table table-hover">
//             <thead>
//               <tr className="table-light">
//                 <th scope="col">Immagine</th>
//                 <th scope="col">Titolo</th>
//                 <th scope="col">Tags</th>
//                 <th scope="col"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {posts.map((post) => (
//                 <tr key={post.id}>
//                   <td>
//                     <img src={apiUrl + post.immagine} alt="IMG" width="100" />
//                   </td>
//                   <td>{post.titolo}</td>
//                   <td>
//                     {post.tags.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="badge text-bg-secondary me-1"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </td>

//                   <td>
//                     {/* show post button */}
//                     <Link
//                       to={`/posts/${post.id}`}
//                       type="button"
//                       className="btn btn-primary btn-sm"
//                     >
//                       Mostra
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
