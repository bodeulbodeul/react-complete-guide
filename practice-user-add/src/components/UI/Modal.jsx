import ReactDom from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";

export default function Modal(props) {
  const Backdrop = (props) => <div className={styles.backdrop}></div>;

  const Overlay = (props) => (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>{props.message}</div>
      <footer className={styles.actions}>
        <Button onClick={props.onClose}>Okay</Button>
      </footer>
    </Card>
  );

  return (
    <>
      {ReactDom.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {ReactDom.createPortal(
        <Overlay title={props.title} message={props.message} onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
