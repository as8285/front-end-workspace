import { createBrowserRouter } from "react-router-dom";
import { axios } from "axios";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Create from "./Pages/Create";
import Layout from "./Components/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
    ],
  },
  // {
  // path: "/create",
  //element: <Create />,
  //},
]);
export default router;
