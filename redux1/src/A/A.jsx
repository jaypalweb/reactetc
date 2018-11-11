import "./A.css";
import React from "react";

function template() {
  return (
    <div className="a">
      <input type="text" ref="name"  /><input value="send data" type="button"  onClick={this.fnSendData.bind(this)}/>
    </div>
  );
};

export default template;
