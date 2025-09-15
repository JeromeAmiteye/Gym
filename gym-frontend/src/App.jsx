import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
        {/* <Route path="/workouts" element={<Workout />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
