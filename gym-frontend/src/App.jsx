import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/contact" element={<h1>Contact Us</h1>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
