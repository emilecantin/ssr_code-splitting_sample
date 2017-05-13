// AsyncBundles.js

import asyncComponent from './lib/asyncComponent';

export const Landing = asyncComponent('Landing', () => import('./routes/Landing'));
export const Dashboard = asyncComponent('Landing', () => import('./routes/Dashboard'));
export const NestedRoute = asyncComponent('NestedRoute', () => import('./routes/NestedRoute'));
/* ... other route components */
