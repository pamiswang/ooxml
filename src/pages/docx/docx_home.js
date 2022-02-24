import React from 'react';

class Docx_home extends React.Component
{
	render()
	{
		return (
			<>
			
				<main>
					<h2>頁面  DOCX</h2>
					<h1>DOCX {process.env.PUBLIC_URL}</h1>
					<h1>DOCX {process.env.NODE_ENV}</h1>
				</main>

			</>
		);
	}
}

export default Docx_home;