import React, { Component } from "react";
import { connect } from "react-redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component {
	render() {
		const { credit, debt } = this.props.summary;
		return (
			<div>
				<ContentHeader title="Dashboard" small="Version 1.0" />
				<Content>
					<Row>
						<ValueBox
							cols="12 4"
							color="green"
							icon="bank"
							value={`${credit}`}
							text="Total of Credit"
						/>
						<ValueBox
							cols="12 4"
							color="red"
							icon="credit-card"
							value={`${debt}`}
							text="Total of Debt"
						/>
						<ValueBox
							cols="12 4"
							color="blue"
							icon="money"
							value={`${credit - debt}`}
							text="Consolidated Value"
						/>
					</Row>
				</Content>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	summary: state.dashboard.summary,
});

export default connect(mapStateToProps)(Dashboard);
