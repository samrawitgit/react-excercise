import React, { useEffect, useState } from "react";

export const Main = () => {
  const [classNames, setClassNames] = useState("square");
  const [isTimeoutActive, setIsTimeoutActive] = useState(false);

  const onClick = () => {
    setClassNames((prev) => prev + " xl");
    setIsTimeoutActive(true);
  };

  useEffect(() => {
    if (isTimeoutActive) {
      const timeout = window.setTimeout(() => {
        setClassNames("square");
        setIsTimeoutActive(false);
      }, 2000);
      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, [isTimeoutActive]);

  console.log({ isTimeoutActive });
  return (
    <>
      <h1>Hi Cathy!</h1>
      <div className={classNames} onClick={onClick}></div>
    </>
  );
};
