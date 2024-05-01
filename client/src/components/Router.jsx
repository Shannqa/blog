import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
// import Placeholder from "./Placeholder.jsx";

import Home from "./Home.jsx";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
      ]
    }
    ]);
  return <RouterProvider router={router} />
}

export default Router;