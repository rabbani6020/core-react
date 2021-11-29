import React, { useEffect, useReducer } from "react";
import axios from "axios";

// initialStates
const initialStates = {
  isLoading: true,
  errors: "",
  posts: [],
};

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return { isLoading: false, errors: "", posts: action.payload };
    }
    case "FETCH_ERRORS": {
      return { isLoading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

// FetchDataWithUseReducer component
const FetchDataWithUseReducer = () => {
  const [initData, dispatch] = useReducer(reducer, initialStates);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data.slice(0, 10),
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERRORS", payload: error });
      });
  }, []);

  // destructring data
  const { isLoading, errors, posts } = initData;
  return (
    <>
      <div className="card p-5">
        <h2>Fetch Data with Use Reduder Demo</h2>
        {isLoading && <h2>Loading.......</h2>}
        {!!errors && <h2>{errors}</h2>}
        {posts.length > 0 && (
          <ul className="list-group">
            {posts.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default FetchDataWithUseReducer;
