import classes from "./Button.module.css";

const Button = (props) => {
  const style = `${classes.btn} ${props.className ? props.className : ""}`;
  return (
    <button onClick={props.onClick} className={style}>
      {props.children}
    </button>
  );
};
export default Button;
