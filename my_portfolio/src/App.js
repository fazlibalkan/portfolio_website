import React from "react";
import "./App.css";
import Home from "../src/components/Home.js";

function App() {
  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        backgroundImage: `url("/bg2.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backdropFilter: "blur(10px)",
      }}
    s>
      <Home />
    </div>
  );
}

export default App;
