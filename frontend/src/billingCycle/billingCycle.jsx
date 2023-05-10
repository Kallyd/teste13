import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectTab, showTabs } from "../common/tab/tabActions";
import { create, update, remove } from "./billingCycleActions";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import BillingCycleList from "./billingCycleList";
import BillingCycleForm from "./billingCycleForm";

class BillingCycles extends Component {
	componentWillMount() {
		this.props.selectTab("tabList");
		this.props.showTabs("tabList", "tabCreate");
	}
	render() {
		return (
			<div>
				<ContentHeader title="Payments Cycles" small="Register" />
				<Content>
					<Tabs>
						<TabsHeader>
							<TabHeader label="List" icon="bars" target="tabList" />
							<TabHeader label="Create" icon="plus" target="tabCreate" />
							<TabHeader label="Edit" icon="pencil" target="tabUpdate" />
							<TabHeader label="Remove" icon="trash-o" target="tabDelete" />
						</TabsHeader>
						<TabsContent>
							<TabContent id="tabList">
								<BillingCycleList />
							</TabContent>
							<TabContent id="tabCreate">
								<BillingCycleForm label="Submit" onSubmit={this.props.create} />
							</TabContent>
							<TabContent id="tabUpdate">
								<BillingCycleForm label="Update" onSubmit={this.props.update} />
							</TabContent>
							<TabContent id="tabDelete">
								<BillingCycleForm
									label="Delete"
									onSubmit={this.props.remove}
									readOnly
								/>
							</TabContent>
						</TabsContent>
					</Tabs>
				</Content>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ selectTab, showTabs, create, update, remove }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycles);
