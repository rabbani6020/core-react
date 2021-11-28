import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const FetchWithFilter = () => {
  const [posts, setPosts] = useState([]);
  const [searchById, setSearchById] = useState("");

  useEffect(() => {
    if (!searchById) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${searchById}`)
        .then((response) => setPosts([response.data]))
        .catch((error) => console.log(error));
    }
  }, [searchById]);

  //   const searchItems = (e) => {
  //     setSearchById(e.target.value);
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`)
  //     .then((response) => {
  //       setPosts([response.data]);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-center mb-3">Fetch Data with filter</h2>

          <div className="filter-box mb-3">
            <label className="lead">Please provide id</label>
            <input
              type="text"
              className="form-control"
              value={searchById}
              onChange={(e) => setSearchById(e.target.value)}
            />
          </div>

          <table className="table table-bordered table-responsive align-middle">
            <thead className="table-head-primary">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!!posts.length > 0 ? (
                posts.map((post) => (
                  <tr key={post.id}>
                    <th scope="row">{post.id}</th>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-danger">
                            <i className="fas fa-trash-alt"></i>
                          </button>
                          <button type="button" className="btn btn-warning">
                            <i className="fas fa-pencil-alt"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>
                    <h2>Loading....</h2>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FetchWithFilter;
