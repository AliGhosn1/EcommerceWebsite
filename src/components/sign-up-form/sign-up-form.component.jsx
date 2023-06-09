import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from "./sign-up-form.styles.jsx"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () =>{
    const[formFields, setFormFields] = useState(defaultFormFields);
    const{ displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) =>{
        console.log("submit");
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords dont match.");
            return;
        }      
        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            setFormFields(defaultFormFields);
        }
        catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("Email already in use")
            }
            else if(error.code === 'auth/weak-password'){
                alert("Password is too weak")
            }
            else{
                console.log("User creation error:", error.code);
            }
        }
    }

    return(
        <SignUpContainer>
            <h2>Dont have an account?</h2>
            <span>Sign-up with an email and password.</span>
            <form onSubmit={ handleSubmit }> 
                
                <FormInput label="Display Name" type="text" onChange = {handleChange} name="displayName" value={displayName} required/>
                <FormInput label="Email Address" type="email" onChange = {handleChange} name="email" value={email} required/>
                <FormInput label="Password" type="password" onChange = {handleChange} name="password" value={password} required/>
                <FormInput label="Confirm Password" type="password" onChange = {handleChange} name="confirmPassword" value={confirmPassword} required/>

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;