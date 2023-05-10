import React, { Component } from "react";

// reduxForm  = connect (form decorator)
import { reduxForm, Field } from "redux-form";

class BillingCycleForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		// console.log(handleSubmit);
		return (
			<form action="" role="form" onSubmit={handleSubmit}>
				<div className="box-body">
					<Field name="name" component="input" />
					<Field name="month" component="input" />
					<Field name="year" component="input" />
				</div>
				<div className="box-footer">
					<button type="submit" className="btn btn-primary">
						{this.props.label}
					</button>
				</div>
			</form>
		);
	}
}

// form is a object passa via parameter that as a id to de the named 'billingCycleForm'
export default reduxForm({ form: "billingCycleForm" })(BillingCycleForm);
