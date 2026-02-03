import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Homepage";
import Industries from "./pages/Industries";
import About from "./pages/Aboutus";
import Contact from "./pages/Contact";

import AirFreight from "./pages/services/AirFreight";
import OceanFreight from "./pages/services/OceanFreight";
import RoadTransport from "./pages/services/RoadTransport";
import CustomsClearance from "./pages/services/customclearance";
import Warehousing from "./pages/services/Warehousing";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services/air-freight" element={<AirFreight />} />
        <Route path="/services/ocean-freight" element={<OceanFreight />} />
        <Route path="/services/road-transport" element={<RoadTransport />} />
        <Route path="/services/customs-clearance" element={<CustomsClearance />} />
        <Route path="/services/Warehousing" element={<Warehousing />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
