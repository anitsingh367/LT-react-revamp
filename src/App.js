import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Testimonial from "./pages/Testimonial";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/testimonials" element={<Testimonial />} />
      </Routes>
    </div>
  );
}

export default App;
