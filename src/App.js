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

import Home from "./components/pages/home";
import About from "./components/pages/about";
import Service from "./components/pages/service";
import Blog from "./components/pages/blog";
import Contact from "./components/pages/contact";

import Login from "./components/login";

import Post from "./components/post";
import List from "./components/list";

import UserForm from "./components/user-form/index";

import ParentComp from "./components/life-cycle/mounting/parentComp";

import LifeCycle from "./components/life-cycle";
import LifeCycleSmart from "./components/life-cycle/mounting/life-cycle-smar";

import PostGrid from "./components/post-grid";
import PureCompDemo from "./components/pure-component";
import ErrorHanding from "./components/error-handling";
import Hoc from "./components/hoc";
import RenderProps from "./components/render-props";

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
            <Route path="/register">
              <UserForm />
            </Route>
            <Route exact path="/">
              <Hoc />
              <RenderProps />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
