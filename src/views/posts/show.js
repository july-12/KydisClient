import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostShow extends Component {
  render() {
    return (
      <div>this is show page</div>
    )
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post
})

const mapDispatchToProps = ({ posts }) => ({
  getPost: posts.get
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)

