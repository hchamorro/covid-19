import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import MasterProvider from './utils/MasterProvider';

function App() {
  return (
    <Router>
      <MasterProvider>
        <Route exact path={['/']} component={Home}></Route>
      </MasterProvider>
    </Router>
  );
}

export default App;
