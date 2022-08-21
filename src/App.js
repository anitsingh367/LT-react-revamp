import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer    
        position="top-right"
        autoClose={3000}
      />
    </div>
  );
}

export default App;
