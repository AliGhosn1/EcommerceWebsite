
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss'

const Authentication = () => {

    return(
        <div className="sign-in-page">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;

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
