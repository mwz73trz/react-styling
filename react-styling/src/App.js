import "./App.css";
import React from "react";
import { UserProvider } from "./UserContext";
import Home from "./components/Home";

const App = () => {
  const user = { name: "Michael", loggedIn: true };
  return (
    <div className="App">
      <h1>React App</h1>
      <UserProvider value={user}>
        <Home />
      </UserProvider>
    </div>
  );
};

export default App;
