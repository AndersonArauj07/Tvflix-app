import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviDetail, { MovieDetail } from './pages/MovieDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/filme/:id",
    element: <MovieDetail />,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)