import React from 'react';
import HeaderInfo from './Header-info';
import NavBar from './NavBar';
import classes from './header.module.scss'

const Header = () => {
  return (
    <div className={classes.header}>
      <HeaderInfo />
      <NavBar />
    </div>
  );
}

export default Header;
