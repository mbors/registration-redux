import React, { Component } from 'react';
import { Button } from '../../elements/Button/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserAction } from '../../store/user/user.actions';
import styled from 'styled-components'
import Header from '../../elements/Header/index';

const AppWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`

class Welcome extends Component {
    render() {
        return (
            <AppWrapper>
                <Header title="You are registered!" />
                <Button primary onClick={this.handleLogout}>Logout</Button>
            </AppWrapper>
        )
    }

    handleLogout = (e) => {
        e.preventDefault();
        this.props.logout && this.props.logout({})
        this.props.history.push('/')
    }
}


export default connect(
    (state) => ({
        user: state.user
    }),
    (dispatch) => {
        return ({
            logout: bindActionCreators(UserAction, dispatch).logout,
        })
    }
)((Welcome))