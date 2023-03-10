import classes from "./Button.module.css";

const Button = (props) => {
  const style = `${classes.btn} ${props.className ? props.className : ""} ${
    props.isActive ? classes.active : ""
  }`;
  return (
    <button onClick={props.onClick} className={style} disabled={props.disabled}>
      {props.children}
    </button>
  );
};
export default Button;
