import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

    const logGoogleUser = async() =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;

// GOOGLE LOGIN WITH REDIRECT
// useEffect(() => {
//     const getResponse = async () =>{
//         const response = await getRedirectResult(auth);
//         if(response){
//             const userDocRef = await createUserDocumentFromAuth(response.user);
//         }
//     }
//     getResponse();
// }, []);
// <button onClick={signInWithGoogleRedirect}>
//     Sign In With Google Redirect
// </button>
