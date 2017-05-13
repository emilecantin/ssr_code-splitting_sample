import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import * as Bundles from './Bundles';
import {routes} from './routes.js';

const splitPoints = window.splitPoints || [];
Promise.all(splitPoints.map(chunk => Bundles[chunk].loadComponent()))
.then(() => {
  const mountNode = document.getElementById('app');
  ReactDOM.render(
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>,
    mountNode
  );
});
