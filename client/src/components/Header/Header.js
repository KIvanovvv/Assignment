import ButtonLink from "../Utils/ButtonLink.js";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <ButtonLink to={"/employees"} className={classes.link}>Employees</ButtonLink>
        <ButtonLink to={"/tasks"} className={classes.link}>Tasks</ButtonLink>
        <ButtonLink to={"/statistic"} className={classes.link}>Statistic</ButtonLink>
      </div>
    </div>
  );
};

export default Header;
