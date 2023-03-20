import FormInput from '../form-input/form-input.component';
import './signup-form.styles.scss'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useState } from 'react';
import { createDocumentWithSignUp, signUpWithEmailandPassword } from '../../utils/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if(password === confirmPassword) {
            const userDoc = await signUpWithEmailandPassword(email, password);
            console.log(userDoc.user);
            const user = await createDocumentWithSignUp(userDoc.user, {displayName});
            console.log(user);
        }
    } 

    return(
        <div className="signup-form-container">
            <h2>Dont have an account?</h2>
            <p>Sign up with your email and password</p>

            <form onSubmit={submitHandler}>
            <FormInput
                type='text'
                label='Display Name'
                name='displayName'
                value={displayName}
                required
                onChange={inputHandler}
            />
            <FormInput
                type='email'
                label='Email'
                name='email'
                value={email}
                required
                onChange={inputHandler}
            />
            <FormInput
                type='password'
                label='Password'
                name='password'
                value={password}
                required
                onChange={inputHandler}
            />
            <FormInput
                type='password'
                label='Confirm Password'
                name='confirmPassword'
                value={confirmPassword}
                required
                onChange={inputHandler}
            />

                <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;