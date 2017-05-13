// routes.js

import {Landing, Dashboard, NestedRoute} from './Bundles';

export const routes = [{
  component: Landing,
  path: '/',
  exact: true
}, {
  component: Dashboard,
  path: '/dashboard',
  routes: [{
    component: NestedRoute,
    path: '/dashboard/nested'
  }],

  /* ... other routes */
}]
