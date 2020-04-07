import React from "react";
import logo from "./pepega.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pwa-info">
          You can download this web app as PWA on your mobile device.
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>My amazing Progressive Web App</p>
      </header>
    </div>
  );
}

export default App;
