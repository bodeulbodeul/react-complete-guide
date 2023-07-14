import { useState } from "react";
import Modal from "../UI/Modal";
import UserForm from "./UserForm";

export default function NewUser(props) {
  const [isShow, setIsShow] = useState(false);

  const modalToggleHandler = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };

  const submitHandler = (newUser) => {
    props.onAddUser(newUser);
  };

  return (
    <>
      <UserForm onShowModal={modalToggleHandler} onSubmit={submitHandler} />
      {isShow && <Modal onClose={modalToggleHandler} />}
    </>
  );
}
