import { createBrowserRouter } from "react-router-dom";

// import MainLayout from "../layouts/MainLayout";
import Auth from "../components/Auth";
import Browse from "../components/Browse";
// import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <MainLayout />,
    // errorElement: <NotFound />,
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
