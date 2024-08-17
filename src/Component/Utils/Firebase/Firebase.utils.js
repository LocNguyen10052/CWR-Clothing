import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDfmJiBsdk9kk7TKsE10LXA20U5_OS0wxk",
    authDomain: "cwn-db-d4c86.firebaseapp.com",
    projectId: "cwn-db-d4c86",
    storageBucket: "cwn-db-d4c86.appspot.com",
    messagingSenderId: "22899803208",
    appId: "1:22899803208:web:00be8dbadf6ff7feca847d",
    measurementId: "G-0C3X9RS0NV"
};
const firebaseapp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider;
provider.setCustomParameters({
    prompt: "select_account"
})

// Initialize Firebase
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userRef = doc(db, 'users', userAuth.uid)

    if (!await userAuth.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userRef;
}