import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Pane, SelectMenu, Table } from 'evergreen-ui';

class PostIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      categoryFilter: 'all'
    }
  }
  componentDidMount() {
    this.props.getCategories()
    this.props.getPosts()
  }
  render() {
    return (
      <div className="posts">
        { this._renderSearch() }
        { this._renderList() }
      </div>
    )
  }
  findCategoryTitle = (id) => {
    return this.props.categories.find(c => c.id === id).title
  }
  _renderSearch = () => {
    let { categoryFilter } = this.state
    let { categories } = this.props

    let options = categories.map(label => ({ label: label.title, value: label.id.toString() }))
    options.unshift({ label: 'All', value: 'all' })

    let categoryLabel = categoryFilter === 'all' ? 'Filter Category ...' : this.findCategoryTitle(+categoryFilter)

    return (
      <Pane display="flex" height={40} marginBottom={20}>
        <Pane flex={1} alignItems="center" display="flex">
          <SelectMenu
            title="Select Category"
            options={options}
            selected={categoryFilter}
            onSelect={category => this.setState({ categoryFilter: category.value })}
          >
            <Button width={160} appearance="minimal" intent="success" iconBefore="arrow-right">{categoryLabel}</Button>
          </SelectMenu>
        </Pane>
        <Pane>
          <Button appearance="primary" intent="success" iconBefore="add">Add New Post!</Button>
        </Pane>
      </Pane>
    )
  }
  _renderList = () => {
    let { keyword } = this.state
    let { posts } = this.props
    const flexTitle = '50%'

    let filterPosts = posts.filter(post => post.title.includes(keyword))
    return (
      <Table>
        <Table.Head height={50} background="#fff" >
          <Table.SearchHeaderCell
            flexBasis={flexTitle} flexShrink={0} flexGrow={0} 
            onChange={value => this.setState({ keyword: value.trim() })}
            placeholder='Search by Title...'
          />
          <Table.TextHeaderCell>
            category
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            time
          </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {filterPosts.map(post => (
            <Table.Row key={post.id} borderBottom="none" isSelectable marginTop={8}>
              <Table.TextCell flexBasis={flexTitle} flexShrink={0} flexGrow={0}>{post.title}</Table.TextCell>
              <Table.TextCell>{ this.findCategoryTitle(post.categoryId) }</Table.TextCell>
              <Table.TextCell>{post.createAt}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = (state) => ({
    posts: state.posts.list,
    categories: state.categories.list
})

const mapDispatchToProps = (({ posts, categories }) => ({
  getPosts: posts.getAll,
  getCategories: categories.getAll
}))

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)
