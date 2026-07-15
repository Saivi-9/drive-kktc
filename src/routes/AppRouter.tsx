import { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Explore from "../pages/Explore/Explore";
import Home from "../pages/Home/Home";
import RoutesPage from "../pages/Routes/Routes";
import RouteDetail from "../pages/Routes/RouteDetail";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRouter() {
  const routes = useMemo(
    () => [
      { path: "/", element: <Home /> },
      { path: "/routes", element: <RoutesPage /> },
      { path: "/routes/:slug", element: <RouteDetail /> },
      { path: "/about", element: <About /> },
      { path: "/explore", element: <Explore /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
    []
  );

  return useRoutes(routes);
}
