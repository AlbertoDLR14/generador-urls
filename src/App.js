import React from "react";
import "./App.css";
import UrlShortener from "./components/UrlShortener";
import { DiReact } from "react-icons/di";

function App() {
  return (
    <div className="App">
      <UrlShortener />
      <div className="footer">
        <p>Alberto de los Ríos </p> {<DiReact />}
      </div>
    </div>
  );
}

export default App;
