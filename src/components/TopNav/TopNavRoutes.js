import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/home";
import PptxHome from "../../pages/pptx/pptx_home"
import DocxHome from "../../pages/docx/docx_home"
import Login from "../../pages/login"

class TopNavRoutes extends React.Component
{
	//React Router 設定

	render()
	{
		return (
			< Routes >
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="docx_home" element={<DocxHome />} />
				<Route path="pptx_home" element={<PptxHome />} />
			</Routes >
		);
	};
}

export default TopNavRoutes;