import { initializeApp } from "firebase/app";
import { getAuth, SignInWithRedirect, SignInWithPopup, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCjTreNi1X2_ar1UXhYvsejlgmiYFGD0hs",
    authDomain: "crwn-clothing-4a45d.firebaseapp.com",
    projectId: "crwn-clothing-4a45d",
    storageBucket: "crwn-clothing-4a45d.appspot.com",
    messagingSenderId: "765417885082",
    appId: "1:765417885082:web:88bc3188c95c600a4e3e23"
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {displayName, email, createdAt})
        }
        catch(error){
            console.log("error creating user", error.message)
        }
    }

    return userDocRef;
}