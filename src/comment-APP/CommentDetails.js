import React from "react";
// import { faker } from "@faker-js/faker";
const CommentDetails = ({ image, author, date, text }) => {
  return (
    <div>
      <div className="comment">
        {/* // image */}
        <a href="/" className="avatar">
          <img alt="avatar" src={image} />
        </a>
        {/* // author name */}
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          {/* // date */}
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          {/* // comment */}
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetails;
