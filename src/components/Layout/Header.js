import React from "react";

import RefreshButton from "./RefreshButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>CryptoBruh</h1>
        <RefreshButton onRefresh={props.onRefresh}/>
      </header>
    </React.Fragment>
  );
};
export default Header;
