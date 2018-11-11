import React    from "react";
import template from "./Posts.jsx";
import postActions from '../actions/postAction';
import postAction from "../actions/postAction";
class Posts extends React.Component {
  componentWillMount(){
    postAction();
  }
  render() {
    return template.call(this);
  }
}

export default Posts;
