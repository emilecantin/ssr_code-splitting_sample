// routes.js

import {Landing, Dashboard} from './Bundles';

export const routes = [{
  component: Landing,
  path: '/',
  exact: true
}, {
  component: Dashboard,
  path: '/dashboard'

  /* ... other routes */
}]