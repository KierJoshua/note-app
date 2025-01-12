import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import NRoot from "./NRoot";
import All from "./assets/components/All";
import Home from "./assets/components/Home";
import Personal from "./assets/components/Personal";
import Business from "./assets/components/Business";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NRoot />,
      children: [
        { path: "/", element: <All /> },
        { path: "/all", element: <All /> },
        { path: "/home", element: <Home /> },
        { path: "/personal", element: <Personal /> },
        { path: "/business", element: <Business /> },
      ],
    },
  ]);

  const App = () => {
    return (
      <RouterProvider router={router} />
    )
  }

  export default App