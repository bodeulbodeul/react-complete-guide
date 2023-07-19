import IMG from "../../assets/header.jpg";
import classes from "./HeaderImage.module.css";

export default function HeaderImage(props) {
  return (
    <div className={classes["main-image"]}>
      <img src={IMG} alt="A table full of delicious food" />;
    </div>
  );
}
