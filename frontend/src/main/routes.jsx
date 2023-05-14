import React from "react";
import { Switch, Route, Redirect } from "react-router";
// import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router";

import Dashboard from "../dashboard/dashboard";
import Dashboard2 from "../dashboard2/dashboard2";
import BillingCycle from "../billingCycle/billingCycle";
import App from "./app";
import AuthOrApp from "./authOrApp";

export default (props) => (
	<div className="content-wrapper">
		<Switch>
			<Route exact path="/" component={Dashboard} />
			<Route path="/billingCycles" component={BillingCycle} />
			<Redirect from="*" to="/" />
		</Switch>
	</div>
);

// export default (props) => (
// 	<Router history={hashHistory}>
// 		{/* <Route path="/" component={App}> */}
// 		<Route path="/" component={AuthOrApp}>
// 			<IndexRoute component={Dashboard} />
// 			<Route path="billingCycles" component={BillingCycle} />
// 		</Route>

// 		{/* <Route path="/" component={Dashboard} /> */}
// 		{/* <Route path="/" component={Dashboard} /> */}
// 		{/* <Route path="/billingCycles" component={BillingCycle} /> */}
// 		<Redirect from="*" to="/" />
// 	</Router>
// );
