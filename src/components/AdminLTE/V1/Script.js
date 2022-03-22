import React from 'react';
import { Helmet } from "react-helmet";
// import '../../../../public/plugins/jquery/jquery.min.js'
// import '../public/plugins/jquery/jquery.min.js'
// import '../../../../public/plugins/jquery-ui/jquery-ui.min.js'
// import '../../../../public/plugins/bootstrap/js/bootstrap.bundle.min.js'
// import '../../../../public/plugins/chart.js/Chart.min.js'
// import '../../../../public/plugins/sparklines/sparkline.js'
// import '../../../../public/plugins/jqvmap/jquery.vmap.min.js'
// import '../../../../public/plugins/jqvmap/maps/jquery.vmap.usa.js'
// import '../../../../public/plugins/jquery-knob/jquery.knob.min.js'
// import '../../../../public/plugins/moment/moment.min.js'
// import '../../../../public/../../../../public/../../../../public/../../../../public/public/plugins/daterangepicker/daterangepicker.js'
// import '../../../../public/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js'
// import '../../../../public/plugins/summernote/summernote-bs4.min.js'
// import '../../../../public/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js'
// import '../../../../public/dist/js/adminlte.js'
// import '../../../../public/dist/js/demo.js'
//import '../plugins/jquery/jquery.min.js'
//import '../dist/js/demo.js'


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