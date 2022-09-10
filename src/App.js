import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DrawerAppBar from "./components/Navbar/Navbar.react";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Projects" element={<ProjectsPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </div>
  );
}

export default App;
