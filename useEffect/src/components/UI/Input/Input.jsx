import classes from "./Input.module.css";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return { focus };
  });

  return (
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ""}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
