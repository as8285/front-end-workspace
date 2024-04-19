import { createBrowserRouter } from "react-router-dom";
import Create from "./pages/Create";
import Delete from "./pages/Delete";

const router = () => {
  createBrowserRouter({
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/create", element: <Create /> },
      { path: "/delete/{no}", element: <Delete /> },
    ],
  });
};
export default router();
