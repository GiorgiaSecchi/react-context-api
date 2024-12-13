import { BrowserRouter, Routes, Route } from "react-router-dom";

// contexts
import { PostsContextProvider } from "./contexts/PostContext";

// layout
import DefaultLayout from "./layouts/DefaultLayout";
import AlternativeLayout from "./layouts/AlternativeLayout";

//pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

// pages posts
import PostsPage from "./pages/posts/PostsPage";
import ShowPosts from "./pages/posts/ShowPosts";

function App() {
  return (
    <PostsContextProvider>
      <BrowserRouter>
        <Routes>
          {/* Rotte con layout classico */}
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="*" Component={NotFoundPage} />
          </Route>

          {/* Rotte con layout alternativo  */}
          <Route Component={AlternativeLayout}>
            {/* Risorse Posts */}
            <Route path="/posts" Component={PostsPage} />
            <Route path="/posts/:id" Component={ShowPosts} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsContextProvider>
  );
}

export default App;
