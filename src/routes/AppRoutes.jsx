import { Routes, Route } from "react-router-dom";
import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Events from "../pages/Events/Events";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
}

export default AppRoutes;
