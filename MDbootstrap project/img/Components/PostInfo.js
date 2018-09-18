import React, {Component} from 'react';
import './PostInfo.css'
import axios from 'axios';

class Post extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    let id = this.props.match.params.post_id; //Очень важный парамент, который отслеживает путь контента.
    axios.get('http://jsonplaceholder.typicode.com/posts/' + id).then(response => {
      this.setState({post: response.data})
    })
  }
  render() {
    const post = this.state.post
      ? (<div className="card">
        <p>{this.state.post.title}</p>
        <p>{this.state.post.body}</p>
      </div>)
      : (<div>Loading...</div>)
    return (<div>
      <h4>
        {post}
      </h4>
    </div>);
  }
}
export default Post;
