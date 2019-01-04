import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MessageAction } from './redux/message.actions'

import styled from 'styled-components'

const MsgContainer = styled.div`
margin-top: 30px; 
margin-bottom: 30px;
`
const MsgContent = styled.p`
font-weight: 800;
`


export class Message extends Component {
    render() {
        if (this.props.content)
            return (
                <MsgContainer>
                    <MsgContent>{this.props.content}</MsgContent>
                </MsgContainer>
            )
        else return (<noscript />)
    }
}


export default connect(
    (state) => ({
        content: state.message.content
    }),
    (dispatch) => {
        return ({
            setMessage: bindActionCreators(MessageAction, dispatch).setMessage,
        })
    }
)(Message)