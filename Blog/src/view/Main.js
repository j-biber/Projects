import React, { Component } from 'react';
import { Homepage } from './Homepage'
import { Author } from './partials/author/Author';
import { About } from './partials/about/About'
import { Switch, Route } from "react-router-dom"
import { SinglePostPage } from './partials/singlePost/SinglePostPage';





class Main extends Component {
    render() {

        return (
            <Switch>
                <Route path='/post/:id' component={SinglePostPage} />
                <Route path='/about' component={About} />
                <Route path='/authors' component={Author} />
                <Route path='/' component={Homepage} />
            </Switch>
        );
    }
}

export { Main }

