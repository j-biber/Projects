import React, { Component } from 'react'

import { About } from "./partials/About"
import Homepage from "./Homepage"

import { HashRouter, Switch, Route } from "react-router-dom"

class App extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path='/about' component={About} />
					<Route path='/' component={Homepage} />
				</Switch>
			</HashRouter>
		);
	}
}


export default App;
