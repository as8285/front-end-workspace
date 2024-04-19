import { createBrowserRouter } from "react-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    childer: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
    ],
  },
  { path: "/detail/no", element: <Detail /> },
]);
