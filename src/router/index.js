import React from 'react'
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import { HashRouter, Route, Switch } from "react-router-dom";

import models from '../models'

import '../style/index.scss'

import Layout from '../views/layouts';
import About from '../views/about';
import PostIndex from '../views/posts';

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
