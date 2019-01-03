import * as style from './style.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MessageAction } from './redux/message.actions'


// @connect(
//     (state: RootState) => ({
//         content: state.components.message.content,
//         timeout: state.components.message.timeout,
//     }),
// )

export class Message extends Component {
    render() {
        if (this.props.content)
            return (
                <div className={style.alert}>
                    <p className={style.alertText}>{this.props.content}</p>
                </div>)
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