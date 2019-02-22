import React, { Component } from 'react';
import { FormInput, FormButton } from '../formField';

import { reduxForm, Field } from 'redux-form';

class SigninForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className = { `${className} sign-in-form`}>
                <Field className='signin-form__email' 
                type='email'
                title='Email'
                placeholder='Email'
                name='email'
                component={FormInput}
                />
                <Field className='signin-form__password' 
                type='password'
                title='Password'
                placeholder='Password'
                name='password'
                component={FormInput}
                />
                <Field className='signin-form__login' 
                onClick={() => console.log('Trying to submit')}
                type='login'
                title='Login'
                name='login'
                component={FormButton}
                />
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;