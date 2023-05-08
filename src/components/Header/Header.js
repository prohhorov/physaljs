import React from 'react';
import Menu from 'components/Menu/Menu';
import logo from 'components/media/svg/logo.svg';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
	{
		emoji: '😀',
		name: "test grinning face"
	},
	{
		emoji: '🎉',
		name: "party popper"
	},
	{
		emoji: '💃',
		name: "woman dancing"
	}
];
const greeting = "greeting";
const displayAction = true;

const Header = () => (
	<header className="App-header">
		<div className="inner">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 id={greeting}>Hello, World</h1>
			{displayAction && <p>I am writing JSX</p>}
			<Menu />
			<ul>
				{
					emojis.map(emoji => (
						<li key={emoji.name}>
							<button
								onClick={displayEmojiName}
							>
								<span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
							</button>
						</li>
					))
				}
			</ul>
		</div>
	</header>
);

export default Header;