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
      <div
        onClick={() => logOut()}
        className="transition border text-blue-400 hover:text-violet-600 font-bold py-2 px-4 rounded no-underline hover:-translate-y-1"
      >
        Выйти
      </div>
      <AdminPanel />
    </div>
  );
};

export default TrueAuth;
