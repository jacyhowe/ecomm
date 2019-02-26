import React, { Component } from 'react';
import { FormInput, FormButton } from '../formField';

import { reduxForm, Field } from 'redux-form';
import Details from '../details';

import history from '../../history';

class SigninForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: 'Not registered? Create account here',
                onClick: () => history.push('/signup')
            },
            {
                _id: 1,
                title: 'Forgot email?',
                onClick: () => console.log('forgot email')
            },
            {
                _id: 2,
                title: 'Forgot Password?',
                onClick: () => console.log('forgot password')
            }
        ] 
        return (
            <form onSubmit={handleSubmit} className = { `${className} signin-form`}>
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
                <div className="signin-form__line"></div>
                <Field className='signin-form__login' 
                onClick={() => console.log('Trying to submit')}
                type='login'
                title='Login'
                name='login'
                component={FormButton}
                />
                <Details className='signin-form__details' title='QuickLinks' links={links}/>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;