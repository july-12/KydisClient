import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";

const Layout = (props) => {
  return <div className="container">{ props.children } </div>
}

const PostIndex = () => {
  return <div> this is posts page </div>
}

const About = () => {
  return <div> this is about page </div>
}

const RouterIndex = () => {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={PostIndex} />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    </HashRouter>
  )
}

export default RouterIndex
