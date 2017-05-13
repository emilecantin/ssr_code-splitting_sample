// Bundles.js

import syncComponent from './lib/syncComponent';

export const Landing = syncComponent('Landing', require('./routes/Landing'));
export const Dashboard = syncComponent('Dashboard', require('./routes/Dashboard'));
export const NestedRoute = syncComponent('NestedRoute', require('./routes/NestedRoute'));
/* ... other route components */
