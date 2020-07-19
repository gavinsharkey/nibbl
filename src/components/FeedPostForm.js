import React, { Component } from 'react'

export default class FeedPostForm extends Component {
  state = {
    content: ''
  }

  handleChange = e => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createPost(this.state.content)
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div className="post-form rounded p-3 my-2 border">
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label>Content: </label>
            <textarea onChange={this.handleChange} className="form-control p-3" placeholder="Make a post!" />
          </div>
          <div className="form-group">
            <input type="submit" value="Post" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}