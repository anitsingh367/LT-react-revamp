import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer.react";

import "./App.scss";

import YoutbeVideo from "./components/YoutubeVideo/YoutbeVideo.react";
import DrawerAppBar from "./components/Navbar/Navbar.react";

import ProjectsPage from "./components/Projects/ProjectsPage";
import ProjectViewPage from "./components/Projects/ProjectViewPage";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<ProjectsPage />}>
          <Route path=":projectId" element={<ProjectViewPage />} />
        </Route>
        <Route exact path="/video" element={<YoutbeVideo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
