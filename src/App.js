// import external css
import "./assets/dependency/font-awesome-v6/css/all.css";

//import app scss
import "./assets/scss/app.scss";

import store from "../src/redux/store";
import { Provider } from "react-redux";

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
import ContextApiDemo from "./components/context-api";
import ContextDemo from "./components/context_demo";
import UseSateComp from "./components/hooks/part_1/useState";
import HttpReqeustDemo from "./components/http_request/http_req";
import UseStateComp from "./components/hooks/part_2/use_state";
import UseStateComp2 from "./components/hooks/part_2/use_state_2";
import UseEffectComp from "./components/hooks/part_2/use_effect";
import UseEffectOneComp from "./components/hooks/part_3/use_effect_1";
import HooksComp1 from "./components/hooks/part_4";
import FetchWithFilter from "./components/hooks/part_5";
import UseReducerDemoComp from "./components/hooks/use_reducer/part_1";
import UseReducerTwo from "./components/hooks/use_reducer/part_2";

import UseReducerFetchPosts from "./components/hooks/use_reducer/part_3";
import UseContextDemoTwo from "./components/use_context";
import FetchDataWithUseReducer from "./components/hooks/use_reducer/part_5";
import CardCompOne from "./components/styles/part_1/card";
import CustomHookOne from "./components/hooks/custom_hook/part_1";
import UseMemoDemo from "./components/hooks/use_memo";
import UseCallBackDemo from "./components/hooks/use_callback";
import CustomHookPart2 from "./components/hooks/custom_hook_part-2";
import ReduxCompDemoOne from "./components/redux-comp/product/product_1";
import ReduxCompDemoTwo from "./components/redux-comp/product/product_2";
import CounterOneDemo from "./components/redux-comp/counter-comp/counter_1";
import CounterTwoDemo from "./components/redux-comp/counter-comp/counter_2";
import PostReduxComp from "./components/redux-comp/post/post_redux_comp";

function App() {
  return (
    <>
      <Provider store={store}>
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
                <div className="row">
                  <div className="col-lg-6">
                    <div className="py-5">
                      <ReduxCompDemoOne />
                      <ReduxCompDemoTwo />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="py-5">
                      <CounterOneDemo />
                      <CounterTwoDemo />
                      <PostReduxComp />
                    </div>
                  </div>
                </div>
              </Route>
            </Switch>
          </Layout>
        </Router>
      </Provider>
    </>
  );
}

export default App;
