import { Button, Nav } from "react-bootstrap";
import React, { useContext } from "react";
import { Context } from "../../../index";
import { useNavigate } from "react-router-dom";

import AdminPanel from "../AdminPanel";

const TrueAuth = () => {
  const { user, watchlist } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    watchlist.resetWatchlist();
  };

  return (
    <div className="nav ml-auto color-white">
      <button
        onClick={() => logOut()}
        className="color-white hover:color-blue transition border border-blue-500 hover:border-blue-700 text-blue-700 hover:text-white font-bold py-2 px-4 rounded no-underline hover:translate-x-1 hover:-translate-y-1"
      >
        Выйти
      </button>

      <AdminPanel />
    </div>
  );
};

export default TrueAuth;
