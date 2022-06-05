import { useRoutes } from "react-router-dom";

// pages
import { Albums } from "../pages/Albums";
import { AlbumPage } from "../pages/AlbumPage";
import { NotFound } from "../pages/NotFound";
import { PhotoPage } from "../pages/Photo";

export function MainRoutes() {
  return useRoutes([
    { path: '/', element: <Albums />},
    { path: '/albums/:id', element: <AlbumPage />},
    { path: '/photos/:id', element: <PhotoPage /> },

    { path: '*', element: <NotFound />},
  ]);
}
