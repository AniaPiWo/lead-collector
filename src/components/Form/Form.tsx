import React from "react";
import * as styles from "./Form.module.scss";
import { Button, TextField, Checkbox } from "nerdux-ui-system";

type Props = {};

const Form = (props: Props) => {
  return (
    <form className={styles.wrapper}>
      <div className={styles.inputbox}>
        <TextField
          label={"Name"}
          value={""}
          name={""}
          id={"name"}
          placeholder="e.g. Richard Parker"
          onChange={() => console.log("name")}
          disabled={true}
        />
        <TextField
          label={"Email"}
          value={""}
          name={""}
          id={"email"}
          placeholder="e.g. richard@gmail.com"
          onChange={() => console.log("email")}
          disabled={true}
        />
      </div>
      <Checkbox
        label={"I accept the terms and conditions"}
        id={""}
        name={""}
        checked={false}
        onChange={() => console.log("checked")}
        disabled={true}
      />
      <Button
        variant={"primary"}
        onClick={() => console.log("clicked")}
        disabled={true}
      >
        Sign me up!
      </Button>
    </form>
  );
};

export default Form;
