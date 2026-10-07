import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import PlanTrip from "./pages/PlanTrip";
import MyTrips from "./pages/MyTrips";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/plan-trip" element={<PlanTrip />} />
        <Route path="/my-trips" element={<MyTrips />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;