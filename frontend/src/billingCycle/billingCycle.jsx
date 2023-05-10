import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";

class BillingCycles extends Component {
	render() {
		return (
			<div>
				<ContentHeader title="Payments Cycles" small="Register" />
				<Content>
					<Tabs>
						<TabsHeader></TabsHeader>
						<TabsContent></TabsContent>
					</Tabs>
				</Content>
			</div>
		);
	}
}
export default BillingCycles;
