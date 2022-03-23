import React, { Component } from 'react';
import NavbarSearch from './NavbarSearch';
import NavbarMessages from './NavbarMessages';
import NavbarNotifications from './NavbarNotifications';
import Navbarfullscreen from './Navbarfullscreen';


/* 導覽列右側 */
class NavbarRight extends Component
{
	state = {}
	render()
	{
		return (
			<ul className="navbar-nav ml-auto">
				{/* 查詢 */}
				<NavbarSearch />
				{/* 訊息下拉選單 */}
				<NavbarMessages />
				{/* 通知下拉選單 */}
				<NavbarNotifications />
				{/* 放大全螢幕 */}
				<Navbarfullscreen />
			</ul>
		);
	}
}

export default NavbarRight;