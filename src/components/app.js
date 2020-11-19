import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/games';
import RockPaperScissors from '../routes/rockPaperScissors';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Profile path="/games/" />
			<Profile path="/games/rock-paper-scissors" />
		</Router>
	</div>
)

export default App;
