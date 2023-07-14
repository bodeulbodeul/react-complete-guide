import { useState } from "react";
import Button from "../UI/Button";
import styles from "./UserForm.module.css";
export default function UserForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.length === 0 || age.length === 0) {
      props.onShowModal();
      return;
    }
    props.onSubmit({ name, age, id: name + age });
  };

  const nameChangeHandler = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const ageChangeHandler = (e) => {
    const value = e.target.value;
    setAge(value);
  };

  return (
    <form className={styles.input} onSubmit={submitHandler}>
      <label>Username</label>
      <input type="text" onChange={nameChangeHandler} />
      <label>Age (Years)</label>
      <input type="text" onChange={ageChangeHandler} />
      <Button type="submit" title="Add User" />
    </form>
  );
}
