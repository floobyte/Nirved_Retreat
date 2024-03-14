import "./App.css";
import Navbar from "./components/NavbarComponent/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Dining from "./pages/DiningPage/Dining";
import Stay from "./pages/StayPage/Stay";
import Footer from "./components/FooterComponent/Footer";
import ContactUs from "./pages/ContactUsPage/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
