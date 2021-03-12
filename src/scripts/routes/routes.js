import RestoList from '../views/pages/resto-list';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';

const routes = {
  '': RestoList, // Default Pages
  '/resto-list': RestoList,
  '/detail/:id': Detail,
  '/favorites': Favorites,
};

export default routes;
