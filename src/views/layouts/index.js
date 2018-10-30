import React from 'react'
import { connect } from 'react-redux'

import Header from './header.js'

import './index.scss'

const Layout = (props) => {
  return (
    <div className="container">
      <Header />
      <main>
        { props.children }
      </main>
    </div>
  )
}

export default connect()(Layout)
