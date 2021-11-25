import axios from "axios";
import React, { useEffect, useState } from "react";

const postBaseUrl = "http://localhost:4000/test-post/posts";
const postCreateUrl = "http://localhost:4000/test-post/create";
// const postDeleteUrl = `http://localhost:4000/test-post/delete/:${id}`;

const UseEffectComp = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", body: "", comment: "" });

  useEffect(() => {
    axios.get(postBaseUrl).then((res) => {
      setPosts(res.data.data);
    });
  }, [posts]);

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(post);
    axios
      .post(postCreateUrl, post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setPost({ title: "", body: "", comment: "" });
  };

  const postDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:4000/test-post/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const postEditHandler = (id) => {

    console.log(id)

    axios
      .put(`http://localhost:4000/test-post/edit/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="card p-5">
        <h2>UseEffect Demo</h2>
        <div className="post-show">
          <h2>Post Shown</h2>
          <hr></hr>
          {!!posts.length > 0 ? (
            <>
              <table className="table table-bordered table-responsive align-middle">
                <thead className="table-head-primary">
                  <tr>
                    <th scope="col">Post Title</th>
                    <th scope="col">Post Body</th>
                    <th scope="col">Comments</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post._id}>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                      <td>{post.comment}</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => postDeleteHandler(post._id)}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning"
                              onClick={() => postEditHandler(post._id)}
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* <ul className="list-group">
                {posts.map((post, index) => (
                  <li className="list-group item" key={post._id}>
                    <h3>{post.title} </h3>
                    <p>{post.body}</p>
                    <p>{post.comment}</p>
                    <div className="button-group">
                      <button
                        className="btn btn-danger flex-1"
                        onClick={() => postDeleteHandler(post._id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        className="btn btn-danger flex-1"
                        onClick={postEditHandler}
                      >
                        <i className="fas fa-pencil"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul> */}
            </>
          ) : (
            <h2>Loading.....</h2>
          )}
        </div>
        <div className="post-create">
          <h2>Post Shown</h2>
          <hr></hr>
          <form onSubmit={submitHandler}>
            <div className="from-group mb-3">
              <label className="label">Post Title</label>
              <input
                type="text"
                name="title"
                value={post.title}
                className="form-control"
                onChange={changeHandler}
              />
            </div>
            <div className="from-group mb-3">
              <label className="label">Post Body</label>
              <input
                type="text"
                name="body"
                value={post.body}
                className="form-control"
                onChange={changeHandler}
              />
            </div>
            <div className="from-group mb-3">
              <label className="label">Post Comment</label>
              <input
                type="text"
                name="comment"
                value={post.comment}
                className="form-control"
                onChange={changeHandler}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UseEffectComp;
