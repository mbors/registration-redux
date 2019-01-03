import React from 'react';
import './style.css';

export default class Button extends React.Component {
    render() {
        const { text, onClick} = this.props
        return (
            <button
                onClick={onClick}
                className='button'>
                {text}
            </button>
        )
    }
}