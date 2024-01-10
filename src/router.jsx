import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Content from "./components/Content";
import App from "./App";
import Usermanager from "./components/Usermanager";
import NotFoundPage from "./components/errors/NotFoundPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AnimeTracker from "./components/AnimeTracker";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Content />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "",
            element: <Navigate to="/home" />,
          },
          {
            path: "usermanager",
            element: <Usermanager />,
          },
          {
            path: "/animetracker",
            element: <AnimeTracker />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
