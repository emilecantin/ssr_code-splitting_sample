import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import {renderRoutes} from 'react-router-config';

import {routes} from './routes.js';

export function render(req, res) {
  const context = {
    splitPoints: [],
  };
  const markup = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      {renderRoutes(routes)}
    </StaticRouter>
  )
  // now context.splitPoints contains the names of the chunks we used during rendering

  const html = `
    <!doctype html>
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <div id="app">${markup}</div>
        <script>
          window.splitPoints=${JSON.stringify(context.splitPoints)}; // Send it down to the client
        </script>
        <script src="/client.js"></script>
      </body>
    </html>
  `;
  res.send(html);
}

