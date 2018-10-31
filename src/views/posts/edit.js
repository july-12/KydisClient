import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './_form.js'

class PostEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    let { id } = this.props.match.params
    this.props.getPost(id).then(() => {
      this.setState({ loading: false })
    })
  }
  handleSubmit = (values) => {
    let { id } = this.props.post
    this.props.updatePost({id, values}).then(() => {
      this.props.history.replace(`/posts/${id}`)
    })
  }
  render() {
    return !this.state.loading && <Form post={this.props.post} onSubmit={this.handleSubmit} />
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
