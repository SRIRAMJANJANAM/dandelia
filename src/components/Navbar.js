
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCalendarAlt,
  FaChevronRight,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Sight seeings / water activities ", path: "/sightseeings" },
    { name: " Pure Veg Resorts", path: "/veg" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .dat-navbar,
        .dat-navbar * {
          box-sizing: border-box;
        }

        .dat-navbar {
          --dat-gold: #ffc21b;
          --dat-green: #082b23;

          position: sticky;
          top: 0;
          z-index: 1100;
          width: 100%;
          min-height: 86px;
          padding: 10px clamp(20px, 6.5vw, 105px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          background: rgba(5, 29, 23, 0.97);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
          color: #fff;
          font-family: "DM Sans", "Segoe UI", sans-serif;
          transition:
            min-height 0.25s ease,
            padding 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .dat-navbar.dat-scrolled {
          min-height: 72px;
          padding-top: 7px;
          padding-bottom: 7px;
          background: rgba(4, 24, 19, 0.98);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.2);
        }

        .dat-brand {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
          min-width: 0;
          text-decoration: none;
          outline-offset: 5px;
        }

        .dat-logo {
          display: block;
          width: clamp(145px, 14vw, 190px);
          height: 62px;
          object-fit: contain;
          object-position: left center;
          background: transparent;
          transition:
            width 0.25s ease,
            height 0.25s ease,
            transform 0.25s ease;
        }

        .dat-scrolled .dat-logo {
          width: clamp(135px, 12vw, 170px);
          height: 53px;
        }

        .dat-brand:hover .dat-logo {
          transform: translateY(-1px);
        }

        .dat-nav-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(17px, 2.7vw, 42px);
          margin-left: auto;
        }

        .dat-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          color: rgba(255, 255, 255, 0.91);
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .dat-nav-link::after {
          content: "";
          position: absolute;
          bottom: 1px;
          left: 0;
          width: 0;
          height: 3px;
          border-radius: 5px;
          background: #b3f2a7;
          transition: width 0.25s ease;
        }

        .dat-nav-link:hover,
        .dat-nav-link.active {
          color: #fff;
        }

        .dat-nav-link:hover::after,
        .dat-nav-link.active::after {
          width: 100%;
        }

        .dat-plan-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 46px;
          padding: 0 20px;
          flex-shrink: 0;
          border: 1px solid rgba(255, 222, 112, 0.65);
          border-radius: 40px;
          background: linear-gradient(135deg, #ffd13d, #ffb900);
          color: #17190f;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          white-space: nowrap;
          box-shadow: 0 5px 18px rgba(255, 189, 23, 0.12);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .dat-plan-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 189, 23, 0.28);
        }

        .dat-plan-arrow {
          font-size: 10px;
          transition: transform 0.2s ease;
        }

        .dat-plan-btn:hover .dat-plan-arrow {
          transform: translateX(3px);
        }

        .dat-menu-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          flex: 0 0 auto;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
          font-size: 20px;
          cursor: pointer;
        }

        .dat-menu-toggle:hover {
          border-color: var(--dat-gold);
          color: var(--dat-gold);
        }

        .dat-mobile-overlay {
          display: none;
        }

        @media (max-width: 1050px) {
          .dat-navbar {
            padding-left: 3.5%;
            padding-right: 3.5%;
            gap: 18px;
          }

          .dat-logo {
            width: 145px;
          }

          .dat-nav-center {
            gap: 17px;
          }

          .dat-nav-link {
            font-size: 12px;
          }

          .dat-plan-btn {
            padding: 0 14px;
            gap: 8px;
          }
        }

        @media (max-width: 760px) {
          .dat-navbar,
          .dat-navbar.dat-scrolled {
            min-height: 72px;
            padding: 8px 5%;
            gap: 12px;
          }

          .dat-logo,
          .dat-scrolled .dat-logo {
            width: 145px;
            height: 53px;
          }

          .dat-menu-toggle {
            display: inline-flex;
            position: relative;
            z-index: 1103;
          }

          .dat-nav-center {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 1102;
            width: min(86vw, 350px);
            height: 100vh;
            height: 100dvh;
            padding: 95px 25px 30px;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 4px;
            overflow-y: auto;
            overscroll-behavior: contain;
            background: linear-gradient(160deg, #0b382c, #041b15);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
            box-shadow: -15px 0 45px rgba(0, 0, 0, 0.3);
            transform: translateX(105%);
            visibility: hidden;
            pointer-events: none;
            transition:
              transform 0.3s ease,
              visibility 0.3s ease;
          }

          .dat-nav-center.open {
            transform: translateX(0);
            visibility: visible;
            pointer-events: auto;
          }

          .dat-nav-link {
            width: 100%;
            min-height: 52px;
            justify-content: flex-start;
            padding: 12px 3px;
            font-size: 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          }

          .dat-nav-link::after {
            bottom: 0;
            height: 2px;
          }

          .dat-nav-link.active::after,
          .dat-nav-link:hover::after {
            width: 40px;
          }

          .dat-plan-btn {
            width: 100%;
            min-height: 48px;
            margin-top: 18px;
            padding: 0 12px;
            font-size: 14px;
          }

          .dat-mobile-overlay {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 1101;
            width: 100%;
            height: 100%;
            border: none;
            background: rgba(0, 0, 0, 0.58);
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
            cursor: pointer;
          }
        }

        @media (max-width: 380px) {
          .dat-navbar,
          .dat-navbar.dat-scrolled {
            padding-left: 4%;
            padding-right: 4%;
          }

          .dat-logo,
          .dat-scrolled .dat-logo {
            width: 130px;
            height: 48px;
          }

          .dat-menu-toggle {
            width: 40px;
            height: 40px;
          }

          .dat-nav-center {
            width: min(89vw, 320px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dat-navbar *,
          .dat-navbar *::before,
          .dat-navbar *::after {
            transition: none !important;
          }
        }
      `}</style>

      <header className={`dat-navbar ${scrolled ? "dat-scrolled" : ""}`}>
        <Link
          to="/"
          className="dat-brand"
          aria-label="Dandeli Adventure Thrills home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            className="dat-logo"
            src="/logo.png"
            alt="Dandeli Adventure Thrills"
          />
        </Link>

        <nav
          id="dat-navigation"
          className={`dat-nav-center ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
          aria-hidden={undefined}
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `dat-nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="dat-plan-btn"
            onClick={() => setMenuOpen(false)}
          >
            <FaCalendarAlt />
            <span>Plan Your Trip</span>
            <FaChevronRight className="dat-plan-arrow" />
          </Link>
        </nav>

        {menuOpen && (
          <button
            type="button"
            className="dat-mobile-overlay"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <button
          type="button"
          className="dat-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="dat-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>
    </>
  );
}
