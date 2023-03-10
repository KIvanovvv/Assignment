import classes from "./Home.module.css";
const welcomeText =
  "This project is specifically build for Prime Holding Internship 2023.1, by Krasimir Ivanov. I hope it meet's all assigned criterias";

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
          <span className={classes.name}> Krasimir Ivanov </span>. I hope it
          meet's all assigned criterias
        </p>
      </div>
    </div>
  );
};

export default Home;
