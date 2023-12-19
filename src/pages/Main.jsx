import React, { useState } from "react";

export const Main = (props) => {
  const [classNames, setClassNames] = useState("square");

  const onClick = () => {
    setClassNames((prev) => prev + " xl");
    setTimeout(() => setClassNames("square"), 2000);
  };

  return (
    <>
      <h1>Hi Cathy!</h1>
      <div className={classNames} onClick={onClick}></div>
    </>
  );
};
