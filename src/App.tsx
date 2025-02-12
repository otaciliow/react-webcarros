import { createBrowserRouter } from "react-router-dom";
import { Private } from './routes/private';

import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Dashboard } from './pages/dashboard';
import { New } from './pages/dashboard/new';
import { CarDetail } from './pages/car';

import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/car/:id',
        element: <CarDetail/>,
      },
      {
        path: '/dashboard',
        element: <Private><Dashboard/></Private>,
      },
      {
        path: '/dashboard/new',
        element: <Private><New/></Private>,
      },
    ]
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>,
  },
])

export { router };
