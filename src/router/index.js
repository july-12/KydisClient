import React from 'react'
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import { HashRouter, Route, Switch } from "react-router-dom";

import models from '../models'

import PostIndex from '../views/posts';

const Layout = (props) => {
  return <div className="container">{ props.children } </div>
}

const About = () => {
  return <div> this is about page </div>
}

let store = init({
  models
})

const RouterIndex = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={PostIndex} />
            <Route path="/about" component={About} />
          </Switch>
        </Layout>
      </HashRouter>
    </Provider>
  )
}

export default RouterIndex
