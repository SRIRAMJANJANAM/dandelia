import React from "react";
import {
  FaLeaf,
  FaWater,
  FaCampground,
  FaHotel,
  FaUsers,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

export default function About() {
  const whatsappLink =
    "https://wa.me/919591525484?text=" +
    encodeURIComponent(
      "Hi Dandeli Adventure Thrills! I would like to know more about your stays and adventure packages."
    );

  const images = {
    rafting:
      "/images/river-rafting-in-dandeli.png",
    forest:
      "images/riverside.png",
    resort:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
    camping:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1000&q=85",
  };

  const [heroImage] = React.useState(images.forest);
  const [raftingImage, setRaftingImage] = React.useState(images.rafting);
  const [resortImage, setResortImage] = React.useState(images.resort);
  const [campingImage, setCampingImage] = React.useState(images.camping);

  const features = [
    {
      icon: <FaWater />,
      title: "River Adventures",
      description:
        "Experience the excitement of river rafting and discover the natural beauty surrounding the Kali River.",
    },
    {
      icon: <FaHotel />,
      title: "Comfortable Stays",
      description:
        "Choose from budget-friendly stays, homestays, jungle accommodations and premium riverside resorts.",
    },
    {
      icon: <FaCampground />,
      title: "Jungle Camping",
      description:
        "Enjoy an outdoor escape surrounded by greenery and create memorable moments under the stars.",
    },
    {
      icon: <FaUsers />,
      title: "Packages for Everyone",
      description:
        "Explore suitable holiday options for families, couples, students, friends and corporate groups.",
    },
  ];

  const benefits = [
    "Adventure and nature experiences",
    "Budget to premium accommodation options",
    "Packages for different group sizes",
    "Personal assistance with booking enquiries",
    "Resort, homestay and camping options",
    "A memorable Dandeli getaway",
  ];

  const stats = [
    { value: "2018", label: "Journey Started" },
    { value: "All Types", label: "Of Travellers" },
    { value: "Budget to Premium", label: "Stay Options" },
  ];

  const styles = `
    .dat-about,
    .dat-about * {
      box-sizing: border-box;
    }

    .dat-about {
      --ab-green: #082b23;
      --ab-green-light: #104536;
      --ab-gold: #ffbd17;
      --ab-text: #344740;
      --ab-muted: #6b7972;
      width: 100%;
      overflow: hidden;
      background: #fffefa;
      color: var(--ab-green);
      font-family: inherit;
    }

    .dat-about img {
      display: block;
      max-width: 100%;
    }

    .dat-about-container {
      width: min(1200px, calc(100% - 48px));
      margin: 0 auto;
    }

    .dat-about-hero {
      position: relative;
      display: flex;
      align-items: center;
      min-height: 480px;
      padding: 82px 0;
      isolation: isolate;
      background: var(--ab-green);
    }

    .dat-about-hero::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -2;
      background-image:
        linear-gradient(
          90deg,
          rgba(3, 25, 19, 0.95) 0%,
          rgba(3, 25, 19, 0.78) 47%,
          rgba(3, 25, 19, 0.23) 100%
        ),
        var(--ab-hero-image);
      background-position: center;
      background-size: cover;
      transition: background-image 0.3s ease;
    }

    .dat-about-hero-content {
      max-width: 730px;
      color: #ffffff;
    }

    .dat-about-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      margin-bottom: 20px;
      color: var(--ab-gold);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 2.5px;
      text-transform: uppercase;
    }

    .dat-about-eyebrow svg {
      font-size: 17px;
    }

    .dat-about-hero h1 {
      margin: 0 0 20px;
      color: #ffffff;
      font-size: clamp(36px, 5vw, 62px);
      font-weight: 900;
      letter-spacing: -1.8px;
      line-height: 1.12;
    }

    .dat-about-hero h1 span {
      color: var(--ab-gold);
    }

    .dat-about-hero p {
      max-width: 620px;
      margin: 0;
      color: #e0e9e4;
      font-size: 16px;
      line-height: 1.95;
    }

    .dat-about-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 29px;
    }

    .dat-about-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 51px;
      padding: 14px 23px;
      border: 1px solid transparent;
      border-radius: 999px;
      background: var(--ab-gold);
      color: #14251b;
      font-size: 13px;
      font-weight: 900;
      text-decoration: none;
      transition:
        transform 0.25s ease,
        background 0.25s ease,
        box-shadow 0.25s ease;
    }

    .dat-about-btn:hover {
      transform: translateY(-3px);
      background: #ffd15a;
      box-shadow: 0 12px 30px rgba(255, 189, 23, 0.2);
    }

    .dat-about-btn-outline {
      border-color: rgba(255, 255, 255, 0.55);
      background: transparent;
      color: #ffffff;
    }

    .dat-about-btn-outline:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }

    .dat-about-stats {
      position: relative;
      z-index: 2;
      background: var(--ab-green);
      color: #ffffff;
    }

    .dat-about-stats-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      padding-top: 27px;
      padding-bottom: 27px;
    }

    .dat-about-stat {
      padding: 8px 22px;
      text-align: center;
    }

    .dat-about-stat + .dat-about-stat {
      border-left: 1px solid rgba(255, 255, 255, 0.2);
    }

    .dat-about-stat strong {
      display: block;
      margin-bottom: 7px;
      color: var(--ab-gold);
      font-size: clamp(20px, 2.5vw, 29px);
      font-weight: 900;
    }

    .dat-about-stat span {
      color: #d2e0d8;
      font-size: 12px;
      font-weight: 600;
    }

    .dat-about-section {
      padding: 88px 0;
    }

    .dat-about-story-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 65px;
      align-items: center;
    }

    .dat-about-story-image {
      position: relative;
      min-width: 0;
    }

    .dat-about-story-image img {
      width: 100%;
      height: 440px;
      border-radius: 20px;
      object-fit: cover;
      background: #e5eee7;
      box-shadow: 0 18px 50px rgba(8, 43, 35, 0.12);
    }

    .dat-about-image-tag {
      position: absolute;
      right: -17px;
      bottom: 25px;
      max-width: calc(100% - 24px);
      padding: 18px 24px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 14px;
      background: var(--ab-green);
      color: #ffffff;
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.17);
    }

    .dat-about-image-tag strong {
      display: block;
      color: var(--ab-gold);
      font-size: 24px;
      font-weight: 900;
    }

    .dat-about-image-tag span {
      display: block;
      margin-top: 4px;
      color: #d6e1db;
      font-size: 12px;
    }

    .dat-about-section-label {
      display: block;
      margin-bottom: 13px;
      color: #14815a;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .dat-about-section-title {
      margin: 0 0 22px;
      color: var(--ab-green);
      font-size: clamp(29px, 3.5vw, 43px);
      font-weight: 900;
      letter-spacing: -1.2px;
      line-height: 1.2;
    }

    .dat-about-section-title span {
      color: #c38b08;
    }

    .dat-about-story-copy p {
      margin: 0 0 17px;
      color: var(--ab-muted);
      font-size: 14px;
      line-height: 2;
    }

    .dat-about-benefits {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 13px 17px;
      margin: 24px 0 29px;
      padding: 0;
      list-style: none;
    }

    .dat-about-benefits li {
      display: flex;
      align-items: flex-start;
      gap: 9px;
      color: var(--ab-text);
      font-size: 12px;
      font-weight: 700;
      line-height: 1.7;
    }

    .dat-about-benefits svg {
      flex-shrink: 0;
      margin-top: 3px;
      color: #168258;
      font-size: 14px;
    }

    .dat-about-experiences {
      padding: 80px 0 90px;
      background: #f2f6ef;
    }

    .dat-about-section-heading {
      max-width: 700px;
      margin: 0 auto 42px;
      text-align: center;
    }

    .dat-about-section-heading p {
      margin: 0;
      color: var(--ab-muted);
      font-size: 14px;
      line-height: 1.9;
    }

    .dat-about-cards {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 20px;
    }

    .dat-about-card {
      padding: 29px 22px;
      border: 1px solid #e5ebe3;
      border-radius: 17px;
      background: #ffffff;
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        border-color 0.3s ease;
    }

    .dat-about-card:hover {
      transform: translateY(-7px);
      border-color: rgba(255, 189, 23, 0.7);
      box-shadow: 0 18px 40px rgba(8, 43, 35, 0.08);
    }

    .dat-about-card-icon {
      display: grid;
      place-items: center;
      width: 53px;
      height: 53px;
      margin-bottom: 21px;
      border-radius: 15px;
      background: #fff3cf;
      color: #a97500;
      font-size: 22px;
    }

    .dat-about-card h3 {
      margin: 0 0 12px;
      color: var(--ab-green);
      font-size: 17px;
      font-weight: 900;
      line-height: 1.4;
    }

    .dat-about-card p {
      margin: 0;
      color: var(--ab-muted);
      font-size: 13px;
      line-height: 1.9;
    }

    .dat-about-gallery {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 22px;
      margin-top: 48px;
    }

    .dat-about-gallery-item {
      position: relative;
      min-width: 0;
      height: 250px;
      overflow: hidden;
      border-radius: 17px;
      background: #dce6dc;
    }

    .dat-about-gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .dat-about-gallery-item:hover img {
      transform: scale(1.06);
    }

    .dat-about-gallery-item::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        0deg,
        rgba(3, 25, 19, 0.78),
        transparent 65%
      );
      pointer-events: none;
    }

    .dat-about-gallery-caption {
      position: absolute;
      right: 20px;
      bottom: 19px;
      left: 20px;
      z-index: 1;
      color: #ffffff;
      font-size: 18px;
      font-weight: 900;
    }

    .dat-about-cta {
      position: relative;
      overflow: hidden;
      padding: 68px 0;
      background:
        radial-gradient(
          circle at 85% 15%,
          rgba(255, 189, 23, 0.15),
          transparent 30%
        ),
        var(--ab-green);
    }

    .dat-about-cta-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 35px;
    }

    .dat-about-cta-copy {
      max-width: 740px;
    }

    .dat-about-cta h2 {
      margin: 0 0 13px;
      color: #ffffff;
      font-size: clamp(27px, 3.4vw, 40px);
      font-weight: 900;
      letter-spacing: -0.9px;
      line-height: 1.25;
    }

    .dat-about-cta h2 span {
      color: var(--ab-gold);
    }

    .dat-about-cta p {
      margin: 0;
      color: #c7d8cf;
      font-size: 14px;
      line-height: 1.9;
    }

    .dat-about-cta .dat-about-btn {
      flex-shrink: 0;
    }

    .dat-about a:focus-visible {
      outline: 3px solid #e6a600;
      outline-offset: 4px;
    }

    @media (max-width: 1000px) {
      .dat-about-cards {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .dat-about-story-grid {
        gap: 40px;
      }

      .dat-about-story-image img {
        height: 390px;
      }
    }

    @media (max-width: 700px) {
      .dat-about-container {
        width: calc(100% - 36px);
      }

      .dat-about-hero {
        min-height: 450px;
        padding: 65px 0;
      }

      .dat-about-hero::before {
        background-image:
          linear-gradient(
            90deg,
            rgba(3, 25, 19, 0.9),
            rgba(3, 25, 19, 0.67)
          ),
          var(--ab-hero-image);
        background-position: center;
      }

      .dat-about-hero h1 {
        letter-spacing: -1px;
      }

      .dat-about-hero p {
        font-size: 14px;
      }

      .dat-about-stats-grid {
        grid-template-columns: 1fr;
        padding-top: 14px;
        padding-bottom: 14px;
      }

      .dat-about-stat {
        padding: 16px 8px;
      }

      .dat-about-stat + .dat-about-stat {
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        border-left: 0;
      }

      .dat-about-section {
        padding: 58px 0;
      }

      .dat-about-story-grid {
        grid-template-columns: 1fr;
        gap: 37px;
      }

      .dat-about-story-image img {
        height: 340px;
      }

      .dat-about-image-tag {
        right: 12px;
        bottom: 15px;
      }

      .dat-about-benefits {
        grid-template-columns: 1fr;
      }

      .dat-about-experiences {
        padding: 60px 0;
      }

      .dat-about-cards {
        gap: 14px;
      }

      .dat-about-card {
        padding: 23px 17px;
      }

      .dat-about-gallery {
        grid-template-columns: 1fr;
        gap: 16px;
        margin-top: 30px;
      }

      .dat-about-gallery-item {
        height: 230px;
      }

      .dat-about-cta {
        padding: 54px 0;
      }

      .dat-about-cta-inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
      }
    }

    @media (max-width: 420px) {
      .dat-about-container {
        width: calc(100% - 30px);
      }

      .dat-about-hero {
        min-height: 430px;
        padding: 50px 0;
      }

      .dat-about-eyebrow {
        font-size: 10px;
        letter-spacing: 1.6px;
      }

      .dat-about-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .dat-about-btn {
        width: 100%;
        padding: 13px 16px;
      }

      .dat-about-story-image img {
        height: 280px;
      }

      .dat-about-cards {
        grid-template-columns: 1fr;
      }

      .dat-about-card {
        padding: 24px;
      }

      .dat-about-gallery-item {
        height: 205px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dat-about *,
      .dat-about *::before,
      .dat-about *::after {
        scroll-behavior: auto !important;
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="dat-about">
        {/* Hero */}
        <section
          className="dat-about-hero"
          style={{
            "--ab-hero-image": `url("${heroImage}")`,
          }}
        >
          <div className="dat-about-container">
            <div className="dat-about-hero-content">
              <div className="dat-about-eyebrow">
                <FaLeaf />
                OUR STORY · EST. 2018
              </div>

              <h1>
                Discover Dandeli.
                <br />
                Experience <span>Nature.</span>
              </h1>

              <p>
                Welcome to Dandeli Adventure Thrills, where lush
                forests, exciting river adventures and relaxing
                stays come together to create unforgettable
                holiday experiences.
              </p>

              <div className="dat-about-actions">
                <a className="dat-about-btn" href={whatsappLink}
                  target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                  PLAN YOUR ADVENTURE
                  <FaArrowRight />
                </a>

                <a className="dat-about-btn dat-about-btn-outline"
                  href="#about-our-story">
                  DISCOVER OUR STORY
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="dat-about-stats" aria-label="Our highlights">
          <div className="dat-about-container dat-about-stats-grid">
            {stats.map((stat) => (
              <div className="dat-about-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="dat-about-section" id="about-our-story">
          <div className="dat-about-container dat-about-story-grid">
            <div className="dat-about-story-image">
              <img
                src={raftingImage}
                alt="River rafting adventure in Dandeli"
                loading="lazy"
                onError={() => setRaftingImage(images.forest)}
              />

              <div className="dat-about-image-tag">
                <strong>Since 2018</strong>
                <span>Adventure, nature and hospitality</span>
              </div>
            </div>

            <div className="dat-about-story-copy">
              <span className="dat-about-section-label">
                More Than Just a Trip
              </span>

              <h2 className="dat-about-section-title">
                The Story of <span>Dandeli Adventure Thrills</span>
              </h2>

              <p>
                Dandeli Adventure Thrills began its journey in 2018
                with a simple aim: to offer guests memorable
                experiences, comfortable stays and dependable
                service in the beautiful destination of Dandeli.
              </p>

              <p>
                From budget-friendly packages to premium resorts,
                homestays and unique jungle camping experiences,
                we offer options for students, families, couples,
                friends and corporate groups.
              </p>

              <p>
                Whether you want the excitement of river rafting,
                a peaceful escape beside nature or a relaxing
                stay with additional amenities such as a swimming
                pool, we help you explore options for your trip.
              </p>

              <ul className="dat-about-benefits">
                {benefits.map((benefit) => (
                  <li key={benefit}>
                    <FaCheckCircle />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                className="dat-about-btn"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                ENQUIRE ON WHATSAPP
                <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section className="dat-about-experiences">
          <div className="dat-about-container">
            <div className="dat-about-section-heading">
              <span className="dat-about-section-label">
                Explore With Us
              </span>

              <h2 className="dat-about-section-title">
                Nature, Comfort & <span>Adventure</span>
              </h2>

              <p>
                Find the right mix of outdoor excitement, peaceful
                surroundings and comfortable accommodation for
                your next Dandeli holiday.
              </p>
            </div>

            <div className="dat-about-cards">
              {features.map((feature) => (
                <article className="dat-about-card" key={feature.title}>
                  <div className="dat-about-card-icon">
                    {feature.icon}
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>

            <div className="dat-about-gallery">
              <div className="dat-about-gallery-item">
                <img
                  src={resortImage}
                  alt="Comfortable resort stay"
                  loading="lazy"
                  onError={() => setResortImage(images.forest)}
                />

                <div className="dat-about-gallery-caption">
                  Relaxing Resort & Homestay Options
                </div>
              </div>

              <div className="dat-about-gallery-item">
                <img
                  src={campingImage}
                  alt="Outdoor camping experience"
                  loading="lazy"
                  onError={() => setCampingImage(images.forest)}
                />

                <div className="dat-about-gallery-caption">
                  Escape Into Nature
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="dat-about-cta">
          <div className="dat-about-container dat-about-cta-inner">
            <div className="dat-about-cta-copy">
              <h2>
                Your Dandeli Adventure
                <br />
                Starts <span>Here.</span>
              </h2>

              <p>
                Planning a family holiday, group getaway or
                adventure-filled weekend? Contact us to enquire
                about available stays and suitable packages.
              </p>
            </div>

            <a
              className="dat-about-btn"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              PLAN YOUR TRIP
              <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}