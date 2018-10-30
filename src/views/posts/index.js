import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'evergreen-ui';

class PostIndex extends Component {
  componentDidMount() {
    this.props.getAll()
  }
  render() {
    return (
      <div><Button appearance="primary" intent="success">this is evergreen button</Button>this is post page.</div>
    )
  }
}

const mapStateToProps = (state) => ({
    list: state.posts.list
})

const mapDispatchToProps = (({ posts }) => ({
  getAll: posts.getAll
}))

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)
