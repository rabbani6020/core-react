import React, { Component } from "react";

class SinglePost extends Component {
  render() {
    const { title, body } = this.props;
    return (
      <>
        <div className="post shadow border border-danger rounded-3 py-5 px-4">
          <div className="post__content">
            <h2 className="post__title text-capitalize mb-3">{title}</h2>
            <p className="post__body fs-4 fst-italic fw-500">{body}</p>
          </div>
        </div>
      </>
    );
  }
}

export default SinglePost;
