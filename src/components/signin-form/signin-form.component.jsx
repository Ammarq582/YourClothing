import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { createDocumentWithSignUp, signInWithGooglePopup, UserSignInWithEmailAndPassword } from '../../utils/firebase.utils';

import './signin-form.styles.scss'
import { useState } from 'react';


const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields;

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
    }

    const googlePopUpHandler = async () => {
        const {user} = await signInWithGooglePopup();
        createDocumentWithSignUp(user);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await UserSignInWithEmailAndPassword(email, password);
        }
        catch(err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('Entered Email or Password is not valid')
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break;
                case 'auth/too-many-requests':
                    alert('Access to this account is temporarily disable due to many failed login attempts')
                    break;
                default:
                    console.log('There is an error while signing in: ', err);
                    break;
            }
        }
    }

    return(
        <div className="signin-form-container">
            <h2>Already have an account?</h2>
            <p>Sign in with your email and password</p>

            <form onSubmit={submitHandler}>
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

                <div className="buttons-container">
                    <Button>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={googlePopUpHandler}>
                        Google Sign In
                    </Button>
                </div>

                
            </form>
        </div>
    )
}

export default SignInForm;