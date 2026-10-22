import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLeaf,
  FaHome,
  FaCompass,
  FaPhoneAlt,
  FaUtensils,
} from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "919591525484";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Dandeli Adventure Thrills! I would like to know about your packages, resorts, vegetarian food and adventure activities."
  )}`;

  const instagramLink =
    "https://www.instagram.com/p/B3WXZfbnx-x/?obrf=MTZ4Y2gzbjh4aGdwaQ==";

  const facebookLink =
    "https://www.facebook.com/Dandeli-adventure-thrills-639647889845123/";

  const developerLink = "https://smyvisiontechnologies.com/";

  const address =
    "H/No 235, Near Nagadevata Temple, Ambewadi, Dandeli, Karnataka 581325";

  const quickLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaLeaf /> },
    {
      name: "Sightseeings",
      path: "/sightseeings",
      icon: <FaCompass />,
    },
    { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
    { name: "Pure Veg Resorts", path: "/veg", icon: <FaUtensils /> },
  ];

  const styles = `
    .dat-footer,
    .dat-footer * {
      box-sizing: border-box;
    }

    .dat-footer {
      --dat-gold: #ffbd17;
      --dat-light-green: #a5e9a5;
      position: relative;
      overflow: hidden;
      background: linear-gradient(
        135deg,
        #041b16 0%,
        #092c24 48%,
        #041a16 100%
      );
      color: #f6f8f5;
      font-family: inherit;
      isolation: isolate;
    }

    .dat-footer::before {
      content: "";
      position: absolute;
      width: 330px;
      height: 330px;
      top: -210px;
      right: -80px;
      border-radius: 50%;
      background: rgba(255, 189, 23, 0.07);
      filter: blur(8px);
      pointer-events: none;
    }

    .dat-footer-main {
      position: relative;
      z-index: 1;
      width: min(1240px, 100%);
      margin: 0 auto;
      padding: 58px 28px 42px;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr 1fr;
      gap: 42px;
      align-items: start;
    }

    .dat-footer-brand,
    .dat-footer-quicklinks,
    .dat-footer-contact {
      min-width: 0;
    }

    .dat-footer-logo {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
      color: var(--dat-gold);
      text-decoration: none;
    }

    .dat-footer-logo-icon {
      display: grid;
      place-items: center;
      width: 45px;
      height: 45px;
      flex-shrink: 0;
      border: 1px solid rgba(255, 189, 23, 0.55);
      border-radius: 14px;
      background: rgba(255, 189, 23, 0.1);
      font-size: 22px;
    }

    .dat-footer-logo-text {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .dat-footer-logo-text strong {
      color: #ffffff;
      font-size: 23px;
      font-weight: 900;
      line-height: 1.1;
      letter-spacing: -0.7px;
    }

    .dat-footer-logo-text span {
      color: var(--dat-gold);
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 3px;
    }

    .dat-footer-description {
      max-width: 510px;
      margin: 0 0 25px;
      color: #c3d2cc;
      font-size: 14px;
      line-height: 1.9;
    }

    .dat-footer-social-heading {
      margin: 0 0 13px;
      color: #ffffff;
      font-size: 14px;
      font-weight: 800;
    }

    .dat-footer-socials {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
    }

    .dat-footer-social {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 46px;
      height: 46px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 13px;
      background: rgba(255, 255, 255, 0.07);
      color: #ffffff;
      font-size: 20px;
      text-decoration: none;
      transition:
        transform 0.25s ease,
        color 0.25s ease,
        background 0.25s ease,
        border-color 0.25s ease;
    }

    .dat-footer-social:hover {
      transform: translateY(-4px);
      background: var(--dat-gold);
      border-color: var(--dat-gold);
      color: #10251d;
    }

    .dat-footer-social-whatsapp {
      background: #168b4b;
      border-color: #168b4b;
      color: #ffffff;
      box-shadow: 0 0 18px rgba(37, 211, 102, 0.22);
    }

    .dat-footer-social-whatsapp:hover {
      background: #25d366;
      border-color: #25d366;
      color: #062c18;
      box-shadow: 0 0 22px rgba(37, 211, 102, 0.35);
    }

    .dat-footer-social:focus-visible,
    .dat-footer-credit a:focus-visible,
    .dat-footer-quicklink:focus-visible {
      outline: 3px solid var(--dat-light-green);
      outline-offset: 4px;
    }

    .dat-footer-heading {
      margin: 4px 0 22px;
      color: #ffffff;
      font-size: 19px;
      font-weight: 800;
      letter-spacing: 0.1px;
    }

    .dat-footer-heading::after {
      content: "";
      display: block;
      width: 48px;
      height: 3px;
      margin-top: 12px;
      border-radius: 20px;
      background: var(--dat-gold);
    }

    .dat-footer-quicklinks-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    .dat-footer-quicklink {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      width: fit-content;
      max-width: 100%;
      color: #c3d2cc;
      font-size: 14px;
      line-height: 1.6;
      text-decoration: none;
      transition: color 0.2s ease, transform 0.2s ease;
    }

    .dat-footer-quicklink svg {
      flex-shrink: 0;
      color: var(--dat-gold);
      font-size: 14px;
    }

    .dat-footer-quicklink:hover {
      color: var(--dat-gold);
      transform: translateX(4px);
    }

    .dat-footer-address {
      display: flex;
      gap: 15px;
      align-items: flex-start;
      color: #c3d2cc;
      font-size: 14px;
      line-height: 1.9;
    }

    .dat-footer-address-icon {
      display: grid;
      place-items: center;
      width: 42px;
      height: 42px;
      flex: 0 0 42px;
      border-radius: 12px;
      background: rgba(255, 189, 23, 0.12);
      color: var(--dat-gold);
      font-size: 18px;
    }

    .dat-footer-address p {
      margin: 0;
      overflow-wrap: anywhere;
    }

    .dat-footer-contact-note {
      margin: 20px 0 0;
      color: #c3d2cc;
      font-size: 13px;
      line-height: 1.8;
    }

    .dat-footer-contact-note a {
      color: var(--dat-gold);
      font-weight: 800;
      text-decoration: none;
    }

    .dat-footer-contact-note a:hover {
      color: #ffffff;
    }

    .dat-footer-keywords {
      position: relative;
      z-index: 1;
      width: min(1240px, 100%);
      margin: 0 auto;
      padding: 0 28px 32px;
    }

    .dat-footer-keywords h3 {
      margin: 0 0 12px;
      color: #ffffff;
      font-size: 14px;
      font-weight: 800;
    }

    .dat-footer-keywords p {
      margin: 0;
      color: #aebfb8;
      font-size: 12px;
      line-height: 1.9;
      overflow-wrap: anywhere;
    }

    .dat-footer-bottom {
      position: relative;
      z-index: 1;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(0, 0, 0, 0.15);
    }

    .dat-footer-bottom-inner {
      width: min(1240px, 100%);
      min-height: 76px;
      margin: 0 auto;
      padding: 18px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .dat-footer-copyright {
      margin: 0;
      color: #aebfb8;
      font-size: 12px;
      line-height: 1.8;
    }

    .dat-footer-credit {
      margin: 0;
      color: #c3d2cc;
      font-size: 13px;
      line-height: 1.8;
      text-align: right;
    }

    .dat-footer-credit a {
      display: inline-block;
      color: var(--dat-gold);
      font-weight: 900;
      letter-spacing: 0.5px;
      text-decoration: none;
      transition: color 0.25s ease, text-shadow 0.25s ease;
    }

    .dat-footer-credit a:hover {
      color: #ffffff;
      text-shadow: 0 0 14px rgba(255, 189, 23, 0.55);
    }

    @media (min-width: 1500px) {
      .dat-footer-main,
      .dat-footer-bottom-inner,
      .dat-footer-keywords {
        width: min(1320px, 100%);
      }
    }

    @media (max-width: 950px) {
      .dat-footer-main {
        grid-template-columns: 1.2fr 1fr;
        gap: 38px;
      }

      .dat-footer-contact {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 600px) {
      .dat-footer-main {
        grid-template-columns: 1fr;
        gap: 34px;
        padding: 42px 22px 32px;
      }

      .dat-footer-contact {
        grid-column: auto;
      }

      .dat-footer-description {
        max-width: 100%;
      }

      .dat-footer-keywords {
        padding: 0 22px 28px;
      }

      .dat-footer-bottom-inner {
        min-height: auto;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        padding: 20px 22px;
      }

      .dat-footer-credit {
        text-align: left;
      }
    }

    @media (max-width: 420px) {
      .dat-footer-main {
        padding: 34px 17px 28px;
        gap: 30px;
      }

      .dat-footer-logo-text strong {
        font-size: 20px;
      }

      .dat-footer-description,
      .dat-footer-address {
        font-size: 13px;
      }

      .dat-footer-keywords {
        padding: 0 17px 25px;
      }

      .dat-footer-bottom-inner {
        padding: 18px 17px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dat-footer *,
      .dat-footer *::before,
      .dat-footer *::after {
        transition: none !important;
        animation: none !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <footer className="dat-footer">
        <div className="dat-footer-main">
          {/* Brand and social media */}
          <div className="dat-footer-brand">
            <a
              className="dat-footer-logo"
              href="/"
              aria-label="Dandeli Adventure Thrills home"
            >
              <span className="dat-footer-logo-icon">
                <FaLeaf />
              </span>

              <span className="dat-footer-logo-text">
                <strong>Dandeli</strong>
                <span>ADVENTURE THRILLS</span>
              </span>
            </a>

            <p className="dat-footer-description">
              Discover the wild beauty of Dandeli with unforgettable
              river rafting, jungle stays, riverside resorts and
              camping adventures. Explore Dandeli resort packages,
              swimming pool resorts, jungle experiences and
              vegetarian food for your next getaway.
            </p>

            <h3 className="dat-footer-social-heading">Follow Us On</h3>

            <div className="dat-footer-socials">
              <a
                className="dat-footer-social"
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>

              <a
                className="dat-footer-social"
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                title="Follow us on Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                className="dat-footer-social dat-footer-social-whatsapp"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                title="Chat with us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Only the five requested page links */}
          <nav
            className="dat-footer-quicklinks"
            aria-label="Quick Links"
          >
            <h3 className="dat-footer-heading">Quick Links</h3>

            <ul className="dat-footer-quicklinks-list">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a className="dat-footer-quicklink" href={link.path}>
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Address and WhatsApp contact */}
          <div className="dat-footer-contact">
            <h3 className="dat-footer-heading">Visit Us</h3>

            <div className="dat-footer-address">
              <span className="dat-footer-address-icon">
                <FaMapMarkerAlt />
              </span>

              <p>{address}</p>
            </div>

            <p className="dat-footer-contact-note">
              Looking for the best Dandeli resort, affordable resort
              packages, swimming pool resorts or vegetarian food?
              {" "}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact us on WhatsApp
              </a>
              {" "}for package details and bookings.
            </p>
          </div>
        </div>

        {/* SEO keyword content */}
        <div className="dat-footer-keywords">
          <h3>Explore Dandeli Resorts &amp; Packages</h3>

          <p>
            Dandeli Resorts · Dandeli Resort Packages · Dandeli Jungle
            Resort · Dandeli Swimming Pool Resorts · Best Dandeli
            Resorts · Awesome Dandeli Resort · Swimming Pool Resort ·
            Best Dandeli Resort · Best Dandeli Swimming Pool Resort ·
            Dandeli Swimming Pool Resort · Cheapest Dandeli Packages ·
            Dandeli Resort · Cheapest Dandeli · Dandeli Veg Food ·
            Vegetarian Food in Dandeli.
          </p>
        </div>

        {/* Copyright and developer credit */}
        <div className="dat-footer-bottom">
          <div className="dat-footer-bottom-inner">
            <p className="dat-footer-copyright">
              © {new Date().getFullYear()} Dandeli Adventure Thrills.
              All rights reserved.
            </p>

            <p className="dat-footer-credit">
              Developed by{" "}
              <a
                href={developerLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit SMYVISION TECHNOLOGIES"
              >
                SMYVISION TECHNOLOGIES
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
