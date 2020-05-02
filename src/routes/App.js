import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Work from '../pages/Work';
import Contact from '../pages/Contact';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;