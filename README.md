# Sample application: Server-Side Rendering and Code Splitting with React-Router 4

The purpose of this repository is to showcase a working solution for a server-render, code-split app with React-Router 4. This solution is described in detail on my personal blog [here](https://blog.emilecantin.com/web/react/javascript/2017/05/16/ssr-react-router-4-webpack-code-split.html).

Highlights are:

- We use a simple HOC on the server, which allows us to know which chunks were involved in the render
- We use a different HOC on the client which renders asynchronously
- We switch between the two implementations using Webpack's `NormalModuleReplacementPlugin`
- When rendering on the server, we send the list of necessary chunks down to the client
- We load these chunks on the client before doing the initial render

## Running the code

Should be as simple as cloning the repo and then running `npm install && npm start`.

## License

MIT

