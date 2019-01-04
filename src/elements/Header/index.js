import React, { Component } from 'react';
import styled from 'styled-components'

const AppHeader = styled.div`
margin-top: 30px; 
margin-bottom: 30px;
`
const AppTitle = styled.h1`
font-weight: 800;
`

export default class Header extends Component {
    render() {
        return (
                <AppHeader>
                    <AppTitle>{this.props.title}</AppTitle>
                </AppHeader>
        )
    }
}

