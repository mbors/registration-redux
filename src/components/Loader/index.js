import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoaderAction } from './redux/loader.actions'

class Loader extends Component {

    render() {
        console.log('props visibility ', this.props.visibility)
        if (this.props.visibility){
            return (
                <div className='loaderContainer'>
                    <div className='loader' />
                </div>)
        } else return (<noscript />)
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
