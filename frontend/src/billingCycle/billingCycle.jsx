import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";

class BillingCycles extends Component {
	render() {
		return (
			<div>
				<ContentHeader title="Payments Cycles" small="Register" />
				<Content>Payments Cycles</Content>
			</div>
		);
	}
}
export default BillingCycles;
