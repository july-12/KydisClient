import React, { Component } from 'react'

import { Pane, Label, Textarea, Button } from 'evergreen-ui';

export default class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }
  handleSubmit = () => {
    this.props.onSubmit(this.state.content)
    this.setState({ content: '' })
  }
  render() {

    let { content } = this.state

    return (
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
          value={content}
          onChange={e => this.setState({ content: e.target.value })}
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
    )
  }
}


