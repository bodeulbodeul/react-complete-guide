import UserItem from "./UserItem";
import styles from "./UserList.module.css";

export default function UserList(props) {
  return (
    <div className={styles.users}>
      <ul>
        {props.items.map((item) => (
          <li>
            <UserItem key={item.id} name={item.name} age={item.age} />
          </li>
        ))}
      </ul>
    </div>
  );
}
