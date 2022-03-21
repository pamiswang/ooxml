import React from "react";
import logo from './logo.svg';
import './App.css';
import TopNav from "./components/TopNav/TopNav";
import TopNavRoutes from "./components/TopNav/TopNavRoutes";

class App extends React.Component
{
	render()
	{
		return (
			<div>
				<TopNav />
				<TopNavRoutes />
			</div>
		);
	}
}

export default App;
