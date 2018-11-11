import "./ShowPosts.css";
import React from "react";

function template() {
  return (
    <div className="show-posts">
      <h1>ShowPosts</h1>
      {
        this.props.posts && this.props.posts.map((o)=>{
              return <div>
                          <h1>{o.id}</h1>
                          <h3>{o.title}</h3>
                          <h5>{o.body}</h5>
                          <hr/>
                      </div>
        })
      }
    </div>
  );
};

export default template;
