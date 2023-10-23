import React, { useState } from "react";
import classes from "./Home.module.css";
import Button from "./Button";

function Home() {
  const [res, setRes] = useState("0");

  const buttons = [
    "C",
    "9",
    "/",
    "8",
    "7",
    "6",
    "*",
    "5",
    "4",
    "3",
    "+",
    "2",
    "1",
    "0",
    "-",
    ".",
    "DEL",
    "="
  ];

  const findval = () => {
    let result = Function("return " + res)();
    setRes(result.toString());
  };

  const handler = arg => {
    if (res === "Infinity") {
      setRes("0");
      return;
    }

    if (arg === "C") setRes("0");
    else if (arg === "=") findval();
    else if (arg === "DEL") {
      let n = res.length;
      if (n > 0) {
        setRes(res.slice(0, n - 1));
      }
    } else setRes(res.concat(arg));
  };

  return (
    <div className={classes.home}>
      <div className={classes.inner}>
        <div className={classes.result}>
          <div className={classes.resbox}>
            {res}
          </div>
        </div>
        <div className={classes.btns}>
          {buttons.map((btn, i) => {
            return <Button handler={handler} value={btn} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
