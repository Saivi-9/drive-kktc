import { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { APP_ROUTES } from "../constants/routes";
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
      { path: APP_ROUTES.HOME, element: <Home /> },
      { path: APP_ROUTES.ROUTES, element: <RoutesPage /> },
      { path: APP_ROUTES.ROUTE_DETAIL, element: <RouteDetail /> },
      { path: APP_ROUTES.ABOUT, element: <About /> },
      { path: APP_ROUTES.EXPLORE, element: <Explore /> },
      { path: APP_ROUTES.CONTACT, element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
    []
  );

  return useRoutes(routes);
}
