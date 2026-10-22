import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaClock,
  FaArrowRight,
  FaPaperPlane,
  FaCheckCircle,
  FaCompass,
} from "react-icons/fa";

const CONTACT = {
  phone: "+91 95915 25484",
  whatsapp: "919591525484",
  address:
    "H/No 235, Near Nagadevata Temple, Ambewadi, Dandeli, Karnataka 581325",
  instagram:
    "https://www.instagram.com/p/B3WXZfbnx-x/?obrf=MTZ4Y2gzbjh4aGdwaQ==",
  facebook:
    "https://www.facebook.com/Dandeli-adventure-thrills-639647889845123/",
  email: "",
};

const LOCAL_CONTACT_IMAGE = "/images/contact.png";

const FALLBACK_CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=85";

function ContactHeroImage() {
  const [image, setImage] = useState(LOCAL_CONTACT_IMAGE);

  return (
    <img
      src={image}
      alt="Beautiful green forest around Dandeli"
      onError={() => {
        if (image !== FALLBACK_CONTACT_IMAGE) {
          setImage(FALLBACK_CONTACT_IMAGE);
        }
      }}
    />
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = (message) =>
    `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^[0-9+\s()-]{7,20}$/.test(form.phone.trim())) {
      nextErrors.phone = "Please enter a valid contact number.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please enter your message.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const message = [
      "Hello Dandeli Adventure Thrills!",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Enquiry: ${form.subject}`,
      `Message: ${form.message.trim()}`,
    ].join("\n");

    setSubmitted(true);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  const styles = `
    .dat-contact, .dat-contact * {
      box-sizing: border-box;
    }

    .dat-contact {
      --dc-green: #082b23;
      --dc-green-light: #124737;
      --dc-gold: #ffbd17;
      --dc-text: #354940;
      --dc-muted: #718078;
      width: 100%;
      overflow: hidden;
      color: var(--dc-green);
      background: #fffefa;
      font-family: inherit;
    }

    .dat-contact button,
    .dat-contact input,
    .dat-contact textarea,
    .dat-contact select {
      font: inherit;
    }

    .dat-contact button,
    .dat-contact a {
      -webkit-tap-highlight-color: transparent;
    }

    .dat-contact-container {
      width: min(1200px, calc(100% - 48px));
      margin: 0 auto;
    }

    .dat-contact-hero {
      position: relative;
      display: flex;
      align-items: center;
      min-height: 430px;
      overflow: hidden;
      isolation: isolate;
      background: var(--dc-green);
    }

    .dat-contact-hero > img {
      position: absolute;
      inset: 0;
      z-index: -2;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .dat-contact-hero::after {
      position: absolute;
      inset: 0;
      z-index: -1;
      content: "";
      background: linear-gradient(
        90deg,
        rgba(3, 25, 19, .96) 0%,
        rgba(3, 25, 19, .82) 48%,
        rgba(3, 25, 19, .32) 100%
      );
    }

    .dat-contact-hero-content {
      padding: 70px 0;
      max-width: 760px;
      color: #fff;
    }

    .dat-contact-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 18px;
      color: var(--dc-gold);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .dat-contact-hero h1 {
      margin: 0 0 20px;
      color: #fff;
      font-size: clamp(40px, 5.5vw, 66px);
      font-weight: 900;
      line-height: 1.1;
      letter-spacing: -1.8px;
    }

    .dat-contact-hero h1 span {
      color: var(--dc-gold);
    }

    .dat-contact-hero p {
      max-width: 620px;
      margin: 0;
      color: #dce8e0;
      font-size: 15px;
      line-height: 1.9;
    }

    .dat-contact-hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 13px;
      margin-top: 28px;
    }

    .dat-contact-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 49px;
      padding: 14px 23px;
      border: 1px solid transparent;
      border-radius: 999px;
      background: var(--dc-gold);
      color: #14291d;
      font-size: 12px;
      font-weight: 900;
      text-align: center;
      text-decoration: none;
      transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
      cursor: pointer;
    }

    .dat-contact-btn:hover {
      transform: translateY(-3px);
      background: #ffd15a;
      box-shadow: 0 12px 30px #ffbd172e;
    }

    .dat-contact-btn-outline {
      border-color: #ffffff80;
      background: transparent;
      color: white;
    }

    .dat-contact-btn-outline:hover {
      background: #ffffff19;
      color: white;
    }

    .dat-contact-strip {
      background: var(--dc-green);
      color: white;
    }

    .dat-contact-strip-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      padding-top: 24px;
      padding-bottom: 24px;
    }

    .dat-contact-strip-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 13px;
      padding: 8px 18px;
    }

    .dat-contact-strip-item + .dat-contact-strip-item {
      border-left: 1px solid #ffffff30;
    }

    .dat-contact-strip-icon {
      display: grid;
      place-items: center;
      flex-shrink: 0;
      width: 45px;
      height: 45px;
      border-radius: 14px;
      background: #ffbd1720;
      color: var(--dc-gold);
      font-size: 18px;
    }

    .dat-contact-strip-item strong {
      display: block;
      color: white;
      font-size: 12px;
    }

    .dat-contact-strip-item span {
      display: block;
      margin-top: 5px;
      color: #cbd9d0;
      font-size: 11px;
      line-height: 1.6;
    }

    .dat-contact-main {
      padding: 85px 0;
      background: #fffefa;
    }

    .dat-contact-section-heading {
      max-width: 730px;
      margin: 0 auto 43px;
      text-align: center;
    }

    .dat-contact-label {
      display: inline-block;
      margin-bottom: 15px;
      color: #168258;
      font-size: 11px;
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .dat-contact-section-heading h2 {
      margin: 0 0 15px;
      color: var(--dc-green);
      font-size: clamp(30px, 4vw, 45px);
      font-weight: 900;
      letter-spacing: -1px;
      line-height: 1.2;
    }

    .dat-contact-section-heading h2 span {
      color: #c38b08;
    }

    .dat-contact-section-heading p {
      margin: 0;
      color: var(--dc-muted);
      font-size: 14px;
      line-height: 1.9;
    }

    .dat-contact-layout {
      display: grid;
      grid-template-columns: .9fr 1.1fr;
      gap: 30px;
      align-items: stretch;
    }

    .dat-contact-info {
      padding: 34px;
      border-radius: 22px;
      background: var(--dc-green);
      color: white;
    }

    .dat-contact-info h3 {
      margin: 0 0 13px;
      color: white;
      font-size: 25px;
      font-weight: 900;
    }

    .dat-contact-info-intro {
      margin: 0 0 30px;
      color: #cbdad1;
      font-size: 13px;
      line-height: 1.9;
    }

    .dat-contact-info-list {
      display: grid;
      gap: 23px;
    }

    .dat-contact-info-row {
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }

    .dat-contact-info-icon {
      display: grid;
      place-items: center;
      flex-shrink: 0;
      width: 43px;
      height: 43px;
      border-radius: 13px;
      background: #ffbd171c;
      color: var(--dc-gold);
      font-size: 16px;
    }

    .dat-contact-info-row strong {
      display: block;
      margin: 2px 0 7px;
      color: white;
      font-size: 12px;
      font-weight: 900;
    }

    .dat-contact-info-row p,
    .dat-contact-info-row a {
      display: block;
      margin: 0;
      color: #d1ded6;
      font-size: 12px;
      line-height: 1.8;
      overflow-wrap: anywhere;
      text-decoration: none;
    }

    .dat-contact-info-row a:hover {
      color: var(--dc-gold);
    }

    .dat-contact-socials {
      display: flex;
      flex-wrap: wrap;
      gap: 11px;
      margin-top: 32px;
      padding-top: 25px;
      border-top: 1px solid #ffffff2b;
    }

    .dat-contact-social {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 43px;
      padding: 11px 15px;
      border: 1px solid #ffffff3d;
      border-radius: 999px;
      color: white;
      font-size: 11px;
      font-weight: 800;
      text-decoration: none;
      transition: .25s ease;
    }

    .dat-contact-social:hover {
      transform: translateY(-3px);
      border-color: var(--dc-gold);
      background: #ffbd1717;
      color: var(--dc-gold);
    }

    .dat-contact-form-card {
      padding: 36px;
      border: 1px solid #e6ebe3;
      border-radius: 22px;
      background: #fff;
      box-shadow: 0 15px 45px #082b2309;
    }

    .dat-contact-form-card h3 {
      margin: 0 0 10px;
      color: var(--dc-green);
      font-size: 25px;
      font-weight: 900;
    }

    .dat-contact-form-card > p {
      margin: 0 0 26px;
      color: var(--dc-muted);
      font-size: 13px;
      line-height: 1.8;
    }

    .dat-contact-form {
      display: grid;
      gap: 18px;
    }

    .dat-contact-form-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    .dat-contact-field {
      display: flex;
      min-width: 0;
      flex-direction: column;
      gap: 8px;
    }

    .dat-contact-field label {
      color: #344a3e;
      font-size: 11px;
      font-weight: 900;
    }

    .dat-contact-field input,
    .dat-contact-field select,
    .dat-contact-field textarea {
      width: 100%;
      min-width: 0;
      padding: 13px 14px;
      border: 1px solid #e1e8df;
      border-radius: 11px;
      outline: none;
      background: #fbfcf8;
      color: var(--dc-green);
      font-size: 12px;
      transition: border-color .2s ease, box-shadow .2s ease;
    }

    .dat-contact-field input:focus,
    .dat-contact-field select:focus,
    .dat-contact-field textarea:focus {
      border-color: #1b8058;
      box-shadow: 0 0 0 3px #1b805814;
    }

    .dat-contact-field textarea {
      min-height: 125px;
      resize: vertical;
      line-height: 1.7;
    }

    .dat-contact-field .dat-contact-error {
      margin: 0;
      color: #b42318;
      font-size: 11px;
    }

    .dat-contact-form .dat-contact-btn {
      width: 100%;
      border: 0;
    }

    .dat-contact-success {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 13px;
      border: 1px solid #b7e4c7;
      border-radius: 11px;
      background: #effaf2;
      color: #176536;
      font-size: 12px;
      line-height: 1.7;
    }

    .dat-contact-social-section {
      padding: 0 0 85px;
      background: #fffefa;
    }

    .dat-contact-social-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
    }

    .dat-contact-social-card {
      display: flex;
      align-items: center;
      gap: 17px;
      padding: 25px;
      border: 1px solid #e5ebe2;
      border-radius: 17px;
      background: #fff;
      color: var(--dc-green);
      text-decoration: none;
      transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
    }

    .dat-contact-social-card:hover {
      transform: translateY(-5px);
      border-color: #b6cbb7;
      box-shadow: 0 15px 35px #082b2310;
    }

    .dat-contact-social-card-icon {
      display: grid;
      place-items: center;
      flex-shrink: 0;
      width: 53px;
      height: 53px;
      border-radius: 16px;
      background: #edf5e9;
      color: #17613f;
      font-size: 22px;
    }

    .dat-contact-social-card strong {
      display: block;
      margin-bottom: 6px;
      font-size: 14px;
    }

    .dat-contact-social-card span {
      display: block;
      color: var(--dc-muted);
      font-size: 11px;
      line-height: 1.6;
    }

    .dat-contact-social-card-arrow {
      margin-left: auto;
      color: #b68a20;
    }

    .dat-contact-visit {
      padding: 70px 0;
      background: #f2f6ef;
    }

    .dat-contact-visit-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    .dat-contact-visit-copy {
      max-width: 760px;
    }

    .dat-contact-visit h2 {
      margin: 0 0 12px;
      color: var(--dc-green);
      font-size: clamp(27px, 3.4vw, 39px);
      font-weight: 900;
      line-height: 1.25;
    }

    .dat-contact-visit h2 span {
      color: #c38b08;
    }

    .dat-contact-visit p {
      margin: 0;
      color: var(--dc-muted);
      font-size: 13px;
      line-height: 1.9;
    }

    .dat-contact a:focus-visible,
    .dat-contact button:focus-visible,
    .dat-contact input:focus-visible,
    .dat-contact select:focus-visible,
    .dat-contact textarea:focus-visible {
      outline: 3px solid #e6a600;
      outline-offset: 4px;
    }

    @media (max-width: 950px) {
      .dat-contact-layout {
        grid-template-columns: 1fr;
      }

      .dat-contact-info-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .dat-contact-info-row:last-child {
        grid-column: 1 / -1;
      }

      .dat-contact-social-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 650px) {
      .dat-contact-container {
        width: calc(100% - 34px);
      }

      .dat-contact-hero {
        min-height: 420px;
      }

      .dat-contact-hero::after {
        background: linear-gradient(90deg, rgba(3,25,19,.94), rgba(3,25,19,.74));
      }

      .dat-contact-hero-content {
        padding: 57px 0;
      }

      .dat-contact-hero h1 {
        font-size: clamp(38px, 10vw, 53px);
        letter-spacing: -1px;
      }

      .dat-contact-hero p {
        font-size: 13px;
      }

      .dat-contact-hero-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .dat-contact-btn {
        width: 100%;
      }

      .dat-contact-strip-grid {
        grid-template-columns: 1fr;
        padding-top: 10px;
        padding-bottom: 10px;
      }

      .dat-contact-strip-item {
        justify-content: flex-start;
        padding: 14px 4px;
      }

      .dat-contact-strip-item + .dat-contact-strip-item {
        border-top: 1px solid #ffffff24;
        border-left: 0;
      }

      .dat-contact-main {
        padding: 58px 0;
      }

      .dat-contact-section-heading {
        margin-bottom: 30px;
      }

      .dat-contact-info,
      .dat-contact-form-card {
        padding: 25px 21px;
        border-radius: 17px;
      }

      .dat-contact-info-list {
        grid-template-columns: 1fr;
        gap: 19px;
      }

      .dat-contact-info-row:last-child {
        grid-column: auto;
      }

      .dat-contact-form-grid {
        grid-template-columns: 1fr;
        gap: 18px;
      }

      .dat-contact-social-section {
        padding-bottom: 58px;
      }

      .dat-contact-social-card {
        padding: 19px;
      }

      .dat-contact-visit {
        padding: 52px 0;
      }

      .dat-contact-visit-inner {
        align-items: stretch;
        flex-direction: column;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dat-contact *,
      .dat-contact *::before,
      .dat-contact *::after {
        scroll-behavior: auto !important;
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="dat-contact">
        {/* Hero */}
        <section className="dat-contact-hero">
          <ContactHeroImage />

          <div className="dat-contact-container">
            <div className="dat-contact-hero-content">
              <div className="dat-contact-eyebrow">
                <FaCompass /> WE'RE HERE TO HELP
              </div>

              <h1>
                Let's Plan Your
                <br />
                <span>Dandeli Adventure.</span>
              </h1>

              <p>
                Have questions about our packages, sightseeing, activities or
                stay? Get in touch with Dandeli Adventure Thrills. We would
                love to help you plan your visit.
              </p>

              <div className="dat-contact-hero-actions">
                <a
                  className="dat-contact-btn"
                  href={whatsappUrl(
                    "Hello Dandeli Adventure Thrills! I would like to enquire about your packages."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> CHAT ON WHATSAPP
                </a>

                <a className="dat-contact-btn dat-contact-btn-outline" href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
                  <FaPhoneAlt /> CALL US
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick contact information */}
        <section className="dat-contact-strip">
          <div className="dat-contact-container dat-contact-strip-grid">
            <div className="dat-contact-strip-item">
              <div className="dat-contact-strip-icon"><FaPhoneAlt /></div>
              <div>
                <strong>Call or WhatsApp</strong>
                <span>{CONTACT.phone}</span>
              </div>
            </div>

            <div className="dat-contact-strip-item">
              <div className="dat-contact-strip-icon"><FaMapMarkerAlt /></div>
              <div>
                <strong>Find Us in Dandeli</strong>
                <span>Dandeli, Karnataka 581325</span>
              </div>
            </div>

            <div className="dat-contact-strip-item">
              <div className="dat-contact-strip-icon"><FaClock /></div>
              <div>
                <strong>Adventure Enquiries</strong>
                <span>Message us for package details</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact information and form */}
        <section className="dat-contact-main">
          <div className="dat-contact-container">
            <div className="dat-contact-section-heading">
              <span className="dat-contact-label">Get In Touch</span>
              <h2>
                We'd Love to <span>Hear From You</span>
              </h2>
              <p>
                Reach out for package information, room enquiries,
                sightseeing, river activities or any questions about your
                Dandeli trip.
              </p>
            </div>

            <div className="dat-contact-layout">
              <aside className="dat-contact-info">
                <h3>Contact Information</h3>
                <p className="dat-contact-info-intro">
                  Contact our team directly. We can help you enquire about
                  your plans and the available options.
                </p>

                <div className="dat-contact-info-list">
                  <div className="dat-contact-info-row">
                    <div className="dat-contact-info-icon"><FaPhoneAlt /></div>
                    <div>
                      <strong>Phone / WhatsApp</strong>
                      <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
                      <a
                        href={whatsappUrl("Hello Dandeli Adventure Thrills! I have a question.")
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Send a WhatsApp message
                      </a>
                    </div>
                  </div>

                  <div className="dat-contact-info-row">
                    <div className="dat-contact-info-icon"><FaMapMarkerAlt /></div>
                    <div>
                      <strong>Our Address</strong>
                      <p>{CONTACT.address}</p>
                    </div>
                  </div>

                  <div className="dat-contact-info-row">
                    <div className="dat-contact-info-icon"><FaEnvelope /></div>
                    <div>
                      <strong>Enquiries</strong>
                      <p>For package and booking enquiries, contact us on WhatsApp.</p>
                    </div>
                  </div>
                </div>

                <div className="dat-contact-socials">
                  <a
                    className="dat-contact-social"
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Instagram"
                  >
                    <FaInstagram /> Instagram
                  </a>

                  <a
                    className="dat-contact-social"
                    href={CONTACT.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Facebook"
                  >
                    <FaFacebookF /> Facebook
                  </a>

                  <a
                    className="dat-contact-social"
                    href={whatsappUrl("Hello Dandeli Adventure Thrills!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact on WhatsApp"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </aside>

              <div className="dat-contact-form-card">
                <h3>Send an Enquiry</h3>
                <p>
                  Fill in your details. Your message will open in WhatsApp so
                  you can send it directly to us.
                </p>

                <form className="dat-contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="dat-contact-form-grid">
                    <div className="dat-contact-field">
                      <label htmlFor="dat-contact-name">Your Name *</label>
                      <input
                        id="dat-contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        autoComplete="name"
                        aria-invalid={Boolean(errors.name)}
                      />
                      {errors.name && <p className="dat-contact-error">{errors.name}</p>}
                    </div>

                    <div className="dat-contact-field">
                      <label htmlFor="dat-contact-phone">Phone Number *</label>
                      <input
                        id="dat-contact-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter your number"
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.phone)}
                      />
                      {errors.phone && <p className="dat-contact-error">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="dat-contact-field">
                    <label htmlFor="dat-contact-subject">Enquiry Type</label>
                    <select
                      id="dat-contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                    >
                      <option>General Enquiry</option>
                      <option>Adventure Packages</option>
                      <option>Room Booking</option>
                      <option>River Rafting</option>
                      <option>Jungle Safari</option>
                      <option>Sightseeing</option>
                      <option>Pure Veg / Jain Food</option>
                      <option>Group Booking</option>
                    </select>
                  </div>

                  <div className="dat-contact-field">
                    <label htmlFor="dat-contact-message">Your Message *</label>
                    <textarea
                      id="dat-contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your trip, dates, number of guests or questions..."
                      aria-invalid={Boolean(errors.message)}
                    />
                    {errors.message && <p className="dat-contact-error">{errors.message}</p>}
                  </div>

                  {submitted && (
                    <div className="dat-contact-success" role="status">
                      <FaCheckCircle />
                      Your WhatsApp message window should be open. Please send
                      the message there to complete your enquiry.
                    </div>
                  )}

                  <button className="dat-contact-btn" type="submit">
                    <FaPaperPlane /> SEND ENQUIRY ON WHATSAPP <FaArrowRight />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Social media links */}
        <section className="dat-contact-social-section">
          <div className="dat-contact-container">
            <div className="dat-contact-section-heading">
              <span className="dat-contact-label">Follow Our Journey</span>
              <h2>
                Connect With <span>Us Online</span>
              </h2>
              <p>
                Follow our social pages for updates, trip inspiration and
                more from Dandeli Adventure Thrills.
              </p>
            </div>

            <div className="dat-contact-social-grid">
              <a
                className="dat-contact-social-card"
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="dat-contact-social-card-icon"><FaInstagram /></div>
                <div>
                  <strong>Instagram</strong>
                  <span>Explore our Instagram page</span>
                </div>
                <FaArrowRight className="dat-contact-social-card-arrow" />
              </a>

              <a
                className="dat-contact-social-card"
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="dat-contact-social-card-icon"><FaFacebookF /></div>
                <div>
                  <strong>Facebook</strong>
                  <span>Connect with us on Facebook</span>
                </div>
                <FaArrowRight className="dat-contact-social-card-arrow" />
              </a>

              <a
                className="dat-contact-social-card"
                href={whatsappUrl("Hello Dandeli Adventure Thrills! I would like more information.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="dat-contact-social-card-icon"><FaWhatsapp /></div>
                <div>
                  <strong>WhatsApp</strong>
                  <span>Chat with us about your trip</span>
                </div>
                <FaArrowRight className="dat-contact-social-card-arrow" />
              </a>
            </div>
          </div>
        </section>

        {/* Visit Dandeli CTA */}
        <section className="dat-contact-visit">
          <div className="dat-contact-container dat-contact-visit-inner">
            <div className="dat-contact-visit-copy">
              <span className="dat-contact-label">Your Adventure Awaits</span>
              <h2>
                Ready to Explore <span>Dandeli?</span>
              </h2>
              <p>
                Reach out to ask about packages, activities and stay options.
                We look forward to helping you plan your adventure.
              </p>
            </div>

            <a
              className="dat-contact-btn"
              href={whatsappUrl("Hello Dandeli Adventure Thrills! I would like to plan a Dandeli trip. Please share your packages.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> PLAN YOUR TRIP <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}