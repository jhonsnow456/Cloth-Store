import {
  signInWithGooglePopup,
  createUserFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserFromAuth(user);
  };

  return (
    <>
      <h1>Sign In component </h1>
      <button onClick={logGoogleUser}>Sign In With Google PopUp </button>
    </>
  );
};

export default SignIn;
