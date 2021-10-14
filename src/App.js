// import external css
import "./assets/dependency/font-awesome-v6/css/all.css";

//import app scss
import "./assets/scss/app.scss";

// internal imports
import Header from "./components/header";
import Footer from "./components/footer";

import Clock from "./components/clock";
import Counter from "./components/counter";

import Layout from "./components/layout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/pages/home';
import About from "./components/pages/about";
import Service from "./components/pages/service";
import Blog from './components/pages/blog';
import Contact from './components/pages/contact';

// app component
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
