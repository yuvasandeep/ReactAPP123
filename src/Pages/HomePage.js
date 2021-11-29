// import StartingPageContent from '../components/StartingPage/StartingPageContent';

import { useSelector } from "react-redux";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const profileSubmit = useSelector((state) => state);
  return (
    <div>
      <table className={classes.table}>
        <thead className={classes.head}>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>Address</th>
            <th>Query</th>
          </tr>
        </thead>
        <tbody>
          {profileSubmit.map((profileSubmit, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{profileSubmit.name}</td>
              <td>{profileSubmit.number}</td>
              <td>{profileSubmit.email}</td>
              <td>{profileSubmit.address}</td>
              <td>{profileSubmit.query}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
