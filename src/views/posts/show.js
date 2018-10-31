import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Pane, Button, Heading, Text, Label, Textarea, Avatar, Badge } from 'evergreen-ui';

const Comment = ({ comment }) => {
  return (
    <Pane display="flex" marginTop={30} minHeight={70}>
      <Pane flex={0} marginRight={10} >
        <Avatar name="R" size={40} />
      </Pane>
      <Pane flex={1} >
        <Text>
          fdasfdasfdsafdsafdsafdsafdsafdsa
          fdsafdsafdsfdsafdsafdsa
          fdsafdsafdsfdsafdsafdsa
          fdasfdsafdsa
          fdsafdafdsafds
          fdasfdsafdsa
          fdsafdafdsafds
          fdasfdsafdsa
        </Text>
      </Pane>
      <Pane color="#425A70">
        Aug'15
      </Pane>
    </Pane>
  )
}
class PostShow extends Component {
  render() {
    let post = { 
      id: 1,
      title: 'How to play baskeyball',
      content: '1. you should like this activity, 2. make friends who like it as well as you like',
      createdAt: '2018-10-31 15:30:00'
    }
    return (
      <Pane>
          <Pane position="relative" marginBottom={20} borderBottom="1px solid #ddd">
            <Heading marginBottom={10} size={700} >{ post.title } </Heading>
            <Pane marginBottom={10}><Badge color="green">book</Badge></Pane>
            <Text> { post.createdAt } </Text>
            <Avatar position="absolute" top={-12} right={0} margin={20} name="R" size={40} />
          </Pane>
          <Pane padding={20} minHeight={400} background="#F9F9FB" >
            <Text> { post.content } </Text>
          </Pane>
          <Pane marginTop={20} >
            <Heading paddingBottom={10} borderBottom="1px solid #ddd" size={700}>Comments (0) </Heading>
            <Pane>
              <Comment />
              <Comment />
              <Comment />
            </Pane>
          </Pane>
          <Pane marginTop={20} marginBottom={20} width="100%" float="right">
            <Label
               width={100}
               marginBottom={10}
               htmlFor="comment"
               marginRight={20}
               textAlign="right"
               display="block"
            >
              Add Comment:
            </Label>
            <Textarea
              id="comment"
              height={200}
              placeholder="Please input comment..."
            />
            <Button 
              width={100}
              marginTop={20}
              float="right"
              display="inline-block" 
              textAlign="center" 
              appearance="primary"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Pane>
      </Pane>
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

