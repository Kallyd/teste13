import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { create, update, remove, init } from "./billingCycleActions";

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
		this.props.init();
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
								<BillingCycleForm
									submitLabel="Submit"
									onSubmit={this.props.create}
									submitIcon="primary"
								/>
							</TabContent>
							<TabContent id="tabUpdate">
								<BillingCycleForm
									submitLabel="Update"
									onSubmit={this.props.update}
									submitIcon="primary"
								/>
							</TabContent>
							<TabContent id="tabDelete">
								<BillingCycleForm
									submitLabel="Delete"
									onSubmit={this.props.remove}
									buttonIcon="default"
									submitIcon="danger"
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
	bindActionCreators({ init, create, update, remove }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycles);
