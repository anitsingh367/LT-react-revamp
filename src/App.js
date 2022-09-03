import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Video from "./pages/Video";
import DrawerAppBar from "./components/Navbar/Navbar.react";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/video" element={<Video />} />
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
