import React from 'react'

import Header from './header.js'

import './index.scss'

const Layout = (props) => {
  return (
    <div className="container">
      <Header />
      <main>
        <div style={{paddingTop: 20}}>{ props.children }</div>
      </main>
    </div>
  )
}

export default Layout
