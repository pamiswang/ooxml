import React from 'react';
import Helmet from "react-helmet";

import 'ionicons'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/dist/css/adminlte.min.css';

class Stylesheet extends React.Component
{

	state = {}
	render()
	{
		return (
	 
			<Helmet>
			<title>React Helmet Tutorial</title>
			{/* <!-- Google Font: Source Sans Pro --> */}
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"></link>

			{/* <!-- IonIcons --> */}
			<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"></link>

		</Helmet>
		);
	}
}

export default Stylesheet;