import React from "react";

const Comments = ({ comment, author }) => {
  return (
    <>
      <div className="col s12 m8 offset-m2 l6 offset-l3 container">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2 authorName">
              <img
                src="https://success.salesforce.com/resource/1541027111000/tdxlib/img/default-user.png"
                alt=""
                className="circle responsive-img"
              />
              {author}
            </div>
            <div className="col s10">
              <span className="black-text">{comment.body}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Comments };
