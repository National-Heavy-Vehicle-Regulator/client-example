import {lazy} from 'react';
import HomeIcon from '@material-ui/icons/Home';

export default {
  path: '/*',
  component: lazy(() => import(/* webpackChunkName: "Home" */ './Home')),
  visibleInMenu: true,
  menuTitle: 'Dashboard',
  menuIcon: HomeIcon,
  roles: ['$authenticated'],
};
