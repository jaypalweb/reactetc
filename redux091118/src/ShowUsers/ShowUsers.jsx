import "./ShowUsers.css";
import React from "react";

function template() {
  return (
    <div className="show-users">
      <h1>ShowUsers</h1>

      {
        this.props.users && this.props.users.map((o)=>{
              return <div>
                          <h1>{o.id}</h1>
                          <h3>{o.name}</h3>
                          <h5>{o.email}</h5>
                          <hr/>
                      </div>
        })
      }
    </div>
  );
};

export default template;
