import React, { Component } from "react";

class SinglePost extends Component {
  render() {
    const { posts } = this.props;

    return (
      <>
        <ul className="list-group">
          {posts.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}-{post.body}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default SinglePost;
