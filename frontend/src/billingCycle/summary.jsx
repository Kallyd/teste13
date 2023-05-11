import React from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row";
import ValueBox from "../common/widget/valueBox";

export default ({ credit, debt }) => (
	<Grid cols="12">
		<fieldset>
			<legend>Resume</legend>
			<Row>
				<ValueBox
					cols="12 4"
					color="green"
					icon="bank"
					value={`R$ ${credit}`}
					text="Credits Total"
				/>
				<ValueBox
					cols="12 4"
					color="red"
					icon="credit-card"
					value={`R$ ${debt}`}
					text="Debts Total"
				/>
				<ValueBox
					cols="12 4"
					color="blue"
					icon="money"
					value={`R$ ${credit - debt}`}
					test="Consolidated Value"
				/>
			</Row>
		</fieldset>
	</Grid>
);
