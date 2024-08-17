
import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../Utils/Firebase/Firebase.utils';

function SignIn(props) {
    const logginUserGoogle = async () => {
        const response = await signInWithGooglePopup()
        const userCreate = await createUserDocumentFromAuth(response.user)
        console.log(userCreate)

    }
    return (
        <div>
            <button
                onClick={logginUserGoogle}
            >
                Sign In
            </button>
        </div>
    );
}

export default SignIn;