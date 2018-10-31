import React from 'react'
import Form from './_form.js'
import { connect } from 'react-redux'

const PostNew = (props) => {
  let handleSubmit = (values) => {
    props.createPost(values).then(() => {
      props.history.replace('/')
    })
  }
  return (
    <Form onSubmit={handleSubmit} />
  )
}

const mapDispatchToProps = ({ posts }) => ({
  createPost: posts.create
})

export default connect(null, mapDispatchToProps)(PostNew)
