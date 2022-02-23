import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

//const basename = process.env.REACT_APP_BASENAME; // 可以設定在 .env 相關檔案
const basename = ""; 

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
