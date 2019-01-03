import React, { Component } from 'react';
import Button from '../../elements/Button/Button';
import './style.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserAction } from '../../store/user/user.actions';


class RegistrationForm extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <div className="mainContainer">
                    <div className="container">
                        <form>
                            <input type="text" placeholder="Email" onChange={this.handleEmailChange} />
                            <input type="text" placeholder="Password" onChange={this.handlePasswordChange} />
                            <Button onClick={this.handleSubmit} text="Register" />
                        </form>
                </div>
            </div >
        )
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.register && this.props.register({
            email: this.state.email,
            password: this.state.password
        })
    }
}

export default connect(
    (state) => ({
        user: state,
    }),
    (dispatch) => {
        return ({
            register: bindActionCreators(UserAction, dispatch).register,
        })
    }
)(RegistrationForm)

RegistrationForm.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
}


