import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Welcome extends React.Component
{
	render()
	{
		return <h1>Hello, {this.props.name}</h1>;
	}
}


function formatDate(date) {
	return date.toLocaleDateString();
  }

// class FormatDate extends React.Component
// {
// 	render()
// 	{
// 		return date.toLocaleDateString();
// 	}

// }



function Comment(props)
{
	return (
		<div className="Comment">
			<div className="UserInfo">
				<img className="Avatar"
					src={props.author.avatarUrl}
					alt={props.author.name} />
				<div className="UserInfo-name">
					{props.author.name}
				</div>
			</div>
			<div className="Comment-text">
				{props.text}
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
	);
}

const comment = {
	date: new Date(),
	text: 'I hope you enjoy learning React!',
	author: {
		name: 'Hello Kitty',
		avatarUrl: 'http://placekitten.com/g/64/64'
	}
};
ReactDOM.render(
	<Comment
		date={comment.date}
		text={comment.text}
		author={comment.author} />,
	document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
