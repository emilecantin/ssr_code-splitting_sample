// AsyncBundles.js

import asyncComponent from './lib/asyncComponent';

export const Landing = asyncComponent('Landing', () => import('./routes/landing'));
export const Dashboard = asyncComponent('Landing', () => import('./routes/dashboard'));
/* ... other route components */
