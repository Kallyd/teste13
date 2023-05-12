import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./auth.css";

import { login, signup } from "./authActions";
import InputAuth from "../common/form/inputAuth";
import Row from "../common/layout/row";
import Grid from "../common/layout/grid";
import Messages from "../common/msg/messages";

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = { loginMode: true }; // screen is in login? if not shows screen to register
	}

	changeMode() {
		this.setState({ loginMode: !this.state.loginMode });
	}

	onSubmit(values) {
		const { login, signup } = this.props;
		this.state.loginMode ? login(values) : signup(values);
	}
	render() {
		const { loginMode } = this.state;
		const { handleSubmit } = this.props;

		return (
			<div className="login-box">
				<div className="login-logo">
					<b> My</b> Money
				</div>
				<div className="login-box-body">
					<p className="login-box-msg">Welcome!</p>
					<form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
						<Field
							component={InputAuth}
							type="input"
							name="name"
							placeholder="Name"
							icon="user"
							hide={loginMode}
						/>
						<Field
							component={InputAuth}
							type="email"
							name="email"
							placeholder="E-mail"
							icon="envelope"
						/>
						<Field
							component={InputAuth}
							type="password"
							name="password"
							placeholder="Password"
							icon="lock"
						/>
						<Field
							component={InputAuth}
							type="password"
							name="confirm_password"
							placeholder="Confirm Password"
							icon="lock"
							hide={loginMode}
						/>
						<Row>
							<Grid cols="4">
								<button
									type="submit"
									className="btn btn-primary btn-block btn-flat">
									{loginMode ? "Sign In" : "Sign Up"}
								</button>
							</Grid>
						</Row>
					</form>
					<br />
					<a onClick={() => this.changeMode()}>
						{loginMode
							? "New User? Sign Up here!"
							: "Already Registered? Sign In Here!"}
					</a>
				</div>
				<Messages />
			</div>
		);
	}
}
Auth = reduxForm({ form: "authForm" })(Auth);
const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ login, signup }, dispatch);
export default connect(null, mapDispatchToProps)(Auth);
