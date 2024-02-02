import React from "react";

import { Button, Nav } from "react-bootstrap";
import { LOGIN_ROUTE } from "../../../utils/consts";
import { NavLink } from "react-router-dom";

const FalseAuth = () => {
  return (
    <div className="nav ml-auto color-white">
      <NavLink to={LOGIN_ROUTE}>
        <button className="color-white hover:color-blue transition border text-blue-400 hover:text-white font-bold py-2 px-4 rounded no-underline hover:-translate-y-1">
          Авторизация
        </button>
      </NavLink>
    </div>
  );
};

export default FalseAuth;
