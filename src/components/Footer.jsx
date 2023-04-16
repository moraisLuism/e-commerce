import React, { useContext } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillCartFill, BsList } from "react-icons/bs";
import { AppContext } from "../App";

const admin = null;
const Footer = () => {
  const { setRoute } = useContext(AppContext);
  return (
    <div className="fixed h-16 w-full bg-sky-600 bottom-0 flex justify-evenly items-center">
      <div
        className="text-4xl text-white cursor-pointer"
        onClick={() => setRoute("home")}
      >
        <IoHomeSharp />
      </div>

      <div
        className="text-4xl text-white cursor-pointer"
        onClick={() => setRoute("shopping")}
      >
        <BsFillCartFill />
      </div>
      {admin ? (
        <>
          <div
            className="text-4xl text-white cursor-pointer"
            onClick={() => setRoute("db")}
          >
            <BsList />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Footer;
