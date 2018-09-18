import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post.js';
import './List.css';

class List extends Component {
  state = {
    posts: []
  }
  componentWillMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({posts: res.data.slice(0, 10)})
      })
  }
  render() {
    var lister = this.state.posts.map(post => {
      return (
        <Post
          id={post.id}
          key={post.id}
          title={post.title}
          body={post.body}
        />
      )
    })
    return (
      <div className="list">
        {lister}
      </div>
    );
  }

}

export default List;
