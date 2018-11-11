import React    from "react";
import template from "./Users.jsx";
import userActions from '../actions/userAction';
import {connect} from 'react-redux'
class Users extends React.Component {
  componentWillMount(){
      this.props.f();
  }
  render() {
    return template.call(this);
  }
}
const mapDispatchToProps=(dispatch)=>{
    return {
       'f':()=>{
        userActions(dispatch)
       }
    }
}
export default connect(null,mapDispatchToProps)(Users);
