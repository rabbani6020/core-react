import React from "react";

import { PostCat, PostTitle, P } from "./Elements.style.js";

const CardCompOne = () => {
  return (
    <>
      <div className="py-5 ">
        <h2 className="mb-4 text-center">Styled Component Card Demo</h2>
        <div className="blog">
          <PostCat color="#fff" backgroundColor="red">Lorem</PostCat>
          <h3 className="blog-title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            vitae enim veritatis suscipit dicta deleniti.
          </p>
          <div className="button-wrap">
            <a href="#">Github</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCompOne;
