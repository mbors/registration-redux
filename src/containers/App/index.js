import * as React from 'react';
import Registration from '../Registration/index';
import Message from '../../components/Message/index';
import styled from 'styled-components'

const AppWrapper = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center; 
text-align: center;
`
export default class Main extends React.Component {
    render() {
        return (
            <AppWrapper>
                <Registration />
                <Message />
            </AppWrapper>
        );
    }

}

