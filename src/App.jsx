import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogPostLoader } from "./pages/BlogPosts";
import { action as newsLetterAction } from "./pages/Newsletter";
import NewPostPage, { action as newPostAction } from "./pages/NewPost";
import PostDetailPage, { loader as PostDetailLoader } from "./pages/PostDetail";
import DeferredBlogPostsPage, {
  loader as deferredBlogPostLoader,
} from "./pages/DeferredBlogPosts";
import RootLayout from "./pages/RootLayout";
import WelcomePage from "./pages/Welcome";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        {/* <Route index element={<BlogPostsPage />} loader={blogPostLoader} /> */}
        <Route
          index
          element={<DeferredBlogPostsPage />}
          loader={deferredBlogPostLoader}
        />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={PostDetailLoader}
        />
      </Route>
      <Route
        path="/blog/new"
        element={<NewPostPage />}
        action={newPostAction}
      />
      <Route path="newsletter" action={newsLetterAction} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
