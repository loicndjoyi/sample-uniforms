import React from "react";
import GuestForm from "./GuestForm";
import logo from "./logo_inverse.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand" href="https://www.geniuserp.com/">
            <img
              src={logo}
              className="d-inline-block align-top"
              height="52"
              alt="logo"
            />
          </a>
        </nav>
      </header>
      <div className="d-flex flex-column">
        <h1 className="text-center">Genius Web Data Manager</h1>
        <div className="card w-75 mx-auto">
          <div className="card-body">
            <GuestForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
