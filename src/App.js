import React, { useState, createContext } from "react";
import { app } from "./firebase/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Shopping from "./routes/Shopping";
import Db from "./routes/Db";
import { Toaster } from "react-hot-toast";

export const AppContext = createContext(null);

function App() {
  const [route, setRoute] = useState("home");
  //const [user, setUser] = useState(null);
  const [userAdmin, setUserAdmin, user, setUser] = useState(null);
  return (
    <AppContext.Provider
      value={{ route, setRoute, userAdmin, setUserAdmin, user, setUser }}
    >
      <div className="h-screen">
        <Toaster />
        <Header />
        <main className="px-6 pt-24 pb-20">
          {route === "home" && <Home />}
          {route === "login" && <Login />}
          {route === "register" && <Register />}
          {route === "shopping" && <Shopping />}
          {route === "db" && <Db />}
          {user && (
            <p className="text-xl font-semibold text-sky-600">
              Usuario logueado: {user.email}
            </p>
          )}
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
