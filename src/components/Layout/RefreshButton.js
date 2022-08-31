import React from "react";
import { IoRefreshCircleSharp } from "react-icons/io5";

import classes from "./RefreshButton.module.css";

const RefreshButton = (props) => {

  const refreshHandler = () => {
    props.onRefresh();
  }

  return (
    <button className={classes.button} onClick={refreshHandler}> 
      <span>
        <IoRefreshCircleSharp className={classes.icon}/>
      </span>
    </button>
  );
};

export default RefreshButton;
