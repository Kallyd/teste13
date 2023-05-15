import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// reduxForm  = connect (form decorator)
// formValueSelector retrives a value inside the form
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./billingCycleActions";
import LabelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component {
	// map-reduce
	calculateSummary() {
		const sum = (total, actualValue) => total + actualValue;
		return {
			sumOfCredits: this.props.credits
				.map((credit) => +credit.value || 0)
				.reduce(sum, 0),
			sumOfDebts: this.props.debts
				.map((debt) => +debt.value || 0)
				.reduce(sum, 0),
		};
	}

	render() {
		const { handleSubmit, readOnly, credits, debts } = this.props;
		const { sumOfCredits, sumOfDebts } = this.calculateSummary();
		return (
			<form action="" role="form" onSubmit={handleSubmit}>
				<div className="box-body">
					<Field
						name="name"
						component={LabelAndInput}
						label="Name"
						cols="12 4"
						placeholder="Inform the name"
						type="text"
						readOnly={readOnly}
					/>
					<Field
						name="month"
						component={LabelAndInput}
						label="Month"
						cols="12 4"
						placeholder="Inform the Month"
						type="number"
						readOnly={readOnly}
					/>
					<Field
						name="year"
						component={LabelAndInput}
						label="Year"
						cols="12 4"
						placeholder="Inform the Year"
						type="number"
						readOnly={readOnly}
					/>
					<Summary credit={sumOfCredits} debt={sumOfDebts} />

					<ItemList
						cols="12 6"
						readOnly={readOnly}
						list={credits}
						field="credits"
						legend="Credits"
					/>
					<ItemList
						cols="12 6"
						readOnly={readOnly}
						list={debts}
						field="debts"
						legend="Debts"
						showStatus={true}
					/>
				</div>
				<div className="box-footer">
					<button type="submit" className={`btn btn-${this.props.submitIcon}`}>
						{this.props.submitLabel}
					</button>
					<button
						type="button"
						className={`btn btn-${this.props.buttonIcon}`}
						onClick={this.props.init}>
						Cancel
					</button>
				</div>
			</form>
		);
	}
}
const selector = formValueSelector("billingCycleForm");

// decorator 1
BillingCycleForm = reduxForm({
	form: "billingCycleForm",
	destroyOnUnmount: false,
})(BillingCycleForm);

const mapStateToProps = (state) => ({
	credits: selector(state, "credits"),
	debts: selector(state, "debts"),
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

// decorator 2
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);

// form is a object passa via parameter that as a id to de the named 'billingCycleForm'
// export default reduxForm({ form: "billingCycleForm", destroyOnUnmount: false })(
// 	BillingCycleForm
// );
