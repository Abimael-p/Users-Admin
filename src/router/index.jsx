import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import DetailsUser from "../components/pages/DetailsUser/DetailsUser";
import App from "../App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/:id",
        element: <DetailsUser />,
      },
    ],
  },
  {
    path: "*",
    element: <p>This path does not exist 404 error</p>
  }
]);
