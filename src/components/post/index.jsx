// Internal Imports
import SinglePost from "./singlepost";

import {postData} from "../../constant/data/post";
const Post = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row g-4">
          {postData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <SinglePost title={item.title} body={item.body} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
