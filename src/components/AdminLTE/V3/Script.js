import React from 'react';

class Script extends React.Component
{
	state = {}
	render()
	{
		return (
			<div>
				{/* <!-- jQuery --> */}
				<script src={require("../plugins/jquery/jquery.min.js")}></script>
				{/* <!-- Bootstrap --> */}
				<script src={require("../plugins/bootstrap/js/bootstrap.bundle.min.js")}></script>
				{/* <!-- AdminLTE --> */}
				<script src={require("../dist/js/adminlte.js")}></script>
				{/* <!-- OPTIONAL SCRIPTS --> */}
				<script src={require("../plugins/chart.js/Chart.min.js")}></script>
				{/* <!-- AdminLTE for demo purposes --> */}
				<script src={require("../dist/js/demo.js")}></script>
				{/* <!-- AdminLTE dashboard demo (This is only for demo purposes) --> */}
				<script src={require("../dist/js/pages/dashboard3.js")}></script>
			</div>
		);
	}
}

export default Script;