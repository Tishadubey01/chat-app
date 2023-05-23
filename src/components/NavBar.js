import React, { useState,useEffect } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth,db } from "../firebase";
//import firebase from './firebase';
import { doc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
//const auth = firebase.auth();

const NavBar = () => {
  const [user] = useAuthState(auth);
//   useEffect(() => {
//     if (user) {
//       saveUserToFirestore(user);
//     }
//   }, [user]);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };
  const saveUserToFirestore = async (user) => {
    try {
      const userRef = doc(db, "users", user.uid);
      const userData = {
        displayName: user.displayName,
        email: user.email,
      };
      await setDoc(userRef, userData, { merge: true });
    } catch (error) {
      console.log("Error saving user to Firestore:", error);
    }
  };
auth.onAuthStateChanged(user => {

    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        saveUserToFirestore(user)
        console.log('User is signed in.', displayName, email);
    } else {
        // No user is signed in.
        console.log('No user is signed in.');
    }
});
    return (
    <nav className="nav-bar">
        <h1>React Chat</h1>
        {user ? (
        <button onClick={signOut} className="sign-out" >
            Sign Out
        </button>
        ) : (
            <button onClick={googleSignIn} className="sign-in">
            <img
                src={GoogleSignin}
                alt="sign in with google"

            />
            </button>
        )}
    </nav>
    );
};
export default NavBar;




//   return (
//     <nav className="nav-bar">
//       <h1>React Chat</h1>
//       {user ? (
//         <button onClick={signOut} className="sign-out" type="button">
//           Sign Out
//         </button>
//       ) : (
//         <button className="sign-in">
//           <img
//             onClick={googleSignIn}
//             src={GoogleSignin}
//             alt="sign in with google"
//             type="button"
//           />
//         </button>
//       )}
//     </nav>
//   );
// };

