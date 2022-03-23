import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
//import App from './App';
import Preloader from './components/AdminLTE/Preloader/Preloader';
import Navbar from './components/AdminLTE/Navbar/Navbar';
import Sidebar from './components/AdminLTE/Sidebar/Sidebar';

import './components/AdminLTE/Style';
import './components/AdminLTE/Script';
import { BrowserRouter as Router } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap'

let basename = "";

if (process.env.NODE_ENV === 'development')
{
	basename = "";
}
else if (process.env.NODE_ENV === 'production')
{
	basename = process.env.PUBLIC_URL;
}


// ReactDOM.render(
// 	<Router basename={basename}>
// 		<Preloader />
// 		<Page />
// 	</Router>,
// 	document.getElementById('root')
// );

ReactDOM.render(
	<div className="wrapper" >
		<Preloader />
		<Navbar />
		<Sidebar />
	</div>,
	document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
