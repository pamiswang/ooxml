import React, { Component } from 'react';

/* 導覽列左側 */
class NavbarLeft extends Component
{
	state = {}
	render()
	{
		return (
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
				</li>
				<li className="nav-item d-none d-sm-inline-block">
					<a href="index3.html" className="nav-link">Home</a>
				</li>
				<li className="nav-item d-none d-sm-inline-block">
					<a href="#" className="nav-link">Contact</a>
				</li>
			</ul>
		);
	}
}

export default NavbarLeft;