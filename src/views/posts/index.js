import React, { Component } from 'react'
import { connect } from 'react-redux'
import dayjs from 'dayjs';
import { Button, toaster, Icon, Pane, SelectMenu, Table, Popover, Menu, Dialog } from 'evergreen-ui'

class PostIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      categoryFilter: 'all',
      showConfirm: false,
      deletePostId: ''
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
        { this._renderRemoveConfirmDialog() }
      </div>
    )
  }
  handleDeletePost = () => {
    let { deletePostId } = this.state
    if(deletePostId) {
      this.props.deletePost(deletePostId).then(() => {
          this.props.getPosts()
          this.setState({ showConfirm: false, deletePostId: '' })
          toaster.success('Delete post successfully!', { duration: 2 })
      })
    }
  }
  findCategoryTitle = (id) => {
    let category = this.props.categories.find(c => c.id === id) || {}
    return category.name
  }
  _renderSearch = () => {
    let { categoryFilter } = this.state
    let { categories } = this.props

    let options = categories.map(label => ({ label: label.name, value: label.id.toString() }))
    options.unshift({ label: 'All', value: 'all' })

    let categoryLabel = categoryFilter === 'all' ? 'Filter Category ...' : this.findCategoryTitle(+categoryFilter)

    let redirectToCreate = () => {
      this.props.history.replace('/posts/new')
    }

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
          <Button appearance="primary" intent="success" iconBefore="add" onClick={redirectToCreate}>Add New Post!</Button>
        </Pane>
      </Pane>
    )
  }
  _renderList = () => {
    let { keyword, categoryFilter } = this.state
    let { posts } = this.props
    const flexTitle = '50%'

    let filterPosts = posts.filter(post => {
      return post.title.includes(keyword) && (categoryFilter === 'all' || post.category_id === +categoryFilter)
    })
    return (
      <Table>
        <Table.Head height={50} background="#fff" >
          <Table.SearchHeaderCell
            flexBasis={flexTitle} flexShrink={0} flexGrow={0}
            onChange={value => this.setState({ keyword: value.trim() })}
            placeholder='Search by Title...'
          />
          <Table.TextHeaderCell>
            Category
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            Create Time
          </Table.TextHeaderCell>
          <Table.TextHeaderCell />
        </Table.Head>
        <Table.Body height={240}>
          {filterPosts.map(post => (
            <Table.Row key={post.id} borderBottom="none" isSelectable marginTop={8} >
              <Table.TextCell
                onClick={() => this.props.history.replace(`/posts/${post.id}`)}
                flexBasis={flexTitle} flexShrink={0} flexGrow={0}>{post.title}</Table.TextCell>
              <Table.TextCell>{ this.findCategoryTitle(post.category_id) }</Table.TextCell>
              <Table.TextCell>{ dayjs(post.createAt).format('MMM`DD')}</Table.TextCell>
              <Table.TextCell>
                {this._renderOperation(post)}
              </Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
  _renderOperation = (post) => {
    return (
      <Popover
        position={"bottom-right"}
        content={
          <Menu>
            <Menu.Group title="Actions">
              <Menu.Item icon="people">Share...</Menu.Item>
              <Menu.Item icon="edit" secondaryText="⌘R" onSelect={() => this.props.history.replace(`/posts/${post.id}/edit`)}>
                Edit
              </Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group title="destructive">
              <Menu.Item icon="trash" intent="danger" onSelect={() => this.setState({ showConfirm: true, deletePostId: post.id })} >
                Delete
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Icon icon="more" size={10} />
      </Popover>
    )
  }
  _renderRemoveConfirmDialog = () => {
    return (
      <Dialog
        title="Delete Confirm"
        isShown={this.state.showConfirm}
        intent="danger"
        onCloseComplete={() => this.setState({ showConfirm: false, deletePostId: '' })}
        onConfirm={this.handleDeletePost}
        confirmLabel="Delete"
      >
        Are you sure to delete this post ?
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => ({
    posts: state.posts.list,
    categories: state.categories.list
})

const mapDispatchToProps = (({ posts, categories }) => ({
  getPosts: posts.getAll,
  getCategories: categories.getAll,
  deletePost: posts.delete
}))

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)
