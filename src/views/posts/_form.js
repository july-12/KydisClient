import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Pane, toaster, Button, Label, TextInput, Textarea, Select } from 'evergreen-ui';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      category_id: '',
      content: ''
    }
  }
  componentDidMount() {
    this.props.getCategories().then(() => {
      if(this.props.post) {
        let { title, content, category_id } = this.props.post
        return this.setState({ title, content, category_id })
      }
      this.setState({ category_id: this.props.categories[0].id })
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let { title, content, category_id } = this.state
    let data = { title, content, category_id }
    if(!title) {
      return toaster.danger('Title is required!', { duration: 2 })
    }
    return this.props.onSubmit(data)
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
          <TextInput 
            id="title" 
            width={300} 
            name="title" 
            placeholder="Please input title..."  
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
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
          <Select id="category" width={300} value={this.state.category_id} onChange={e => this.setState({ category_id: e.target.value}) }>
            {
              this.props.categories.map(category => (
                <option key={category.id} value={category.id} >{ category.name }</option>
              ))
            }
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
            flex={1}
            height={200}
            width={600}
            id="content"
            placeholder="Please input content..."
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
          />
        </Pane>
        <Pane marginTop={30} marginLeft={120} >
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

const mapStateToProps = (state) => ({
    categories: state.categories.list
})

const mapDispatchToProps = (({ categories }) => ({
  getCategories: categories.getAll
}))

export default connect(mapStateToProps, mapDispatchToProps)(Form)
