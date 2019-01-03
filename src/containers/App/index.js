import * as React from 'react';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Loader from '../../components/Loader/index';
import Message from '../../components/Message/index';
import { connect } from 'react-redux';

 class Main extends React.Component {
    render() {
        console.log(this.props.user)
        return (
            <div>
                <Loader />
                <Message />
              <RegistrationForm />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        user: state.user,
    }),
)(Main)