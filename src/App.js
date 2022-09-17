import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.scss";

import DrawerAppBar from "./components/Navbar/Navbar.react";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
