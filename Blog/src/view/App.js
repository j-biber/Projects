import React, { Component } from 'react';
import Header from './common/Header';
import { Main } from './Main';
import { Footer } from './common/Footer';

import './App.css';


class App extends Component {

	render() {
		return (
			<div className='root container'>
				<Header />
				<div className='main'>
					<Main />
				</div>
				<Footer />
			</div>

		);
	}
}


export default App;
