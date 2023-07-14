import { useState } from "react";
import Button from "../UI/Button";

export default function UserForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const inputInit = () => {
    setName("");
    setAge("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.length === 0 || age.length === 0) {
      props.setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      props.onShowModal();
      return;
    }

    if (+age < 1) {
      props.setError({
        title: "Invalid age",
        message: "Please enter a valid age ( > 0 ).",
      });
      props.onShowModal();
      return;
    }

    props.onSubmit({ name, age, id: name + age });
    inputInit();
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
    <form onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={nameChangeHandler} value={name} />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" onChange={ageChangeHandler} value={age} />
      <Button type="submit">Add User</Button>
    </form>
  );
}
