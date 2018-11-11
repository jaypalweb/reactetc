import React    from "react";
import template from "./ShowUsers.jsx";
import {connect} from 'react-redux';
class ShowUsers extends React.Component {
  render() {
    return template.call(this);
  }
}

const mapStateToProps=(state)=>{
  debugger;
     return {
        'users':state.userReducer.users
     }
}

const mapDispatchToProps=(dispatch)=>{
  debugger;
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowUsers);
