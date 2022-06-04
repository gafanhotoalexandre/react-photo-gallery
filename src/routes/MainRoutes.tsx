import { useRoutes } from "react-router-dom";

// pages
import { Albums } from "../pages/Albums";
import { AlbumPage } from "../pages/AlbumPage";

export function MainRoutes() {
  return useRoutes([
    { path: '/', element: <Albums />},
    { path: '/albums/:id', element: <AlbumPage />}
  ]);
}
