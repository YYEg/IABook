import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { Context } from "../../index";
import { Container, Navbar } from "react-bootstrap";
import { CINEMA_ROUTE } from "../../utils/consts";
import TrueAuth from "./preesent-components/trueAuth";
import FalseAuth from "./preesent-components/falseAuth";
import logo from "./../../assets/l3.png";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <div class="sticky top-0 z-50 bg-white bg-opacity-500  rounded-2xl w-5/6 mx-auto">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div class="flex flex-row gap-4 items-center mx-auto">
          <img
            src={logo}
            alt="logoimage"
            class="w-14 hover:w-16 hover:-translate-y-1 transition"
          />
          <NavLink
            class="text-2xl font-semibold hover:no-underline text-white hover:text-blue-400 hover:-translate-y-1 transition"
            to={CINEMA_ROUTE}
          >
            Книжный полюс
          </NavLink>
        </div>
        <div class="w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4">
            {user.isAuth ? <TrueAuth /> : <FalseAuth />}
          </ul>
        </div>
      </div>
    </div>
  );
});

export default NavBar;
