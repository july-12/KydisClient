import React, { Component } from 'react'

import { Pane, Button, Label, TextInput, Textarea, Select } from 'evergreen-ui';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      categoryId: '',
      content: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let { title, content, categoryId } = this.state
    let data = { title, content, categoryId }
    this.props.onSubmit(data)
  }
  render() {
    return (
      <Pane marginTop={80}>
        <Pane>
          <Label
             width={100}
             htmlFor="title"
             marginRight={20}
             textAlign="right"
             display="inline-block"
          >
            Title:
          </Label>
          <TextInput id="title" width={300} name="title" placeholder="Please input title..." />
        </Pane>
        <Pane marginTop={30}>
          <Label
             width={100}
             htmlFor="category"
             marginRight={20}
             textAlign="right"
             display="inline-block"
          >
            Category:
          </Label>
          <Select id="category" width={300} onChange={event => console.log(event.target.value)}>
              <option value="foo" checked>Foo</option>
              <option value="bar">Bar</option>
          </Select>
        </Pane>
        <Pane display="flex" marginTop={30}>
          <Label
             width={100}
             htmlFor="content"
             marginRight={20}
             textAlign="right"
             display="inline-block"
          >
            Content:
          </Label>
          <Textarea
            height={200}
            width={600}
            id="content"
            placeholder="Please input content..."
          />
        </Pane>
        <Pane marginTop={30} marginLeft={110} >
          <Button 
            width={100}
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
