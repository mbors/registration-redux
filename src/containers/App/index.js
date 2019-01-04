import * as React from 'react';
import Registration from '../Registration/index';
import Message from '../../components/Message/index';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Registration />
                <Message />
            </div>
        );
    }

}

