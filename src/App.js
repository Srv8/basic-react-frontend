import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Integration from './components/Integration';
import Price from './components/Price';
import Blog from './components/Blog';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/integration" component={Integration}/>
        <Route exact path="/price" component={Price}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/about" component={About}/>
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </div>
  )
}

export default App;