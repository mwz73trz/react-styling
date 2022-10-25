import React, { useContext } from "react";
import UserContext from "../UserContext";

const Home = () => {
  const user = useContext(UserContext);
  return (
    <div className="wrapper">
      <div className="child">
        <h1>Home</h1>
        <h3>Welcome {user.name}</h3>
      </div>
    </div>
  );
};

export default Home;
