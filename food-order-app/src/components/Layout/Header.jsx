import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import HeaderImage from "./HeaderImage";
export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onOpen={props.onOpen} />
      </header>
      <HeaderImage />
    </>
  );
}
