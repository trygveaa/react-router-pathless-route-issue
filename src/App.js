import React from 'react';
import { HashRouter, Link, withRouter } from 'react-router-dom';
import RouterModal from './RouterModal';

const ComponentWithRouter = withRouter(
  () => <div>test</div>
);

const App = props => (
  <HashRouter>
    <div>
      <Link to="/test">Open modal</Link>
      <RouterModal path="/test">
        <ComponentWithRouter />
      </RouterModal>
    </div>
  </HashRouter>
);

export default App;
