// Bundles.js

import syncComponent from './lib/syncComponent';

export const Landing = syncComponent('Landing', require('./routes/landing'));
export const Dashboard = syncComponent('Dashboard', require('./routes/dashboard'));
/* ... other route components */
