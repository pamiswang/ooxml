import React from "react";
import Home from "../../pages/home";
import DocxHome from "../../pages/docx/docx_home"
import PptxHome from "../../pages/pptx/pptx_home"
import { Routes, Route, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Header extends React.Component
{
	render()
	{
		return (
			<div className="Header">
				<h1>選單</h1>

				<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
					<Container>
						<Navbar.Brand href="/">OOXML</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">		
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/docx_home">DOCX Home</Nav.Link>
								<Nav.Link href="/pptx_home">PTTX Home</Nav.Link>
						
								{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
								</NavDropdown> */}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="docx_home" element={<DocxHome />} />
					<Route path="pptx_home" element={<PptxHome />} />
				</Routes>
			</div >
		);
	};
}


export default Header;