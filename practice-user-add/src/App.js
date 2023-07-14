import { useState } from "react";
import "./App.css";
import UserList from "./components/User/UserList";
import Card from "./components/UI/Card";
import NewUser from "./components/NewUser/Newuser";

const dummy = [
  { name: "Vernon Cain", age: "34", id: 82 },
  { name: "Harry Lambert", age: "73", id: 13 },
];
function App() {
  const [users, setUsers] = useState(dummy);

  const addUserHandler = (newUser) => {
    setUsers((prev) => [newUser, ...users]);
  };

  return (
    <div>
      <Card>
        <NewUser onAddUser={addUserHandler} />
      </Card>
      <Card>
        <UserList items={users} />;
      </Card>
    </div>
  );
}

export default App;
