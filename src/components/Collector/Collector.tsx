import React from "react";
import * as styles from "./Collector.module.scss";
import { Switch } from "nerdux-ui-system";
import Form from "../Form/Form";

type Props = {};

const Collector = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Join the Gameboy{" "}
        <span className={styles.title_magenta}>waiting list </span>
      </div>
      <div className={styles.onswitch}>
        <p>I swear, I’m a classic gameboy fan</p>
        <Switch onChange={() => console.log("its on")} id={"onswitch"} />
      </div>
      <Form />
    </div>
  );
};

export default Collector;
