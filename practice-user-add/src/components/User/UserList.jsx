import UserItem from "./UserItem";
import styles from "./UserList.module.css";
import Card from "../UI/Card";

export default function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.items.map((item) => (
          <li>
            <UserItem key={item.id} name={item.name} age={item.age} />
          </li>
        ))}
      </ul>
    </Card>
  );
}
