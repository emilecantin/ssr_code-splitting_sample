// ./lib/syncComponent.js
import React from 'react';

function syncComponent(chunkName, mod) {
  const Component = mod.default ? mod.default : mod; // es6 module compat

  function SyncComponent(props) {
    if(props.staticContext.splitPoints) {
      props.staticContext.splitPoints.push(chunkName);
    }

    return (<Component {...props} />);
  }

  SyncComponent.propTypes = {
    staticContext: React.PropTypes.object,
  };

  return SyncComponent;
}

export default syncComponent;
