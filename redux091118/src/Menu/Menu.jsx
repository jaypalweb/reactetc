import "./Menu.css";
import React from "react";
import {HashRouter,Route} from 'react-router-dom';
import Users from '../Users/Users';
import Posts from '../Posts/Posts';
import ShowUsers from '../ShowUsers/ShowUsers';
import ShowPosts from '../ShowPosts/ShowPosts';
function template() {
  return (
    <div className="menu">
        <HashRouter>
            <div>
                 <div>
                     <a href="#/users">users</a>
                     <a href="#/posts">posts</a>
                     <a href="#/showUsers">show uses</a>
                     <a href="#/showPosts">show posts</a>
                 </div>
                 <Route path="/" exact component={Users} />
                 <Route path="/users"  component={Users} />
                 <Route path="/posts"  component={Posts} />
                 <Route path="/showUsers"  component={ShowUsers} />
                 <Route path="/showPosts"  component={ShowPosts} />
            </div>
        </HashRouter>
    </div>
  );
};

export default template;
