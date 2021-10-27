import React, { Component } from "react";
import SinglePost from "./single_post";

const postApi = "https://jsonplaceholder.typicode.com/posts";

class PostGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    fetch(postApi)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          posts: data,
          isLoading: true,
        });
      });
  }

  render() {
    const { posts, isLoading } = this.state;

    return (
      <>{isLoading ? <SinglePost posts={posts} /> : <h2>Loading....</h2>}</>
    );
  }
}

export default PostGrid;
