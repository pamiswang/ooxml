import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'

let basename = "";

if (process.env.NODE_ENV === 'development')
{
	basename = "";
}
else if (process.env.NODE_ENV === 'production')
{
	basename = process.env.PUBLIC_URL;
}

ReactDOM.render(
	<Router basename={basename}>
		<App />
	</Router>,
	document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
