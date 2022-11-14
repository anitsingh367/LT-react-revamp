import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer.react";

import "./App.scss";

import YoutbeVideo from "./components/YoutubeVideo/YoutbeVideo.react";
import DrawerAppBar from "./components/Navbar/Navbar.react";

import ProjectsPage from "./components/Projects/ProjectsPage";

import About from "./pages/About";
<<<<<<< Updated upstream
=======
import EventPages from "./components/Events/EventPage.react";
import Terms from "./components/Terms and Conditions/Terms";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/terms-and-conditions" element={<Terms />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
        <Route exact path="/video" element={<YoutbeVideo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
