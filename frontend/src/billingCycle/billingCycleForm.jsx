import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class BillingCycleForm extends Component {
	render() {
		return (
			<form action="" role="form">
				<div className="box-body"></div>
				<div className="box-footer">
					<button type="submit" className="btn btn-primary">
						{this.props.label}
					</button>
				</div>
			</form>
		);
	}
}

export default connect()(BillingCycleForm);
