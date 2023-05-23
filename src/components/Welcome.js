import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth,db } from "../firebase";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const saveUserToFirestore = async (user) => {
    try {
      const usersRef = collection(db, "users");
      const userQuery = query(usersRef, where("id", "==", user.uid));
      const userSnapshot = await getDocs(userQuery);
      if (userSnapshot.empty) {
        await addDoc(usersRef, {
          id: user.uid,
          name: user.displayName,
          email: user.email,
        });
      }
    } catch (error) {
      console.error("Error saving user to Firestore: ", error);
    }
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      saveUserToFirestore(user);
    }
  });
  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;