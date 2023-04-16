import React, { useState, useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { AppContext } from "../App";

const auth = getAuth();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setRoute, setUser } = useContext(AppContext);
  const clickLoginWithEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast(`USER: ${email} inicio de sesión válido`);
        setUser(user);
        setRoute("home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-xl font-semibold text-sky-600">Login</h1>
        <form
          onSubmit={clickLoginWithEmail}
          className="flex flex-col gap-2 max-w-sm"
        >
          <input
            className="border border-gray-500 rounded py-1 px-2 ouline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-gray-500 rounded py-1 px-2 ouline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-sky-500 text-white py-1 px-3 rounded shadow hover:bg-sky-700 transition">
            Login with Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
