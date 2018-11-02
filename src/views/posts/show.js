import React, { Component } from 'react'
import { connect } from 'react-redux'
import dayjs from 'dayjs';
import { Pane, Heading, Text, Avatar, Badge, toaster } from 'evergreen-ui';

import Comment from './_comment.js';
import CommentForm from './_commentForm.js';

class PostShow extends Component {
  componentDidMount() {
    let { id } = this.props.match.params
    this.props.getPost(id)
  }
  handleCreateComment = (content) => {
    let { id } = this.props.post
    this.props.createComment({ id, content }).then(() => {
       this.props.getPost(id).then(() => {
          toaster.success('comment successfully!', { duration: 2 })
       })
    })
  }

  render() {
    return (
      <Pane>
        { this._renderPost() }
        { this._renderComments() }
        { this._renderCommentForm() }
      </Pane>
    )
  }
  _renderPost = () => {

    let { post } = this.props

    return (
      <React.Fragment>
         <Pane position="relative" marginBottom={20} borderBottom="1px solid #ddd">
           <Heading marginBottom={10} size={700} >{ post.title } </Heading>
           <Pane marginBottom={10}><Badge color="green"> { post.category && post.category.name } </Badge></Pane>
           <Text> { dayjs(post.createdAt).format('MMM`DD YYYY') } </Text>
           <Avatar position="absolute" top={-12} right={0} margin={20} name="R" size={40} />
         </Pane>
         <Pane padding={20} minHeight={400} background="#F9F9FB" borderRadius={7}>
           <Text> { post.content } </Text>
         </Pane>
      </React.Fragment>
    )
  }
  _renderComments = () => {

    let { comments } = this.props.post

    return (
      <Pane marginTop={20} >
        <Heading paddingBottom={10} borderBottom="1px solid #ddd" size={700}>Comments ({ comments && comments.length }) </Heading>
        {
          comments && comments.map(comment => (
            <Comment key={comment.id} data={comment} />
          ))
        }
      </Pane>
    )
  }
  _renderCommentForm = () => {
    return <CommentForm onSubmit={this.handleCreateComment} />
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post
})

const mapDispatchToProps = ({ posts }) => ({
  getPost: posts.get,
  createComment: posts.createComment
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)

