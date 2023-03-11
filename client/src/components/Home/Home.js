import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p className={classes.header_text}>Welcome to Employee Manager.</p>
        <p className={classes.text}>
          This project is specifically build for
          <span className={classes.first}> Prime </span>
          <span className={classes.second}>Holding </span>
          Internship 2023.1, by{" "}
          <span className={classes.name}> Krasimir Ivanov </span>.
        </p>
      </div>
    </div>
  );
};

export default Home;
