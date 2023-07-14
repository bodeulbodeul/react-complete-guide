import Button from "./Button";
import styles from "./Modal.module.css";

export default function Modal(props) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.h2}>Invalid input</h2>
        </div>
        <div className={styles.content}>Please enter a valid name and age (non-empty values).</div>
        <Button className={styles.actions} title="Okay" onClick={props.onClose} />
      </div>
    </div>
  );
}
