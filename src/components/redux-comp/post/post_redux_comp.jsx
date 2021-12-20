import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchPosts from "../../../redux/post/postAction";

const PostReduxComp = () => {
  const { post } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { isLoading, posts, errors } = post;
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <div className="card p-4">
        <h2 className="text-center">Post Component With React Redux</h2>
        {isLoading && <h2>Loading.....</h2>}
        {errors && <h2>{errors}</h2>}
        {posts.length > 1 && (
          <ul className="list-group">
            {posts.map((post) => (
              <li className="list-group-item" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default PostReduxComp;
