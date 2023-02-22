import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Result from "./pages/result";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/result" element={<Result />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
