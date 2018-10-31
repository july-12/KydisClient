import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './_form.js'

class PostEdit extends Component {
  componentDidMount() {
    let { id } = this.props.match.params
    this.props.getPost(id)
  }
  handleSubmit = (values) => {
    this.props.updatePost(values).then(() => {
      this.props.history.replace('/')
    })
  }
  render() {
    return (
      <Form post={this.props.post} onSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post
})

const mapDispatchToProps = ({ posts }) => ({
  getPost: posts.get,
  updatePost: posts.update
})

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)
