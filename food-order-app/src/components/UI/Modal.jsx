import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

export default function Modal(props) {
  const Backdrop = () => <div className={classes.backdrop}></div>;

  const Overlay = (props) => (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );

  const portalElement = document.getElementById("overlay-root");

  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
    </>
  );
}
