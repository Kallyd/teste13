import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
	getList,
	exclude,
	showDelete,
	showUpdate,
} from "./billingCycleActions";

class BillingCycleList extends Component {
	componentWillMount() {
		this.props.getList();
	}
	renderRows() {
		const list = this.props.list || [];
		return list.map((billingCycle) => (
			<tr key={billingCycle._id}>
				<td>{billingCycle.name}</td>
				<td>{billingCycle.month}</td>
				<td>{billingCycle.year}</td>
				{/* refactor button on component - todoList app has an example */}
				<td>
					<button
						className="btn btn-warning"
						onClick={() => this.props.showUpdate(billingCycle)}>
						<i className="fa fa-pencil"></i>
					</button>
					{/* professor button to delete */}
					<button
						className="btn btn-danger"
						onClick={() => this.props.showDelete(billingCycle)}>
						<i className="fa fa-trash"></i>
					</button>
				</td>

				{/* my button to delete register */}
				{/* <td>
					<button
						className="btn btn-danger"
						onClick={() => this.props.exclude(billingCycle)}>
						<i className="fa fa-trash"></i>
					</button>
				</td> */}
			</tr>
		));
	}
	render() {
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Month</th>
							<th>Year</th>
							<th className="table-actions">Actions</th>
						</tr>
					</thead>
					<tbody>{this.renderRows()}</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	list: state.billingCycle.list,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ getList, showUpdate, exclude, showDelete }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
