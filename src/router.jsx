import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Content from "./components/Content";
import App from "./App";
import Usermanager from "./components/Usermanager";
import NotFoundPage from "./components/errors/NotFoundPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AnimeTracker from "./components/AnimeTracker";
import AboutMe from "./components/AboutMe";
import BlackJack from "./components/BlackJack";
import Connections from "./components/Connections";
import { Profil } from "./components/Profil";
import Test from "./components/Test";
import Chat from "./components/Chat";

export const router = createBrowserRouter([
  {
    path: process.env.PUBLIC_URL + "/",
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
            element: <Navigate to={process.env.PUBLIC_URL + "/home"} />,
          },
          {
            path: "usermanager",
            element: <Usermanager />,
          },
          {
            path: "animetracker",
            element: <AnimeTracker />,
          },
          {
            path: "aboutme",
            element: <AboutMe />,
          },
          {
            path: "blackjack",
            element: <BlackJack />,
          },
          {
            path: "testing",
            element: <Test />,
          },
          {
            path: "connections",
            element: <Connections />,
          },
          {
            path: "profil",
            element: <Profil />,
          },
          {
            path: "chat",
            element: <Chat />,
          },
        ],
      },
    ],
  },
  {
    path: process.env.PUBLIC_URL + "/login",
    element: <Login />,
  },
  {
    path: process.env.PUBLIC_URL + "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
