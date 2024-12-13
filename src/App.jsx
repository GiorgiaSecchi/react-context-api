import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import DefaultLayout from "./layouts/DefaultLayout";
import AlternativeLayout from "./layouts/AlternativeLayout";

//pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

// pages posts
import IndexPosts from "./pages/posts/indexPosts";
import ShowPosts from "./pages/posts/showPosts";

function App() {
  return (
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
          <Route path="/posts" Component={IndexPosts} />
          <Route path="/posts/:id" Component={ShowPosts} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
