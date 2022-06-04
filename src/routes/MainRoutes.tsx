import { useRoutes } from "react-router-dom";

// pages
import { Albums } from "../pages/Albums";

export function MainRoutes() {
  return useRoutes([
    { path: '/', element: <Albums />}
  ]);
}
