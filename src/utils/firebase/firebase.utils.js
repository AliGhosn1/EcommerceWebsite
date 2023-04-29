import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
    if(!userAuth) return;
    
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation})
        }
        catch(error){
            console.log("error creating user", error.message)
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return createUserWithEmailAndPassword(auth, email, password)    
}

export const signInWithEmailAndPasswordForUsers = async (email, password) =>{
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password);
}