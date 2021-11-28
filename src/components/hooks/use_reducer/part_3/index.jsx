import axios, { Axios } from "axios";
import React, { useEffect, useReducer } from "react";

const initialStates = {
  isLoading: false,
  error: "",
  posts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchPosts": {
      return {
        isLoading: false,
        error: "",
        posts: action.data,
      };
    }
    case "errorPosts": {
      return state;
    }
    default: {
      return state;
    }
  }
};

const UseReducerFetchPosts = () => {
  const [initData, dispatch] = useReducer(reducer, initialStates);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => dispatch({ type: "fetchPosts", data: response.data.slice(0,10) }))
      .catch((error) => console.log(error));
  }, []);

  const { isLoading, error, posts } = initData;
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card p-3">
            <h2>UseReducerFetchPosts Demo</h2>
            {isLoading && <h2>Loading........</h2>}
            {error && <h2>Something went wrong</h2>}
            {posts.length > 0 && (
              <ul className="list-group">
                {posts.map((post) => (
                  <li className="list-group-item" key={post.id}>
                    <div>
                      <h3>{post.title}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UseReducerFetchPosts;
