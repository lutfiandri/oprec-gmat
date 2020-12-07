import './tailwind-compiled.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Page1 from './views/Page1';
import Page2 from './views/Page2';

const App = () => {
  const [altitude, setAltitude] = useState(0);
  return (
    <div className="relative min-h-screen bg-gray-700 flex flex-col text-white">
      <Router basename="/">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Page1 altitude={altitude} />
          </Route>
          <Route exact path="/2">
            <Page2 altitude={altitude} setAltitude={setAltitude} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
