import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import PricePage from "./pages/PricePage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/price" element={<PricePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
