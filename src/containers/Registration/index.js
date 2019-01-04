import React, { Component } from 'react';
import { Button } from '../../elements/Button/index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserAction } from '../../store/user/user.actions';
import Header from '../../elements/Header/index';
import styled from 'styled-components'

const AppWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column
`
const Input = styled.input`
    line-height: 23px; 
    font: 18px Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    border: 2px solid #F8F8F8;;
    padding: 12px;
    width: 300px;
    margin-bottom: 20px;
    font-size: 18px;
    outline: none;`

class Registration extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            email: "",
            password: ""
        };
    }


    render() {
        return (
            <AppWrapper>
                <Header title="Registration" />
                <Form>
                    <Input type="text" placeholder="Email" onChange={this.handleEmailChange} />
                    <Input type="text" placeholder="Password" onChange={this.handlePasswordChange} />
                    <Button primary onClick={this.handleSubmit}>Register</Button>
                </Form>
            </AppWrapper>

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
        user: state.user,
    }),
    (dispatch) => {
        return ({
            register: bindActionCreators(UserAction, dispatch).register,
        })
    }
)(Registration)

Registration.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    onClick: PropTypes.func,
}


