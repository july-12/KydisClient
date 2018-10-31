import React from 'react'
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import { HashRouter, Route, Switch } from "react-router-dom";

import models from '../models'

import '../style/index.scss'

import Layout from '../views/layouts';
import About from '../views/about';
import PostIndex from '../views/posts';
import PostNew from '../views/posts/new.js';
import PostEdit from '../views/posts/edit.js';
import PostShow from '../views/posts/show.js';

let store = init({
  models
})

const RouterIndex = () => {
  return (
    <Provider store={store}>
      <HashRouter >
        <Layout>
          <Switch>
            <Route exact path="/" component={PostIndex} />
            <Route exact path="/posts" component={PostIndex} />
            <Route exact path="/posts/new" component={PostNew} />
            <Route exact path="/posts/:id" component={PostShow} />
            <Route exact path="/posts/:id/edit" component={PostEdit} />
            <Route path="/about" component={About} />
          </Switch>
        </Layout>
      </HashRouter>
    </Provider>
  )
}

export default RouterIndex
