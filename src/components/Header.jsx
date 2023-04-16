import React, { useContext } from "react";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { SiFirebase } from "react-icons/si";
import { AppContext } from "../App";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const Header = () => {
  const { setRoute, user, setUser } = useContext(AppContext);

  const clickLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        //const errorCode = error.code;
        //const errorMessage = error.message;
        //const email = error.customData.email;
        //const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        setRoute("home");
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <header className="h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8 fixed top-0">
      <div className="flex items-center gap-2">
        <SiFirebase className="text-2xl text-sky-600" />
        <span className="text-xl font-semibold text-sky-600">App Firebase</span>
      </div>
      <div className="flex gap-2">
        {user ? (
          <>
            <button
              className="bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition"
              onClick={logout}
            >
              logout
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition"
              onClick={clickLoginWithGoogle}
            >
              Login with Google
            </button>

            <button
              className="bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition"
              onClick={() => setRoute("login")}
            >
              Login with Email
            </button>

            <button
              className="bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition"
              onClick={() => setRoute("register")}
            >
              Register
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
