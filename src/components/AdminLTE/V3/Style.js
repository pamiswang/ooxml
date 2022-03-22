import React from 'react';

class Stylesheet extends React.Component
{
	state = {}
	render()
	{
		return (
			<>
				{/* <!-- Google Font: Source Sans Pro --> */}
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"></link>
				{/* <!-- Font Awesome Icons --> */}
				<link rel="stylesheet" href={require("../plugins/fontawesome-free/css/all.min.css")}></link>
				{/* <!-- IonIcons --> */}
				<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"></link>
				{/* <!-- Theme style --> */}
				<link rel="stylesheet" href={require("../dist/css/adminlte.min.css")}></link>
			</>
		);
	}
}

export default Stylesheet;