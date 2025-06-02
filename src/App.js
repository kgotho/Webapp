import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AboutUsPage from "./pages/about-us";
import ServicePage from "./pages/service";
import DoctorPage from "./pages/doctor";
import ContactPage from "./pages/contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
