import React, { Component } from 'react';
import SignupForm from './signupForm';

import PageTitle from '../pageTitle';

class SignUp extends Component {

    onSubmit = (fields) => {
        console.log(fields);
      }

    render() {
        return (
            <div className='sign-in'>
            <PageTitle className='sign-in__page-title' title='Login'/>
            <SignupForm onSubmit={this.onSubmit} className='sign-in__form'/>
            </div>
        )
    }
}
export default SignUp;