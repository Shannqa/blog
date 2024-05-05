import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
// import Placeholder from "./Placeholder.jsx";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Account from "./Account.jsx";
import Post from "./Post.jsx";
import AddPost from "./AddPost.jsx";
import EditPostPage from "./EditPostPage.jsx";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/posts/add",
          element: <AddPost />,
        },
        {
          path: "/posts/:id",
          element: <Post />,
        },
        {
          path: "/posts/:id/edit",
          element: <EditPostPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
