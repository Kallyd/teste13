// component to personalize the messages from redux
import React from "react";

import ReduxToastr from "react-redux-toastr";
// css reference [modules = node_modules -> webpack.config]
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

export default (props) => (
	<ReduxToastr
		timeOut={2000}
		newestOnTop={false}
		preventDuplicates={true}
		position="top-right"
		transitionIn="fadeIn"
		transitionOut="fadeOut"
		progressBar
	/>
);
