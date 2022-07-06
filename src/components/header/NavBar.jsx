import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.scss";
import logo from "../../assets/icons/icon-adidas-logo.svg"

const NavBar = () => {
  const headerTopRoutesList = [
    {
      id: 1,
      title: "help",
      link: "#",
    },
    {
      id: 2,
      title: "exchanges & returns",
      link: "#",
    },
    {
      id: 3,
      title: "order tracker",
      link: "#",
    },
  ];

  return (
    <div className={classes.header__desktop}>
      <div className={classes.header__desktop_top}>
        <div className={classes.header__desktop_top_inner}>
          {headerTopRoutesList.map((route) => (
            <Link className={classes.routes} key={route.id} to={route.link}>
              {route.title}
            </Link>
          ))}
          <div className={classes.routes}>join adiclub</div>
        </div>
      </div>
      <div className={classes.header__desktop_bottom}>
        <div className={classes.header__desktop_bottom_inner}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
