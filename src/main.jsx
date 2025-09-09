import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import App from "./App.jsx"; // home page
import GalleryPage from "./pages/GalleryPage.jsx"; // dedicated gallery page

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
