import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.scss";

import DrawerAppBar from "./components/Navbar/Navbar.react";
import ProjectsPage from "./components/Projects/ProjectsPage";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
