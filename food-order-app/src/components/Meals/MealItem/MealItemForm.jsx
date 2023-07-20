import { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useState } from "react";

export default function MealItemForm(props) {
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const amount = inputRef.current.value.trim();

    if (amount === 0 || amount < 1 || amount > 10) {
      setIsValid(false);
      return;
    }

    props.onAdd(amount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{ id: props.id, type: "number", min: 1, max: 10, step: 1, defaultValue: 1 }}
      />
      <button type="submit">+추가</button>
      {isValid || <p>수량은 1 ~ 10 사이로 지정해주세요.</p>}
    </form>
  );
}
