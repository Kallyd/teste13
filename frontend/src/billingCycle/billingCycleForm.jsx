import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// reduxForm  = connect (form decorator)
import { reduxForm, Field } from "redux-form";

import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends Component {
	render() {
		const { handleSubmit, readOnly } = this.props;
		// console.log(handleSubmit);
		return (
			<form action="" role="form" onSubmit={handleSubmit}>
				<div className="box-body">
					<Field
						name="name"
						component={labelAndInput}
						label="Name"
						cols="12 4"
						placeholder="Inform the name"
						type="text"
						readOnly={readOnly}
					/>
					<Field
						name="month"
						component={labelAndInput}
						label="Month"
						cols="12 4"
						placeholder="Inform the Month"
						type="number"
						readOnly={readOnly}
					/>
					<Field
						name="year"
						component={labelAndInput}
						label="Year"
						cols="12 4"
						placeholder="Inform the Year"
						type="number"
						readOnly={readOnly}
					/>
				</div>
				<div className="box-footer">
					<button type="submit" className="btn btn-primary">
						{this.props.label}
					</button>
					<button
						type="button"
						className="btn btn-default"
						onClick={this.props.init}>
						Cancel
					</button>
				</div>
			</form>
		);
	}
}

// decorator 1
BillingCycleForm = reduxForm({
	form: "billingCycleForm",
	destroyOnUnmount: false,
})(BillingCycleForm);

const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

// decorator 2
export default connect(null, mapDispatchToProps)(BillingCycleForm);

// form is a object passa via parameter that as a id to de the named 'billingCycleForm'
// export default reduxForm({ form: "billingCycleForm", destroyOnUnmount: false })(
// 	BillingCycleForm
// );
