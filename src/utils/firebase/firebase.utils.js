import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  //   signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCySyNgPrz4r0bmAGg5pnO4uENP4kuwl1U",
  authDomain: "shop-db-1637c.firebaseapp.com",
  projectId: "shop-db-1637c",
  storageBucket: "shop-db-1637c.appspot.com",
  messagingSenderId: "296911824794",
  appId: "1:296911824794:web:e842345d5a906bfbcf3c23",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());
  // console.log(userAuth);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};
