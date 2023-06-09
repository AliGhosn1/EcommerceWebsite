import { useState } from "react";
import { createUserDocumentFromAuth, signInWithEmailAndPasswordForUsers, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import { ButtonContainer } from './sign-in-form.styles.jsx';
import { SignUpContainer } from "../sign-up-form/sign-up-form.styles.jsx";

const SignInForm = ({googleSignInHandler}) => {

    const defaultFormFields = {
        email: "",
        password: "",
    }

    const[formFields, setFormFields] = useState(defaultFormFields);
    const{ email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const { user } = await signInWithEmailAndPasswordForUsers(email, password);
            setFormFields(defaultFormFields);
        }
        catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect password for email.');
                    break;
                case 'auth/user-not-found':
                    alert('An account with this email does not exist.');
                    break;
                default:
                    console.log(error.code);
            }
        }
    }

    const logGoogleUser = async() =>{
        await signInWithGooglePopup();
    }

    return(
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign-in with an email and password.</span>
            <form onSubmit={ handleSubmit }> 
                
                <FormInput label="Email Address" type="email" onChange = {handleChange} name="email" value={email} required/>
                <FormInput label="Password" type="password" onChange = {handleChange} name="password" value={password} required/>
                <ButtonContainer>
                    <Button type={"submit"}>Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser} type="button">Google Sign In</Button>
                </ButtonContainer>
            </form>
        </SignUpContainer>
    )
}

export default SignInForm;