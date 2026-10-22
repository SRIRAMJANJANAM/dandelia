import React, { useState } from "react";
import {
  FaLeaf,
  FaSeedling,
  FaHeart,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const UNSPLASH_FALLBACKS = {
  hero: "/images/pure.webp",
  about:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1100&q=85",
  jain:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85",
};

function FallbackImage({
  local,
  fallback,
  alt,
  className,
  loading = "lazy",
}) {
  const [src, setSrc] = useState(local);

  return (
    <img
      className={className || ""}
      src={src}
      alt={alt}
      loading={loading}
      onError={() => {
        if (src !== fallback) {
          setSrc(fallback);
        }
      }}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        background: "#e5eee7",
      }}
    />
  );
}

export default function Veg() {
  const whatsappLink =
    "https://wa.me/919591525484?text=" +
    encodeURIComponent(
      "Hi Dandeli Adventure Thrills! I would like to enquire about your Pure Veg resort, vegetarian food and Jain food options."
    );

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const styles = `
    .dat-veg, .dat-veg * {
      box-sizing: border-box;
    }

    .dat-veg {
      --green: #082b23;
      --green-light: #104536;
      --gold: #ffbd17;
      --text: #344740;
      --muted: #6b7972;
      width: 100%;
      overflow: hidden;
      background: #fffefa;
      color: var(--green);
      font-family: inherit;
    }

    .dat-veg button,
    .dat-veg input {
      font: inherit;
    }

    .dat-veg button {
      cursor: pointer;
    }

    .dat-veg-container {
      width: min(1200px, calc(100% - 48px));
      margin: 0 auto;
    }

    .dat-veg-keyword {
      display: inline-block;
      color: #ffbd17 !important;
      font-weight: 1000;
      text-shadow: 0 2px 18px rgba(255,189,23,.22);
    }

    .dat-veg-keyword-dark {
      display: inline;
      padding: 2px 8px;
      border-radius: 5px;
      background: #ffbd17;
      color: #082b23 !important;
      font-weight: 900;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
    }

    .dat-veg-hero {
      position: relative;
      display: flex;
      align-items: center;
      min-height: 490px;
      padding: 75px 0;
      isolation: isolate;
      background: var(--green);
    }

    .dat-veg-hero::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -2;
      background-image:
        linear-gradient(
          90deg,
          rgba(3,25,19,.96),
          rgba(3,25,19,.78) 48%,
          rgba(3,25,19,.30)
        ),
        var(--veg-hero-image);
      background-position: center;
      background-size: cover;
    }

    .dat-veg-hero-content {
      max-width: 760px;
      color: white;
    }

    .dat-veg-eyebrow,
    .dat-veg-label {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 17px;
      color: #14815a;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .dat-veg-eyebrow {
      color: var(--gold);
    }

    .dat-veg-hero h1 {
      margin: 0 0 20px;
      color: white;
      font-size: clamp(38px, 5vw, 65px);
      font-weight: 900;
      letter-spacing: -1.8px;
      line-height: 1.12;
    }

    .dat-veg-hero h1 span,
    .dat-veg-title span,
    .dat-veg-cta h2 span {
      color: var(--gold);
    }

    .dat-veg-hero p {
      max-width: 640px;
      margin: 0;
      color: #e0e9e4;
      font-size: 15px;
      line-height: 1.95;
    }

    .dat-veg-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 29px;
    }

    .dat-veg-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 49px;
      padding: 14px 23px;
      border: 1px solid transparent;
      border-radius: 999px;
      background: var(--gold);
      color: #14251b;
      font-size: 12px;
      font-weight: 900;
      text-decoration: none;
      transition:
        transform .25s ease,
        background .25s ease,
        box-shadow .25s ease;
    }

    .dat-veg-btn:hover {
      transform: translateY(-3px);
      background: #ffd15a;
      box-shadow: 0 12px 30px #ffbd172e;
    }

    .dat-veg-btn-outline {
      border-color: #ffffff8c;
      background: transparent;
      color: white;
    }

    .dat-veg-btn-outline:hover {
      background: #ffffff1a;
      color: white;
    }

    .dat-veg-hero-points {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 28px;
    }

    .dat-veg-hero-points span {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #e1e9e2;
      font-size: 12px;
      font-weight: 700;
    }

    .dat-veg-hero-points svg {
      color: var(--gold);
    }

    .dat-veg-resort {
      position: relative;
      padding: 68px 0;
      overflow: hidden;
      background:
        radial-gradient(
          circle at 5% 10%,
          rgba(255,189,23,.12),
          transparent 28%
        ),
        linear-gradient(135deg, #fffefa 0%, #f2f7ef 100%);
      border-bottom: 1px solid #e6ecdf;
    }

    .dat-veg-resort-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.35fr) minmax(260px, .65fr);
      gap: 45px;
      align-items: center;
    }

    .dat-veg-resort-copy {
      max-width: 790px;
    }

    .dat-veg-resort-kicker {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      margin-bottom: 15px;
      color: #14784f;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 1.7px;
      text-transform: uppercase;
    }

    .dat-veg-resort h2 {
      margin: 0 0 20px;
      color: var(--green);
      font-size: clamp(29px, 3.5vw, 43px);
      line-height: 1.22;
      letter-spacing: -1px;
      font-weight: 950;
    }

    .dat-veg-resort-copy p {
      margin: 0 0 15px;
      color: #586a60;
      font-size: 14px;
      line-height: 1.95;
    }

    .dat-veg-resort-tagline {
      margin-top: 22px !important;
      padding: 16px 19px;
      border-left: 4px solid var(--gold);
      border-radius: 0 12px 12px 0;
      background: #fff5d9;
      color: #183d2d !important;
      font-size: 14px !important;
      font-weight: 850;
    }

    .dat-veg-resort-card {
      position: relative;
      padding: 30px 25px;
      border: 1px solid #e4eadd;
      border-radius: 20px;
      background: white;
      box-shadow: 0 18px 45px rgba(8,43,35,.08);
    }

    .dat-veg-resort-card-icon {
      display: grid;
      place-items: center;
      width: 57px;
      height: 57px;
      margin-bottom: 19px;
      border-radius: 17px;
      background: #e8f4e8;
      color: #168258;
      font-size: 25px;
    }

    .dat-veg-resort-card h3 {
      margin: 0 0 12px;
      color: var(--green);
      font-size: 20px;
      font-weight: 900;
      line-height: 1.4;
    }

    .dat-veg-resort-card p {
      margin: 0 0 20px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.8;
    }

    .dat-veg-resort-card .dat-veg-btn {
      width: 100%;
    }

    .dat-veg-highlights {
      background: var(--green);
      color: white;
    }

    .dat-veg-highlights-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      padding-top: 25px;
      padding-bottom: 25px;
    }

    .dat-veg-highlight {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 8px 15px;
    }

    .dat-veg-highlight + .dat-veg-highlight {
      border-left: 1px solid #ffffff33;
    }

    .dat-veg-highlight-icon {
      display: grid;
      place-items: center;
      width: 43px;
      height: 43px;
      flex-shrink: 0;
      border-radius: 14px;
      background: #ffbd1721;
      color: var(--gold);
      font-size: 19px;
    }

    .dat-veg-highlight strong {
      display: block;
      color: white;
      font-size: 12px;
    }

    .dat-veg-highlight small {
      display: block;
      margin-top: 5px;
      color: #cbdad2;
      font-size: 10px;
    }

    .dat-veg-section,
    .dat-veg-jain {
      padding: 85px 0;
    }

    .dat-veg-story-grid,
    .dat-veg-jain-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 62px;
      align-items: center;
    }

    .dat-veg-story-image,
    .dat-veg-jain-image {
      position: relative;
      min-width: 0;
      height: 430px;
    }

    .dat-veg-story-image img,
    .dat-veg-jain-image img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;
      box-shadow: 0 18px 50px #082b231f;
    }

    .dat-veg-image-tag,
    .dat-veg-jain-tag {
      position: absolute;
      right: -14px;
      bottom: 24px;
      padding: 17px 22px;
      border-radius: 14px;
      background: var(--green);
      color: white;
      box-shadow: 0 12px 35px #0000002b;
    }

    .dat-veg-image-tag strong,
    .dat-veg-jain-tag strong {
      display: block;
      color: var(--gold);
      font-size: 20px;
    }

    .dat-veg-image-tag span,
    .dat-veg-jain-tag span {
      display: block;
      margin-top: 5px;
      color: #d6e1db;
      font-size: 11px;
    }

    .dat-veg-title {
      margin: 0 0 20px;
      color: var(--green);
      font-size: clamp(30px, 3.5vw, 44px);
      font-weight: 900;
      letter-spacing: -1.2px;
      line-height: 1.2;
    }

    .dat-veg-title span {
      color: #c38b08;
    }

    .dat-veg-story-copy p,
    .dat-veg-jain-copy > p {
      margin: 0 0 17px;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.95;
    }

    .dat-veg-benefits {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      margin: 24px 0 28px;
      padding: 0;
      list-style: none;
    }

    .dat-veg-benefit {
      display: flex;
      align-items: flex-start;
      gap: 9px;
      color: var(--text);
      font-size: 12px;
      font-weight: 700;
      line-height: 1.7;
    }

    .dat-veg-benefit svg {
      flex-shrink: 0;
      margin-top: 3px;
      color: #168258;
    }

    .dat-veg-jain {
      background: #fffefa;
    }

    .dat-veg-jain-points {
      display: grid;
      gap: 13px;
      margin-bottom: 25px;
    }

    .dat-veg-jain-point {
      display: flex;
      align-items: flex-start;
      gap: 13px;
      padding: 15px;
      border: 1px solid #e5ebe2;
      border-radius: 13px;
      background: #f7f9f3;
    }

    .dat-veg-jain-check {
      display: grid;
      place-items: center;
      flex-shrink: 0;
      width: 29px;
      height: 29px;
      border-radius: 50%;
      background: var(--green);
      color: var(--gold);
      font-size: 13px;
    }

    .dat-veg-jain-point strong {
      display: block;
      color: var(--green);
      font-size: 12px;
    }

    .dat-veg-jain-point small {
      display: block;
      margin-top: 5px;
      color: var(--muted);
      font-size: 11px;
      line-height: 1.7;
    }

    .dat-veg-cta {
      padding: 68px 0;
      background:
        radial-gradient(circle at 85% 15%, #ffbd1726, transparent 30%),
        var(--green);
    }

    .dat-veg-cta-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 35px;
    }

    .dat-veg-cta-copy {
      max-width: 760px;
    }

    .dat-veg-cta h2 {
      margin: 0 0 13px;
      color: white;
      font-size: clamp(28px, 3.5vw, 42px);
      font-weight: 900;
      line-height: 1.25;
    }

    .dat-veg-cta h2 span {
      color: var(--gold);
    }

    .dat-veg-cta p {
      margin: 0;
      color: #c7d8cf;
      font-size: 14px;
      line-height: 1.9;
    }

    .dat-veg a:focus-visible,
    .dat-veg button:focus-visible {
      outline: 3px solid #e6a600;
      outline-offset: 4px;
    }

    @media (max-width: 1000px) {
      .dat-veg-highlights-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .dat-veg-highlight:nth-child(3) {
        border-left: 0;
      }

      .dat-veg-highlight:nth-child(n+3) {
        border-top: 1px solid #ffffff29;
        padding-top: 18px;
        margin-top: 10px;
      }

      .dat-veg-story-grid,
      .dat-veg-jain-grid {
        gap: 38px;
      }

      .dat-veg-resort-grid {
        gap: 28px;
      }
    }

    @media (max-width: 700px) {
      .dat-veg-container {
        width: calc(100% - 36px);
      }

      .dat-veg-hero {
        min-height: 455px;
        padding: 60px 0;
      }

      .dat-veg-hero::before {
        background-image:
          linear-gradient(
            90deg,
            rgba(3,25,19,.93),
            rgba(3,25,19,.72)
          ),
          var(--veg-hero-image);
      }

      .dat-veg-hero h1 {
        letter-spacing: -1px;
      }

      .dat-veg-hero p {
        font-size: 14px;
      }

      .dat-veg-hero-points {
        gap: 12px 16px;
      }

      .dat-veg-hero-points span {
        font-size: 11px;
      }

      .dat-veg-resort {
        padding: 52px 0;
      }

      .dat-veg-resort-grid {
        grid-template-columns: 1fr;
        gap: 25px;
      }

      .dat-veg-resort-card {
        padding: 24px 20px;
      }

      .dat-veg-highlights-grid {
        padding-top: 14px;
        padding-bottom: 14px;
      }

      .dat-veg-highlight {
        justify-content: flex-start;
        padding: 12px 5px;
        gap: 9px;
      }

      .dat-veg-highlight-icon {
        width: 36px;
        height: 36px;
        font-size: 16px;
      }

      .dat-veg-highlight strong {
        font-size: 10px;
      }

      .dat-veg-highlight small {
        font-size: 9px;
      }

      .dat-veg-section,
      .dat-veg-jain {
        padding: 58px 0;
      }

      .dat-veg-story-grid,
      .dat-veg-jain-grid {
        grid-template-columns: 1fr;
        gap: 36px;
      }

      .dat-veg-story-image,
      .dat-veg-jain-image {
        height: 330px;
      }

      .dat-veg-image-tag,
      .dat-veg-jain-tag {
        right: 12px;
        bottom: 15px;
      }

      .dat-veg-benefits {
        grid-template-columns: 1fr;
        gap: 12px;
      }

      .dat-veg-cta {
        padding: 55px 0;
      }

      .dat-veg-cta-inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
      }
    }

    @media (max-width: 420px) {
      .dat-veg-container {
        width: calc(100% - 30px);
      }

      .dat-veg-hero {
        min-height: 430px;
        padding: 50px 0;
      }

      .dat-veg-eyebrow {
        font-size: 10px;
        letter-spacing: 1.5px;
      }

      .dat-veg-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .dat-veg-btn {
        width: 100%;
        padding: 13px 16px;
      }

      .dat-veg-story-image,
      .dat-veg-jain-image {
        height: 275px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dat-veg *,
      .dat-veg *::before,
      .dat-veg *::after {
        scroll-behavior: auto !important;
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="dat-veg">
        {/* Hero */}
        <section
          className="dat-veg-hero"
          style={{
            "--veg-hero-image": `url("${UNSPLASH_FALLBACKS.hero}")`,
          }}
        >
          <div className="dat-veg-container">
            <div className="dat-veg-hero-content">
              <div className="dat-veg-eyebrow">
                <FaLeaf /> 100% PURE VEG · FRESH & NATURAL
              </div>

              <h1>
                <span className="dat-veg-keyword">PURE VEG FOOD.</span>
                <br />
                Experience <span>Goodness.</span>
              </h1>

              <p>
                Discover delicious vegetarian food made with care, fresh
                ingredients and lots of love. Enjoy Indian favourites and Jain
                food options for a wholesome dining experience.
              </p>

              <div className="dat-veg-actions">
                <button
                  type="button"
                  className="dat-veg-btn"
                  onClick={() => scrollTo("dat-veg-resort")}
                >
                  EXPLORE PURE VEG RESORTS <FaArrowRight />
                </button>

                <button
                  type="button"
                  className="dat-veg-btn dat-veg-btn-outline"
                  onClick={() => scrollTo("dat-veg-jain")}
                >
                  <FaLeaf /> EXPLORE JAIN FOOD
                </button>
              </div>

              <div className="dat-veg-hero-points">
                <span><FaCheckCircle /> 100% Vegetarian</span>
                <span><FaCheckCircle /> Fresh Ingredients</span>
                <span><FaHeart /> Made with Love</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pure Veg Resort */}
        <section className="dat-veg-resort" id="dat-veg-resort">
          <div className="dat-veg-container dat-veg-resort-grid">
            <div className="dat-veg-resort-copy">
              <span className="dat-veg-resort-kicker">
                <FaLeaf /> Nature · Comfort · Vegetarian Dining
              </span>

              <h2>
                <span className="dat-veg-keyword-dark">Pure Veg Resort</span>{" "}
                in Dandeli – A Perfect Nature Getaway
              </h2>

              <p>
                Experience the beauty of Dandeli with a relaxing stay at a
                pure vegetarian resort, surrounded by lush greenery and the
                tranquillity of nature. Perfect for families, couples, and
                groups, our resort offers a peaceful atmosphere, delicious
                vegetarian food, and a comfortable stay away from the hustle
                and bustle of city life.
              </p>

              <p>
                Enjoy Dandeli’s exciting adventures, explore its scenic
                landscapes, and create unforgettable memories with your loved
                ones. Whether you are planning a family vacation, a weekend
                escape, or a group trip, a pure vegetarian resort in Dandeli
                offers the perfect blend of comfort, nature, and hospitality.
              </p>

              <p className="dat-veg-resort-tagline">
                Stay close to nature. Enjoy pure vegetarian food. Make memories
                that last forever!
              </p>
            </div>

            <aside className="dat-veg-resort-card">
              <div className="dat-veg-resort-card-icon">
                <FaSeedling />
              </div>

              <h3>
                Your <span className="dat-veg-keyword-dark">Pure Veg</span>{" "}
                Nature Escape
              </h3>

              <p>
                Planning a family holiday, a weekend getaway, or a group trip
                to Dandeli? Enquire about vegetarian food, Jain food options,
                resort stays and availability.
              </p>

              <a
                className="dat-veg-btn"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> ENQUIRE NOW <FaArrowRight />
              </a>
            </aside>
          </div>
        </section>

        {/* Highlights */}
        <section className="dat-veg-highlights">
          <div className="dat-veg-container dat-veg-highlights-grid">
            <div className="dat-veg-highlight">
              <div className="dat-veg-highlight-icon"><FaLeaf /></div>
              <div>
                <strong>100% Pure Veg</strong>
                <small>No meat, no eggs</small>
              </div>
            </div>

            <div className="dat-veg-highlight">
              <div className="dat-veg-highlight-icon"><FaSeedling /></div>
              <div>
                <strong>Fresh Ingredients</strong>
                <small>Carefully selected</small>
              </div>
            </div>

            <div className="dat-veg-highlight">
              <div className="dat-veg-highlight-icon"><FaHeart /></div>
              <div>
                <strong>Made with Love</strong>
                <small>Homely & delicious</small>
              </div>
            </div>

            <div className="dat-veg-highlight">
              <div className="dat-veg-highlight-icon"><FaCheckCircle /></div>
              <div>
                <strong>Jain Food Options</strong>
                <small>Sattvik choices</small>
              </div>
            </div>
          </div>
        </section>

        {/* Pure Veg and Jain Food Introduction */}
        <section className="dat-veg-section">
          <div className="dat-veg-container dat-veg-story-grid">
            <div className="dat-veg-story-image">
              <FallbackImage
                local="/images/pure.webp"
                fallback={UNSPLASH_FALLBACKS.about}
                alt="Fresh vegetarian food"
              />

              <div className="dat-veg-image-tag">
                <strong>Pure & Natural</strong>
                <span>Good food, made with love</span>
              </div>
            </div>

            <div className="dat-veg-story-copy">
              <span className="dat-veg-label">Freshness in Every Bite</span>

              <h2 className="dat-veg-title">
                <span className="dat-veg-keyword-dark">
                  PURE VEG FOOD/JAIN FOOD
                </span>
              </h2>

              <p>
                Savour the goodness of vegetarian food, made with fresh
                ingredients and lots of love. Explore delicious Indian
                favourites, from flavourful sabzi and comforting dal to
                fragrant rice, breads and satisfying thalis.
              </p>

              <p>
                Looking for Jain food? Explore our Jain food options and tell
                us your dietary requirements before ordering so ingredients
                and preparation can be confirmed.
              </p>

              <ul className="dat-veg-benefits">
                <li className="dat-veg-benefit">
                  <FaCheckCircle /> 100% Vegetarian Food
                </li>
                <li className="dat-veg-benefit">
                  <FaCheckCircle /> Fresh Ingredients
                </li>
                <li className="dat-veg-benefit">
                  <FaCheckCircle /> Homely & Delicious
                </li>
                <li className="dat-veg-benefit">
                  <FaCheckCircle /> Jain Food Options
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Jain Food */}
        <section className="dat-veg-jain" id="dat-veg-jain">
          <div className="dat-veg-container dat-veg-jain-grid">
            <div className="dat-veg-jain-image">
              <FallbackImage
                local="/images/veg-thali.png"
                fallback={UNSPLASH_FALLBACKS.jain}
                alt="Vegetarian Indian meal"
              />

              <div className="dat-veg-jain-tag">
                <strong>Jain Food</strong>
                <span>Pure · Sattvik · Thoughtful</span>
              </div>
            </div>

            <div className="dat-veg-jain-copy">
              <span className="dat-veg-label">Mindful Food Choices</span>

              <h2 className="dat-veg-title">
                Pure Jain Food <br />
                <span>Made with Care</span>
              </h2>

              <p>
                Explore Jain food options prepared according to your dietary
                preferences. Jain food commonly avoids onion, garlic and root
                vegetables. Confirm ingredients and preparation with us
                before ordering.
              </p>

              <div className="dat-veg-jain-points">
                <div className="dat-veg-jain-point">
                  <div className="dat-veg-jain-check">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <strong>No Onion, No Garlic</strong>
                    <small>
                      Request dishes prepared without onion and garlic.
                    </small>
                  </div>
                </div>

                <div className="dat-veg-jain-point">
                  <div className="dat-veg-jain-check">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <strong>No Root Vegetables</strong>
                    <small>
                      Ask about preparation without root vegetables.
                    </small>
                  </div>
                </div>

                <div className="dat-veg-jain-point">
                  <div className="dat-veg-jain-check">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <strong>Confirm Your Dietary Preferences</strong>
                    <small>
                      Confirm ingredients and cooking arrangements before
                      ordering.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Enquiry */}
        <section className="dat-veg-cta">
          <div className="dat-veg-container dat-veg-cta-inner">
            <div className="dat-veg-cta-copy">
              <h2>
                Good Food.
                <br />
                <span>Happy Moments.</span>
              </h2>

              <p>
                Have a question about our vegetarian menu or Jain food options?
                Contact us to enquire about dishes, ingredients and availability.
              </p>
            </div>

            <a
              className="dat-veg-btn"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> ENQUIRE ON WHATSAPP <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
