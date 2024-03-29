import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from '../Nav/Nav'
import Home from '../Home/Home';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

function App() {
  let routes = (
    <Switch>
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={ContactUs} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Nav></Nav>
      {routes}
      <Footer />
    </div>
  );
}

export default App;
