import classes from "./App.module.css";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <div className={classes.body}>
      <div className={classes.headline}>
        <p>Employee Manager</p>
      </div>
      <Header />
    </div>
  );
}

export default App;
