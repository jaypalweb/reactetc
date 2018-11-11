import React    from "react";
import template from "./ShowPosts.jsx";
import {connect} from 'react-redux';
class ShowPosts extends React.Component {
  render() {
    return template.call(this);
  }
}

const mapStateToProps=(state)=>{
    return{
      'posts':state.userReducer.posts
    }
}

export default connect(mapStateToProps)(ShowPosts);
