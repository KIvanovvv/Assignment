import classes from "./ButtonLink.module.css";
import { Link } from "react-router-dom";
const ButtonLink = (props) => {
  const style = `${classes.btn} ${props.className ? props.className : ""} ${
    props.isActive ? classes.active : ""
  }`;
  return (
    <Link to={props.to} onClick={props.onClick} className={style}>
      {props.children}
    </Link>
  );
};
export default ButtonLink;
