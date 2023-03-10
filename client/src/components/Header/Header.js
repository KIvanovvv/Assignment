import ButtonLink from "../Utils/ButtonLink.js";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <ButtonLink to={"/employees"}>Employees</ButtonLink>
        <ButtonLink to={"/tasks"}>Tasks</ButtonLink>
      </div>
    </div>
  );
};

export default Header;
