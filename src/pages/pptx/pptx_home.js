import React from 'react';

class Pptx_home extends React.Component
{
	render()
	{
		return (
			<>
			
				<main>
					<h2>頁面  PPTX</h2>
					<h1>PPTX {process.env.PUBLIC_URL}</h1>
					<h1>PPTX {process.env.NODE_ENV}</h1>
				</main>

			</>
		);
	}
}

export default Pptx_home;