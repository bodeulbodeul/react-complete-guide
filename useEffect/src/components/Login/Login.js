import React, { useContext, useEffect, useReducer, useState } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
  const { type, value } = action;

  const validCheck = (value) => {
    return value.includes("@");
  };

  switch (type) {
    case "INPUT_CHANGE":
      return { value, isValid: validCheck(value) };

    case "INPUT_BLUR":
      return { value: state.value, isValid: validCheck(state.value) };
    default:
      return { value: "", isValid: false };
  }
};

const pwdReducer = (state, action) => {
  const { type, value } = action;

  const validCheck = (value) => {
    return value.trim().length > 6;
  };

  switch (type) {
    case "INPUT_CHANGE":
      return { value, isValid: validCheck(value) };
    case "INPUT_BLUR":
      return { value: state.value, isValid: validCheck(state.value) };
    default:
      return { value: "", isValid: false };
  }
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatch] = useReducer(emailReducer, { value: "", isValid: null });
  const [pwdState, pwdDispatch] = useReducer(pwdReducer, { value: "", isValid: null });

  const { isValid: emailIsValid } = emailState;
  const { isValid: pwdIsValid } = pwdState;

  const ctx = useContext(AuthContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFormIsValid(emailIsValid && pwdIsValid);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [emailIsValid, pwdIsValid]);

  const emailChangeHandler = (event) => {
    emailDispatch({ value: event.target.value, type: "INPUT_CHANGE" });
  };

  const passwordChangeHandler = (event) => {
    pwdDispatch({ value: event.target.value, type: "INPUT_CHANGE" });
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    pwdDispatch({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, pwdState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${pwdState.isValid === false ? classes.invalid : ""}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pwdState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
