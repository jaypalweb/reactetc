import React    from "react";
import template from "./A.jsx";
import storeName from '../actions/storeNameAction';

class A extends React.Component {

  fnSendData(){
     let name=this.refs.name.value;
     storeName(name);
  }
  render() {
    return template.call(this);
  }
}

export default A;
