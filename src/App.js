import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CreateProject from "./components/CreateProject/CreateProject";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-project" element={<CreateProject />} />
      </Routes>
    </>
  );
}

export default App;
