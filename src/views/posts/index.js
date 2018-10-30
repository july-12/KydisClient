import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostIndex extends Component {
  componentDidMount() {
    this.props.getAll()
  }
  render() {
    console.log(this.props.list);
    return (
      <div>this is post page.</div>
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
