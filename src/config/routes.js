import About from '../pages/About';
import Home from '../pages/Home';
import NotFound404 from '../pages/NotFound404';

export const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    label: 'About',
    component: About,
  },
  {
    component: NotFound404,
  },
];
