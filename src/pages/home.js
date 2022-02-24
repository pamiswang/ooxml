import React from 'react';

class Home extends React.Component
{
	render()
	{
		return (
			<>
				<main>
					<h2>頁面  Home</h2>
					<h1>{process.env.PUBLIC_URL}</h1>
					<h1>{process.env.NODE_ENV}</h1>
				</main>

			</>
		);
	}
}

export default Home;