import React    from "react";
import template from "./B.jsx";
import {connect} from 'react-redux'
class B extends React.Component {
  render() {
    return template.call(this);
  }
}

const f1=(s)=>{
    return {
       'name':s.nameReducer.name
    }
}
const f2=(d)=>{
    return {

    }
}

export default connect(f1,f2)(B)
