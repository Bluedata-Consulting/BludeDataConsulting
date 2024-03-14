import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Contact/Team";
import Tech from "./pages/Tech/Tech";
import Scaling from "./pages/Scaling/Scaling";
import Analytics from "./pages/Analytics/Analytics";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/techconsulting" element={<Tech />} />
          <Route path="/scaling" element={<Scaling />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
