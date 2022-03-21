import React from "react";
import { Routes, Route, Link } from "react-router-dom";

//import Test from "../../pages/test"
import './TopNav.css';

class TopNav extends React.Component
{
	render()
	{
		return (
			<div>
				<NavTitle />
				{/* navbar 表示這是一個 flex-box */}
				{/* navbar-expand-md 負責轉手機版的寬度, lg:991以下轉手機版, md:767以下轉手機版, sm:575以下轉手機版 */}
				{/* navbar-dark讓文字為白色, bg-dark負責背景顏色為暗底 */}
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container-fluid">
						{/* 這是 LOGO 文字或圖片 */}
						<div className="navbar-brand" to="/">系統管理員</div>
						{/* 這是手機版時右上角呈現的選單按鈕, 注意:data-target表示按下這個按鈕時要控制展開收合的物件ID名稱 */}
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							{/* 這是按鈕上呈現的icon圖案 */}
							<span className="navbar-toggler-icon"></span>
						</button>
						{/* navbar-collapse表示這個框架區塊是可收展開的, 注意:id名稱必須跟button中的data-target一樣 */}
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							{/* 這是一組靠左側的選單 */}
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								{/* active在視覺上設計底色不同,表示目前在這個位置,如果不需要則刪除 */}
								<NavLink isActive={false} to="/" >回首頁</NavLink>
								<NavLink isActive={false} to="/docx_home" >計畫查詢</NavLink>
								<NavLink isActive={false} to="/pptx_home" >PO作業</NavLink>
								<NavLink isActive={false} to="/pptx_home" >群組一覽</NavLink>
								<NavLink isActive={false} to="/pptx_home" > 系統設定</NavLink>
								<NavLink isActive={false} to="/pptx_home" > 登出 </NavLink>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	};
}

// 導覽列上的標題
class NavTitle extends React.Component
{
	render()
	{
		return (
			<div className="container-fluid">
				<div className="nav-title">
					<div className="col-12 text-center">
						<p className="h1 align-baseline">
							<b>A<sup>+</sup>企業創新研發淬鍊計畫 計畫管理系統</b>
						</p>
					</div>
				</div>
			</div>
		);
	}
}


class NavLink extends React.Component
{
	render()
	{
		const isActive = this.props.isActive;
		if (isActive)
		{
			//active在視覺上設計底色不同,表示目前在這個位置,如果不需要則刪除 
			return (
				<li className="nav-item">
					<Link className='nav-link active' to={this.props.to}>
						<div className="nav-text"> {this.props.children} </div>
					</Link>
				</li>
			);
		} else
		{
			return (
				<li className="nav-item">
					<Link className='nav-link' to={this.props.to} >
						<div className="nav-text"> {this.props.children} </div>
					</Link>
				</li>
			);
		}
	}
}


export default TopNav;