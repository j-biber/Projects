import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Feed } from "./view/pages/Feed/Feed";
import { PostDetails } from "./view/pages/PostDetails/PostDetails";
import { ProfilePage } from "./view/pages/profilePage/ProfilePage";

class Main extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route path="/post/:type/:id" component={PostDetails} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/" component={Feed} />
        </Switch>
      </main>
    );
  }
}

export { Main };
