import axios from "axios";
import { FETCH_ERRORS, FETCH_SUCCESS } from "./postTypes";

//actions
const fetchSuccess = (posts) => {
  return {
    type: FETCH_SUCCESS,
    payload: posts,
  };
};

const fetchErrors = (errors) => {
  return {
    type: FETCH_ERRORS,
    payload: errors,
  };
};

const fetchPosts = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch(fetchSuccess(res.data.slice(0,10)));
      })
      .catch((errors) => {
        dispatch(fetchErrors(errors));
      });
  };
};

export default fetchPosts;
