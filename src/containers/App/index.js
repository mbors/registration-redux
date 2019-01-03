import * as React from 'react';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Loader from '../../components/Loader/index';
import Message from '../../components/Message/index';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Loader />
                <Message />
              <RegistrationForm />
            </div>
        );
    }
}
