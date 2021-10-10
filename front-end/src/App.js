import React from "react";
import './App.css';
import Delay from "./Components/Delay/Delay";
import ErrorData from "./Components/ErrorData/ErrorData";
import LoadData from "./Components/LoadData/LoadData";

function App() {
  return (
    <div className="App app-container">
      <LoadData url={'http://localhost:7070/data'} />
      <ErrorData url={'http://localhost:7070/error'} />
      <Delay url={'http://localhost:7070/loading'} />
    </div>
  );
}

export default App;
