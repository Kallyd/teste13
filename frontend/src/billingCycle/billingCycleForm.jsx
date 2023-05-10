import React, { Component } from "react";

// reduxForm  = connect (form decorator)
import { reduxForm, Field } from "redux-form";

import labelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends Component {
	render() {
		const { handleSubmit } = this.props;
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
					/>
					<Field
						name="month"
						component={labelAndInput}
						label="Month"
						cols="12 4"
						placeholder="Inform the Month"
						type="number"
					/>
					<Field
						name="year"
						component={labelAndInput}
						label="Year"
						cols="12 4"
						placeholder="Inform the Year"
						type="number"
					/>
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
export default reduxForm({ form: "billingCycleForm", destroyOnUnmount: false })(
	BillingCycleForm
);
