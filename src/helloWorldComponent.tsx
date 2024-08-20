import React from "react";
import * as classes from "./mystyles.scss";

export const HelloWorldComponent = () => {
  return (
    <div>
      <span className={classes.redBackground}>Hello World</span>
    </div>
  );
};
