import { createBrowserRouter } from "react-router-dom";

import Auth from "../pages/Auth"
import Browse from "../pages/Browse";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Auth />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
    ],
  },
]);

export default router;
