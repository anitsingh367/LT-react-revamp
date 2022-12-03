import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer.react";

import "./App.scss";

import YoutbeVideo from "./components/YoutubeVideo/YoutbeVideo.react";
import DrawerAppBar from "./components/Navbar/Navbar.react";

import ProjectsPage from "./components/Projects/ProjectsPage";

import About from "./pages/About";
import EventPages from "./components/Events/EventsViewPage.react";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
        <Route exact path="/video" element={<YoutbeVideo />} />
        <Route exact path="/events" element={<EventPages />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
