import './tailwind-compiled.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col text-white">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Page1 />
          </Route>
          <Route exact path="/2">
            <Page2 />
          </Route>
          <Route exact path="/3">
            <Page3 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
