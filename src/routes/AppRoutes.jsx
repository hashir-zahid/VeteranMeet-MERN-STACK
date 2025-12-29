import { Routes, Route } from "react-router-dom";
import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Events from "../pages/Events/Events";
import VeteranProfile from "../components/VeteranProfile/VeteranProfile";
import StarBadge from "../components/StarBadge/StarBadge";
import OrganizationProfile from "../components/OrganizationProfile/OrganizationProfile";
import Followersfrom "../components/Followers/Followers";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/events" element={<Events />} />
      <Route path="/VeteranProfile" element={<VeteranProfile />} />
      <Route path="/StarBadge" element={<StarBadge/>} />
      <Route path="/OrganizationProfile" element={<OrganizationProfile/>} />
      <Route path="/Followers" element={<Followers/>} />
    </Routes>
  );
}

export default AppRoutes;


