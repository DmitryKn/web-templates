
import React from 'react';
import './Post.css';
import {Link} from 'react-router-dom';

const Post = ({id, title, body}) => (
  <div className="card">
    <p><Link to={'/posts/' + id}>{title}</Link></p>
    <p>{body}</p>
  </div>
);

export default Post;
