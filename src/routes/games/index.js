import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

// Note: `game` comes from the URL, courtesy of our router
const Games = ({ game }) => {

	return (
		<div class={style.games}>
			<h1>Games</h1>
			<ul>
			<Link activeClassName={style.active} href="/games/rock-paper-scissors">Rock Paper Scissors</Link>
			</ul>
		</div>
	);
}

export default Games;
