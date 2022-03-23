import React, { Component } from 'react';

/* 放大全螢幕 */
class Navbarfullscreen extends Component
{
	state = {}
	render()
	{
		return (
			<li className="nav-item">
				<a className="nav-link" data-widget="fullscreen" href="#" role="button">
					<i className="fas fa-expand-arrows-alt" />
				</a>
			</li>
		);
	}
}

export default Navbarfullscreen;