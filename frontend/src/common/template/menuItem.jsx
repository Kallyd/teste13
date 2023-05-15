import React from "react";

// import { Link } from "react-router";
import { Link } from "react-router-dom";

export default (props) => (
	<li>
		<Link to={props.path} replace>
			<i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
		</Link>
		{/* <a href={props.path}>
			<i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
		</a> */}
	</li>
);
