import React, { Component } from 'react';
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'

/* 導覽列 */
class Navbar extends Component
{
	state = {}
	render()
	{
		return (
			//導覽列
			<nav className="main-header navbar navbar-expand navbar-dark">
				{/* 左導覽列 */}
				<NavbarLeft/>
				{/* 右測導覽列 */}
				<NavbarRight/>
			</nav>
		);
	}
}

export default Navbar;