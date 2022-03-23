import React, { Component } from 'react';
import logos from  './AdminLTELogo.png'

class Preloader extends Component
{
	state = {}
	render()
	{
		return (
			<div className="preloader flex-column justify-content-center align-items-center">
				<img className="animation__wobble" src={logos} alt="AdminLTELogo" height="60" width="60"/>
			</div>
		);
	}
}

export default Preloader;