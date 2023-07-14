import styles from "./Button.module.css";
export default function Button({ type = "button", ...props }) {
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>
      {props.title}
    </button>
  );
}
