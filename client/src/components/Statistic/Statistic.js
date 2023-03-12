import { useEffect, useState } from "react";
import { getTop5 } from "../../services/employeeServices.js";
import Spinner from "../Utils/Spinner.js";
import List from "./List.js";
import classes from "./Statistic.module.css";

const Statistic = () => {
  const [employees, setEmployees] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    (async function fetchEmployees() {
      setEmployees(await getTop5());
      setHasLoaded(true);
    })();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <p>Top 5 Employees</p>
      </div>
      <div className={classes.content}>
        {hasLoaded && (
          <ul className={classes.ul}>
            {employees.map((x) => (
              <List key={x._id} employee={x} />
            ))}
          </ul>
        )}
        {!hasLoaded && (
          <div className={classes.spinner}>
            <Spinner h={350} w={350} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistic;
