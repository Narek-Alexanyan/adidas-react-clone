import React from "react";
import classes from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast  } from '@fortawesome/free-solid-svg-icons'

const HeaderInfo = () => {
  return (
    <div className={classes.headerInfo}>
      <div className={classes.headerInfo__content}>
        <div className={classes.headerInfo__content_item}>
          30% off * starts now
        </div>
        <div className={classes.headerInfo__content_item}>
          <FontAwesomeIcon icon={faTruckFast} />
          free standard shipping & returns | join now
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
