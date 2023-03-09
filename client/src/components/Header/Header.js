import Button from "../Utils/Button.js";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <Button>Employees</Button>
        <Button>Tasks</Button>
      </div>
    </div>
  );
};

export default Header;
