// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Vlogs from "./pages/Vlogs";
import Extras from "./pages/Extras";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vlogs" element={<Vlogs />} />
        <Route path="/extras" element={<Extras />} />
      </Routes>
    </Router>
  );
};

export default App;
