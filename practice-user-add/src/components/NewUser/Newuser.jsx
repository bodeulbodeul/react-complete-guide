import { useState } from "react";
import Modal from "../UI/Modal";
import UserForm from "./UserForm";
import Card from "../UI/Card";
import classes from "./UserForm.module.css";

export default function NewUser(props) {
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState({ title: "", message: "" });

  const modalToggleHandler = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };

  const submitHandler = (newUser) => {
    props.onAddUser(newUser);
  };

  return (
    <>
      <Card className={classes.input}>
        <UserForm onShowModal={modalToggleHandler} onSubmit={submitHandler} setError={setError} />
      </Card>
      {isShow && <Modal onClose={modalToggleHandler} title={error.title} message={error.message} />}
    </>
  );
}
