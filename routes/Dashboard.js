import React from 'react';
import {Link} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'


function Dashboard(props) {
  const {route} = props;
  return (
    <div>
      <h1>This is the dashboard</h1>
      <Link to="/dashboard/nested">Open nested page</Link>
      {renderRoutes(route.routes)}
    </div>
  );
}
Dashboard.propsTypes = {
  route: React.PropTypes.object,
};

export default Dashboard;

