import React, { Component } from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoaderAction } from './redux/loader.actions'


class Loader extends Component {
    render() {
        if (this.props.visible)
            return (
                <div className={style.loaderContainer}>
                    <div className={style.loader} />
                </div>)
        else return (<noscript />)
    }
}

export default connect(
    (state) => ({
        visibility: state.loader.visibility
    }),
    (dispatch) => {
        return ({
            setVisibility: bindActionCreators(LoaderAction, dispatch).setVisibility,
        })
    }
)(Loader)
