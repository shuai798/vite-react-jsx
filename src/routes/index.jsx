import Login from '../pages/login';
import BasicLayout from '../layouts/basicLayout';
import Home from '../pages/home';

const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
];

export default routes;
