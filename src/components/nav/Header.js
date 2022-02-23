import React from "react";
import Home from "../../pages/home";
import DocxHome from "../../pages/docx/docx_home"
import PptxHome from "../../pages/pptx/pptx_home"
import { Routes, Route, Link } from "react-router-dom";

class Header extends React.Component
{
	render()
	{
		return (
			<div className="Header">
				<h1>選單</h1>

				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<div class="container-fluid">

						<Link class="navbar-brand" to="/">OOXML</Link>

						<div class="collapse navbar-collapse" id="navbarText">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
								<li class="nav-item">

									<Link class="nav-link active" to="/">Home</Link>
								</li>
								<li class="nav-item">

									<Link class="nav-link" to="/docx_home">DOCX Home</Link>
								</li>
								<li class="nav-item">

									<Link class="nav-link" to="/pptx_home">PTTX Home</Link>
								</li>
							</ul>
							<span class="navbar-text">
								Navbar text with an inline element
							</span>
						</div>
					</div>
				</nav>


				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="docx_home" element={<DocxHome />} />
					<Route path="pptx_home" element={<PptxHome />} />
				</Routes>
			</div>
		);
	};
}


export default Header;