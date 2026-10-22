
import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Sightseeings from "./components/Sightseeings";
import Contact from "./components/Contact";
import Veg from "./components/Veg";

import "./App.css";

// Contact details
const PHONE_NUMBER = "+919591525484";
const WHATSAPP_NUMBER = "919591525484";

// Automatically scroll to the top whenever the page changes
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

// Floating WhatsApp and Call buttons
function FloatingContactButtons() {
  return (
    <>
      <div className="dat-floating-contacts">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          className="dat-float-btn dat-float-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="dat-float-icon" />
          <span className="dat-float-label">WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="dat-float-btn dat-float-call"
          aria-label="Call Dandeli Adventure Thrills"
          title="Call Now"
        >
          <FaPhoneAlt className="dat-float-icon" />
          <span className="dat-float-label">Call Now</span>
        </a>
      </div>

      <style>{`
        .dat-floating-contacts {
          position: fixed;
          right: 22px;
          bottom: 28px;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .dat-float-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 62px;
          height: 62px;
          min-width: 62px;
          min-height: 62px;
          border: 3px solid #ffffff;
          border-radius: 50%;
          color: #ffffff !important;
          text-decoration: none !important;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.32);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
          isolation: isolate;
        }

        .dat-float-btn:hover {
          transform: scale(1.1);
          color: #ffffff !important;
        }

        .dat-float-whatsapp {
          background: #25D366 !important;
          animation: datWhatsappPulse 2s infinite;
        }

        .dat-float-whatsapp:hover {
          background: #128C7E !important;
          box-shadow: 0 0 24px rgba(37, 211, 102, 0.65);
        }

        .dat-float-call {
          background: #1769E0 !important;
          animation: datCallPulse 2s infinite;
          animation-delay: 0.5s;
        }

        .dat-float-call:hover {
          background: #0d4fa8 !important;
          box-shadow: 0 0 24px rgba(23, 105, 224, 0.55);
        }

        .dat-float-icon {
          display: block;
          width: 34px;
          height: 34px;
          color: #ffffff !important;
          fill: currentColor;
          flex-shrink: 0;
        }

        .dat-float-label {
          position: absolute;
          right: 74px;
          top: 50%;
          transform: translate(8px, -50%);
          padding: 10px 15px;
          background: #172017;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          font-family: Arial, sans-serif;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: all 0.2s ease;
        }

        .dat-float-btn:hover .dat-float-label,
        .dat-float-btn:focus-visible .dat-float-label {
          opacity: 1;
          visibility: visible;
          transform: translate(0, -50%);
        }

        @keyframes datWhatsappPulse {
          0%, 100% {
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25),
                        0 0 0 0 rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25),
                        0 0 0 9px rgba(37, 211, 102, 0);
          }
        }

        @keyframes datCallPulse {
          0%, 100% {
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25),
                        0 0 0 0 rgba(23, 105, 224, 0.3);
          }
          50% {
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25),
                        0 0 0 8px rgba(23, 105, 224, 0);
          }
        }

        @media (max-width: 600px) {
          .dat-floating-contacts {
            right: 13px;
            bottom: 20px;
            gap: 12px;
          }

          .dat-float-btn {
            width: 56px;
            height: 56px;
            min-width: 56px;
            min-height: 56px;
          }

          .dat-float-icon {
            width: 31px;
            height: 31px;
          }

          .dat-float-label {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dat-float-btn {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnRouteChange />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sightseeings" element={<Sightseeings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/veg" element={<Veg />} />
        </Routes>
      </main>

      <Footer />

      <FloatingContactButtons />
    </BrowserRouter>
  );
}
