// import "../common/template/dependencies";
import React from "react";
import { HashRouter } from "react-router-dom";

import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";
import Footer from "../common/template/footer";
import Routes from "./routes";

import Messages from "../common/msg/messages";

export default (props) => (
	<HashRouter>
		<div className="wrapper">
			<Header />
			<Sidebar />
			{/* <div className="content-wrapper">{props.children}</div> */}
			<Routes />
			<Footer />
			<Messages />
		</div>
	</HashRouter>
);
