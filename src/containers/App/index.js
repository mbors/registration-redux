import * as React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Loader from '../../components/Loader/index';
import Message from '../../components/Message/index';
import { connect } from 'react-redux';
import WelcomePage from '../../components/WelcomePage/WelcomePage';

class Main extends React.Component {
    render() {
        const localStorageUser = localStorage.getItem('user')
        console.log('local storage ', localStorageUser)
        const { user } = this.props.user;
        if (user.email === '') {
            return (
                <div>
                    <Loader />
                    <Message />
                    <RegistrationForm />
                </div>
            );
        } else {
            return (
                <div>
                    <WelcomePage/>
                </div>
            )
        }
    }

}

export default connect(
    (state) => ({
        user: state,
    }),
)(Main)