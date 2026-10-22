import React from "react";
import {
  FaWater,
  FaTree,
  FaCampground,
  FaHotel,
  FaUtensils,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaShip,
  FaMountain,
  FaStar,
  FaSwimmingPool,
  FaRoute,
  FaLeaf,
  FaBinoculars,
  FaBolt,
} from "react-icons/fa";

export default function Sightseeings() {
  const whatsappNumber = "919591525484";

  const bookingLink = (message) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const roomPackages = [
    {
      name: "Dormitory",
      description: "A budget-friendly stay for friends and groups.",
      tag: "Budget Stay",
      icon: <FaUsers />,
    },
    {
      name: "Deluxe Room",
      description: "A comfortable room for a relaxing getaway.",
      tag: "Comfort Stay",
      featured: true,
      icon: <FaHotel />,
    },
    {
      name: "Deluxe Cottage",
      description: "A premium cottage-style accommodation option.",
      tag: "Premium Stay",
      icon: <FaCampground />,
    },
  ];

  const sightseeingPlaces = [
    {
      name: "Moulangi Eco Park",
      category: "NATURE & FOREST",
      description:
        "Explore a beautiful green setting surrounded by nature. Enjoy a peaceful outdoor escape and capture memorable forest views.",
      image: "/images/mou.png",
      icon: <FaTree />,
    },
    {
      name: "Crocodile Park",
      category: "WILDLIFE EXPERIENCE",
      description:
        "Add a wildlife stop to your Dandeli trip. Check local access arrangements, visiting hours and wildlife viewing availability before visiting.",
      image: "/images/crco.png",
      icon: <FaBinoculars />,
    },
    {
      name: "Supa Dam Backwaters",
      category: "SCENIC WATER VIEWS",
      description:
        "Enjoy scenic water views and the surrounding green landscapes of the Supa Dam backwaters. Follow local access and safety rules.",
      image: "/images/surp.png",
      icon: <FaWater />,
    },
    {
      name: "Jungle Safari",
      category: "FOREST ADVENTURE",
      description:
        "Experience the excitement of exploring forest landscapes with a guided safari, subject to permitted routes and safari availability.",
      image: "/images/jungle.png",
      icon: <FaBinoculars />,
    },
  ];

  const waterActivities = [
    {
      name: "Boating",
      category: "RIVER EXPERIENCE",
      description:
        "Enjoy a relaxing boating experience and admire the beautiful surroundings of the Kali River.",
      icon: <FaShip />,
    },
    {
      name: "Kayaking",
      category: "WATER ADVENTURE",
      description:
        "Paddle through the water and enjoy an exciting outdoor adventure surrounded by nature.",
      icon: <FaWater />,
    },
    {
      name: "Zorbing",
      category: "FUN WATER ACTIVITY",
      description:
        "Try a fun-filled zorbing experience and add something different to your Dandeli adventure.",
      icon: <FaSwimmingPool />,
    },
    {
      name: "Zipline",
      category: "THRILLING ADVENTURE",
      description:
        "Experience the thrill of gliding along a zipline while enjoying views of the natural landscape.",
      icon: <FaBolt />,
    },
    {
      name: "River Rafting",
      category: "RIVER ADVENTURE",
      description:
        "Enjoy an adrenaline-filled river rafting experience with qualified local operators, subject to water conditions and availability.",
      icon: <FaRoute />,
    },
  ];

  const includedActivities = [
    { icon: <FaSwimmingPool />, name: "Swimming Pool", detail: "Pool time" },
    { icon: <FaMountain />, name: "Archery", detail: "Aim and challenge yourself" },
    { icon: <FaTree />, name: "Jungle Trekking", detail: "Explore nature" },
    { icon: <FaCampground />, name: "Campfire", detail: "Evening gathering" },
    { icon: <FaUsers />, name: "Indoor Games", detail: "Chess, puzzles and more" },
    { icon: <FaRoute />, name: "Outdoor Games", detail: "Sports and group fun" },
  ];

  const images = {
    hero: "/images/riverside.png",
    resort:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
    camping:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1000&q=85",
  };

  const [resortImage, setResortImage] = React.useState(images.resort);
  const [campingImage, setCampingImage] = React.useState(images.camping);

  const styles = `
    .dat-sight,
    .dat-sight * {
      box-sizing: border-box;
    }

    .dat-sight {
      --sg-green: #082b23;
      --sg-green2: #104536;
      --sg-gold: #ffbd17;
      --sg-text: #344740;
      --sg-muted: #6c7a73;
      width: 100%;
      overflow: hidden;
      background: #fffefa;
      color: var(--sg-green);
      font-family: inherit;
    }

    .dat-sight img {
      display: block;
      width: 100%;
      max-width: 100%;
    }

    .dat-sight-container {
      width: min(1200px, calc(100% - 48px));
      margin: 0 auto;
    }

    .dat-sight-hero {
      position: relative;
      display: flex;
      align-items: center;
      min-height: 520px;
      padding: 85px 0;
      background: var(--sg-green);
      isolation: isolate;
    }

    .dat-sight-hero::before {
      content: "";
      position: absolute;
      z-index: -1;
      inset: 0;
      background-image:
        linear-gradient(90deg, rgba(3,24,18,.93),
        rgba(3,24,18,.70) 53%, rgba(3,24,18,.25)),
        var(--sg-hero);
      background-size: cover;
      background-position: center;
    }

    .dat-sight-hero-content {
      max-width: 790px;
      color: #fff;
    }

    .dat-sight-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      margin-bottom: 20px;
      color: var(--sg-gold);
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 2.3px;
      text-transform: uppercase;
    }

    .dat-sight-hero h1 {
      margin: 0 0 22px;
      color: #fff;
      font-size: clamp(36px, 5.3vw, 66px);
      font-weight: 900;
      letter-spacing: -1.8px;
      line-height: 1.12;
    }

    .dat-sight-hero h1 span {
      color: var(--sg-gold);
    }

    .dat-sight-hero p {
      max-width: 670px;
      margin: 0;
      color: #e0e9e4;
      font-size: 15px;
      line-height: 1.95;
    }

    .dat-sight-badges,
    .dat-sight-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 24px;
    }

    .dat-sight-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 13px;
      border: 1px solid rgba(255,255,255,.22);
      border-radius: 999px;
      background: rgba(255,255,255,.08);
      color: #fff;
      font-size: 11px;
      font-weight: 700;
    }

    .dat-sight-badge svg {
      color: var(--sg-gold);
    }

    .dat-sight-buttons {
      gap: 13px;
      margin-top: 29px;
    }

    .dat-sight-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 48px;
      padding: 13px 20px;
      border: 1px solid transparent;
      border-radius: 999px;
      background: var(--sg-gold);
      color: #16281d;
      font-size: 11px;
      font-weight: 900;
      text-align: center;
      text-decoration: none;
      transition: .25s ease;
      cursor: pointer;
    }

    .dat-sight-btn:hover {
      transform: translateY(-3px);
      background: #ffd45e;
      box-shadow: 0 10px 28px rgba(255,189,23,.18);
    }

    .dat-sight-btn-outline {
      border-color: rgba(255,255,255,.55);
      background: transparent;
      color: #fff;
    }

    .dat-sight-btn-outline:hover {
      background: rgba(255,255,255,.1);
      color: #fff;
    }

    .dat-sight-btn-veg {
      background: #16834c;
      color: #fff;
    }

    .dat-sight-btn-veg:hover {
      background: #20a45f;
      color: #fff;
    }

    .dat-sight-trust {
      background: var(--sg-green);
      color: white;
    }

    .dat-sight-trust-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding-top: 25px;
      padding-bottom: 25px;
    }

    .dat-sight-trust-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 13px;
      padding: 10px 18px;
    }

    .dat-sight-trust-item + .dat-sight-trust-item {
      border-left: 1px solid rgba(255,255,255,.17);
    }

    .dat-sight-trust-icon {
      display: grid;
      place-items: center;
      width: 43px;
      height: 43px;
      flex: 0 0 43px;
      border-radius: 13px;
      background: rgba(255,189,23,.12);
      color: var(--sg-gold);
      font-size: 19px;
    }

    .dat-sight-trust-item strong {
      display: block;
      color: #fff;
      font-size: 12px;
      font-weight: 900;
    }

    .dat-sight-trust-item span {
      display: block;
      margin-top: 5px;
      color: #c4d5cc;
      font-size: 11px;
      line-height: 1.6;
    }

    .dat-sight-section {
      padding: 78px 0;
    }

    .dat-sight-section-heading {
      max-width: 760px;
      margin: 0 auto 42px;
      text-align: center;
    }

    .dat-sight-label {
      display: block;
      margin-bottom: 12px;
      color: #16815a;
      font-size: 11px;
      font-weight: 900;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .dat-sight-section-heading h2,
    .dat-sight-copy h2 {
      margin: 0 0 17px;
      color: var(--sg-green);
      font-size: clamp(29px, 3.5vw, 43px);
      font-weight: 900;
      letter-spacing: -1.1px;
      line-height: 1.2;
    }

    .dat-sight-section-heading h2 span,
    .dat-sight-copy h2 span {
      color: #b98200;
    }

    .dat-sight-section-heading p {
      margin: 0;
      color: var(--sg-muted);
      font-size: 14px;
      line-height: 1.9;
    }

    .dat-sight-destinations {
      background: #fffefa;
    }

    .dat-sight-destination-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 20px;
    }

    .dat-sight-destination-card {
      display: flex;
      flex-direction: column;
      min-width: 0;
      overflow: hidden;
      border: 1px solid #e5ebe2;
      border-radius: 18px;
      background: #fff;
      box-shadow: 0 8px 28px rgba(8,43,35,.045);
      transition: transform .3s ease, box-shadow .3s ease;
    }

    .dat-sight-destination-card:hover {
      transform: translateY(-7px);
      box-shadow: 0 18px 38px rgba(8,43,35,.12);
    }

    .dat-sight-destination-image {
      position: relative;
      height: 215px;
      overflow: hidden;
      background: #e1e9df;
    }

    .dat-sight-destination-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .6s ease;
    }

    .dat-sight-destination-card:hover
    .dat-sight-destination-image img {
      transform: scale(1.07);
    }

    .dat-sight-destination-icon {
      position: absolute;
      right: 14px;
      bottom: 14px;
      display: grid;
      place-items: center;
      width: 42px;
      height: 42px;
      border: 1px solid rgba(255,255,255,.55);
      border-radius: 13px;
      background: rgba(8,43,35,.9);
      color: var(--sg-gold);
      font-size: 18px;
    }

    .dat-sight-destination-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: flex-start;
      padding: 22px 19px;
    }

    .dat-sight-destination-category {
      margin-bottom: 11px;
      color: #16815a;
      font-size: 9px;
      font-weight: 900;
      letter-spacing: 1.3px;
    }

    .dat-sight-destination-content h3 {
      margin: 0 0 11px;
      color: var(--sg-green);
      font-size: 19px;
      font-weight: 900;
      line-height: 1.35;
    }

    .dat-sight-destination-content p {
      flex: 1;
      margin: 0 0 20px;
      color: var(--sg-muted);
      font-size: 12px;
      line-height: 1.85;
    }

    .dat-sight-destination-content .dat-sight-btn {
      width: 100%;
      min-height: 44px;
      padding: 11px 12px;
      font-size: 10px;
    }

    .dat-sight-destination-note {
      margin: 25px 0 0;
      color: var(--sg-muted);
      font-size: 12px;
      text-align: center;
      line-height: 1.8;
    }

    .dat-sight-water {
      background: #f2f6ef;
    }

    .dat-sight-water .dat-sight-activity-grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 17px;
    }

    .dat-sight-activity-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 0;
      padding: 27px 17px;
      border: 1px solid #e3eae0;
      border-radius: 17px;
      background: #fff;
      text-align: center;
      transition: transform .25s ease, box-shadow .25s ease,
        border-color .25s ease;
    }

    .dat-sight-activity-card:hover {
      transform: translateY(-6px);
      border-color: var(--sg-gold);
      box-shadow: 0 15px 32px rgba(8,43,35,.08);
    }

    .dat-sight-activity-icon {
      display: grid;
      place-items: center;
      width: 58px;
      height: 58px;
      margin-bottom: 17px;
      border-radius: 17px;
      background: #fff3d0;
      color: #956b00;
      font-size: 23px;
    }

    .dat-sight-activity-category {
      margin-bottom: 10px;
      color: #16815a;
      font-size: 9px;
      font-weight: 900;
      letter-spacing: 1px;
    }

    .dat-sight-activity-card h3 {
      margin: 0 0 11px;
      color: var(--sg-green);
      font-size: 17px;
      font-weight: 900;
    }

    .dat-sight-activity-card p {
      flex: 1;
      margin: 0 0 20px;
      color: var(--sg-muted);
      font-size: 12px;
      line-height: 1.8;
    }

    .dat-sight-activity-card .dat-sight-btn {
      width: 100%;
      margin-top: auto;
      font-size: 10px;
    }

    .dat-sight-activity-note {
      margin-top: 25px;
      color: var(--sg-muted);
      font-size: 12px;
      text-align: center;
      line-height: 1.8;
    }

    .dat-sight-rooms {
      background: #fffefa;
    }

    .dat-sight-room-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 22px;
    }

    .dat-sight-room {
      display: flex;
      flex-direction: column;
      padding: 29px 25px;
      border: 1px solid #e2e9df;
      border-radius: 18px;
      background: #fff;
      transition: transform .3s ease, box-shadow .3s ease;
    }

    .dat-sight-room:hover {
      transform: translateY(-6px);
      box-shadow: 0 18px 40px rgba(8,43,35,.09);
    }

    .dat-sight-room-featured {
      border: 2px solid var(--sg-gold);
    }

    .dat-sight-room-tag {
      align-self: flex-start;
      margin-bottom: 19px;
      padding: 7px 11px;
      border-radius: 999px;
      background: #fff2ca;
      color: #856000;
      font-size: 10px;
      font-weight: 900;
    }

    .dat-sight-room h3 {
      margin: 0 0 10px;
      color: var(--sg-green);
      font-size: 21px;
      font-weight: 900;
    }

    .dat-sight-room p {
      margin: 0 0 22px;
      color: var(--sg-muted);
      font-size: 12px;
      line-height: 1.8;
    }

    .dat-sight-room .dat-sight-btn {
      width: 100%;
      margin-top: auto;
    }

    .dat-sight-meals {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-top: 28px;
    }

    .dat-sight-meal {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      border: 1px solid #e4eae1;
      border-radius: 999px;
      background: white;
      color: var(--sg-text);
      font-size: 12px;
      font-weight: 700;
    }

    .dat-sight-meal svg {
      color: #178254;
    }

    .dat-sight-meals-note {
      margin: 18px 0 0;
      color: var(--sg-muted);
      font-size: 12px;
      text-align: center;
      line-height: 1.8;
    }

    .dat-sight-package-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      align-items: center;
    }

    .dat-sight-image {
      height: 390px;
      overflow: hidden;
      border-radius: 20px;
      background: #e2eae1;
    }

    .dat-sight-image img {
      height: 100%;
      object-fit: cover;
      transition: transform .5s ease;
    }

    .dat-sight-image:hover img {
      transform: scale(1.04);
    }

    .dat-sight-copy p {
      margin: 0 0 17px;
      color: var(--sg-muted);
      font-size: 14px;
      line-height: 1.95;
    }

    .dat-sight-note {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-top: 18px;
      padding: 17px;
      border: 1px solid #f0dfac;
      border-radius: 13px;
      background: #fff8e7;
      color: #725514;
      font-size: 12px;
      line-height: 1.8;
    }

    .dat-sight-note svg {
      flex-shrink: 0;
      margin-top: 3px;
      color: #a97500;
      font-size: 17px;
    }

    .dat-sight-included {
      background: #f2f6ef;
    }

    .dat-sight-included-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
    }

    .dat-sight-included-item {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 20px;
      border: 1px solid #e2e9df;
      border-radius: 15px;
      background: #fff;
    }

    .dat-sight-included-item > span {
      display: grid;
      place-items: center;
      width: 45px;
      height: 45px;
      flex-shrink: 0;
      border-radius: 13px;
      background: #fff3d0;
      color: #956b00;
      font-size: 19px;
    }

    .dat-sight-included-item h3 {
      margin: 0 0 5px;
      color: var(--sg-green);
      font-size: 14px;
      font-weight: 900;
    }

    .dat-sight-included-item p {
      margin: 0;
      color: var(--sg-muted);
      font-size: 12px;
      line-height: 1.6;
    }

    .dat-sight-veg-banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 25px;
      margin-top: 40px;
      padding: 28px;
      border: 1px solid #cfe6d2;
      border-radius: 20px;
      background: linear-gradient(120deg, #effaf0, #fff);
    }

    .dat-sight-veg-copy {
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }

    .dat-sight-veg-icon {
      display: grid;
      place-items: center;
      width: 52px;
      height: 52px;
      flex: 0 0 52px;
      border-radius: 15px;
      background: #16834c;
      color: #fff;
      font-size: 23px;
    }

    .dat-sight-veg-copy h3 {
      margin: 0 0 8px;
      color: var(--sg-green);
      font-size: 20px;
      font-weight: 900;
    }

    .dat-sight-veg-copy p {
      max-width: 650px;
      margin: 0;
      color: var(--sg-muted);
      font-size: 13px;
      line-height: 1.8;
    }

    .dat-sight-gallery {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      margin-top: 35px;
    }

    .dat-sight-gallery-card {
      position: relative;
      height: 270px;
      overflow: hidden;
      border-radius: 18px;
      background: #e1e9df;
    }

    .dat-sight-gallery-card img {
      height: 100%;
      object-fit: cover;
      transition: transform .6s ease;
    }

    .dat-sight-gallery-card:hover img {
      transform: scale(1.06);
    }

    .dat-sight-gallery-card::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(0deg, rgba(3,24,18,.8), transparent 70%);
    }

    .dat-sight-gallery-caption {
      position: absolute;
      z-index: 1;
      right: 20px;
      bottom: 20px;
      left: 20px;
      color: white;
      font-size: 19px;
      font-weight: 900;
    }

    .dat-sight-booking {
      padding: 68px 0;
      background:
        radial-gradient(circle at 85% 15%, rgba(255,189,23,.13), transparent 30%),
        #f2f6ef;
    }

    .dat-sight-booking-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    .dat-sight-booking-copy {
      max-width: 740px;
    }

    .dat-sight-booking h2 {
      margin: 0 0 13px;
      color: var(--sg-green);
      font-size: clamp(27px, 3.4vw, 40px);
      font-weight: 900;
      line-height: 1.25;
    }

    .dat-sight-booking h2 span {
      color: #b98200;
    }

    .dat-sight-booking p {
      margin: 0;
      color: var(--sg-muted);
      font-size: 14px;
      line-height: 1.9;
    }

    .dat-sight-disclaimer {
      margin-top: 25px;
      padding: 17px 20px;
      border: 1px solid #e8d7a6;
      border-radius: 12px;
      background: #fff8e6;
      color: #71591a;
      font-size: 12px;
      line-height: 1.9;
    }

    .dat-sight a:focus-visible {
      outline: 3px solid #d69a00;
      outline-offset: 4px;
    }

    @media (max-width: 1050px) {
      .dat-sight-destination-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .dat-sight-water .dat-sight-activity-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .dat-sight-package-info {
        gap: 30px;
      }
    }

    @media (max-width: 700px) {
      .dat-sight-container {
        width: calc(100% - 36px);
      }

      .dat-sight-hero {
        min-height: 470px;
        padding: 65px 0;
      }

      .dat-sight-hero::before {
        background-image:
          linear-gradient(rgba(3,24,18,.82), rgba(3,24,18,.75)),
          var(--sg-hero);
      }

      .dat-sight-hero h1 {
        letter-spacing: -1px;
      }

      .dat-sight-hero p {
        font-size: 13px;
      }

      .dat-sight-trust-grid {
        grid-template-columns: 1fr;
        padding-top: 12px;
        padding-bottom: 12px;
      }

      .dat-sight-trust-item {
        justify-content: flex-start;
        padding: 15px 5px;
      }

      .dat-sight-trust-item + .dat-sight-trust-item {
        border-top: 1px solid rgba(255,255,255,.15);
        border-left: 0;
      }

      .dat-sight-section {
        padding: 55px 0;
      }

      .dat-sight-package-info {
        grid-template-columns: 1fr;
        gap: 28px;
      }

      .dat-sight-image {
        height: 300px;
      }

      .dat-sight-room-grid {
        grid-template-columns: 1fr;
      }

      .dat-sight-water .dat-sight-activity-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
      }

      .dat-sight-activity-card {
        padding: 22px 12px;
      }

      .dat-sight-destination-grid {
        gap: 13px;
      }

      .dat-sight-destination-image {
        height: 170px;
      }

      .dat-sight-destination-content {
        padding: 17px 13px;
      }

      .dat-sight-destination-content h3 {
        font-size: 16px;
      }

      .dat-sight-destination-content p {
        font-size: 11px;
      }

      .dat-sight-destination-content .dat-sight-btn {
        font-size: 9px;
      }

      .dat-sight-included-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
      }

      .dat-sight-included-item {
        align-items: flex-start;
        padding: 15px 12px;
      }

      .dat-sight-included-item > span {
        width: 38px;
        height: 38px;
      }

      .dat-sight-veg-banner {
        flex-direction: column;
        align-items: stretch;
        padding: 22px 17px;
      }

      .dat-sight-veg-banner > .dat-sight-btn {
        width: 100%;
      }

      .dat-sight-gallery {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .dat-sight-gallery-card {
        height: 230px;
      }

      .dat-sight-booking-inner {
        flex-direction: column;
        align-items: flex-start;
      }

      .dat-sight-booking {
        padding: 50px 0;
      }

      .dat-sight-booking-inner > .dat-sight-btn {
        width: 100%;
      }
    }

    @media (max-width: 420px) {
      .dat-sight-container {
        width: calc(100% - 30px);
      }

      .dat-sight-hero {
        min-height: 430px;
        padding: 48px 0;
      }

      .dat-sight-eyebrow {
        font-size: 10px;
        letter-spacing: 1.5px;
      }

      .dat-sight-buttons {
        flex-direction: column;
        align-items: stretch;
      }

      .dat-sight-btn {
        width: 100%;
      }

      .dat-sight-destination-grid,
      .dat-sight-water .dat-sight-activity-grid,
      .dat-sight-included-grid {
        grid-template-columns: 1fr;
      }

      .dat-sight-destination-image {
        height: 220px;
      }

      .dat-sight-activity-card {
        padding: 25px 18px;
      }

      .dat-sight-meal {
        font-size: 11px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dat-sight *,
      .dat-sight *::before,
      .dat-sight *::after {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="dat-sight">
        {/* HERO */}
        <section
          className="dat-sight-hero"
          style={{ "--sg-hero": `url("${images.hero}")` }}
        >
          <div className="dat-sight-container">
            <div className="dat-sight-hero-content">
              <div className="dat-sight-eyebrow">
                <FaTree />
                DISCOVER DANDELI · NATURE · ADVENTURE
              </div>

              <h1>
                Your Perfect
                <br />
                <span>Dandeli Adventure</span>
                <br />
                Starts Here.
              </h1>

              <p>
                Experience a memorable 1 Night &amp; 2 Days getaway
                with resort accommodation, buffet meals, sightseeing,
                water activities, jungle adventures and outdoor fun
                at Dandeli Adventure Thrills.
              </p>

              <div className="dat-sight-badges">
                <span className="dat-sight-badge">
                  <FaClock /> 1 Night &amp; 2 Days
                </span>
                <span className="dat-sight-badge">
                  <FaUtensils /> Buffet Meals
                </span>
                <span className="dat-sight-badge">
                  <FaWater /> Water Activities
                </span>
              </div>

              <div className="dat-sight-buttons">
                <a
                  className="dat-sight-btn"
                  href={bookingLink(
                    "Hi Dandeli Adventure Thrills! I would like to enquire about your resort packages, sightseeing and water activities. Please share availability and details."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> ENQUIRE &amp; BOOK <FaArrowRight />
                </a>

                <a
                  className="dat-sight-btn dat-sight-btn-outline"
                  href="#sg-sightseeing"
                >
                  EXPLORE SIGHTSEEING
                </a>

                <a className="dat-sight-btn dat-sight-btn-veg" href="/veg">
                  <FaLeaf /> PURE VEG RESORTS <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="dat-sight-trust">
          <div className="dat-sight-container dat-sight-trust-grid">
            <div className="dat-sight-trust-item">
              <div className="dat-sight-trust-icon"><FaTree /></div>
              <div>
                <strong>Nature &amp; Sightseeing</strong>
                <span>Explore Dandeli's scenic attractions</span>
              </div>
            </div>

            <div className="dat-sight-trust-item">
              <div className="dat-sight-trust-icon"><FaWater /></div>
              <div>
                <strong>Water Adventures</strong>
                <span>Discover exciting outdoor activities</span>
              </div>
            </div>

            <div className="dat-sight-trust-item">
              <div className="dat-sight-trust-icon"><FaUtensils /></div>
              <div>
                <strong>Resort &amp; Meals</strong>
                <span>Accommodation and meal options</span>
              </div>
            </div>
          </div>
        </section>

        {/* 1. SIGHTSEEING FIRST */}
        <section
          className="dat-sight-section dat-sight-destinations"
          id="sg-sightseeing"
        >
          <div className="dat-sight-container">
            <div className="dat-sight-section-heading">
              <span className="dat-sight-label">Explore Dandeli</span>
              <h2>
                Must-Visit <span>Sightseeing Places</span>
              </h2>
              <p>
                Discover beautiful forest landscapes, scenic backwaters
                and wildlife experiences to consider for your Dandeli trip.
                Enquire about visiting arrangements and availability.
              </p>
            </div>

            <div className="dat-sight-destination-grid">
              {sightseeingPlaces.map((place) => (
                <article
                  className="dat-sight-destination-card"
                  key={place.name}
                >
                  <div className="dat-sight-destination-image">
                    <img
                      src={place.image}
                      alt={`${place.name}, Dandeli sightseeing`}
                      loading="lazy"
                    />
                    <span className="dat-sight-destination-icon">
                      {place.icon}
                    </span>
                  </div>

                  <div className="dat-sight-destination-content">
                    <span className="dat-sight-destination-category">
                      {place.category}
                    </span>

                    <h3>{place.name}</h3>
                    <p>{place.description}</p>

                    <a
                      className="dat-sight-btn"
                      href={bookingLink(
                        `Hi Dandeli Adventure Thrills! I would like to enquire about visiting ${place.name}. Please share availability and visit details.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp /> ENQUIRE ABOUT VISIT
                      <FaArrowRight />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="dat-sight-destination-note">
              Visiting hours, permits, access and activity availability
              may vary. Please confirm the latest details before travelling.
            </p>
          </div>
        </section>

        {/* 2. WATER ACTIVITIES AFTER SIGHTSEEING */}
        <section className="dat-sight-section dat-sight-water" id="sg-water">
          <div className="dat-sight-container">
            <div className="dat-sight-section-heading">
              <span className="dat-sight-label">Adventure Awaits</span>
              <h2>
                Exciting <span>Water Activities</span>
              </h2>
              <p>
                Make your Dandeli getaway more exciting with river
                adventures and fun-filled activities. Contact us to
                confirm availability and arrangements.
              </p>
            </div>

            <div className="dat-sight-activity-grid">
              {waterActivities.map((activity) => (
                <article
                  className="dat-sight-activity-card"
                  key={activity.name}
                >
                  <div className="dat-sight-activity-icon">
                    {activity.icon}
                  </div>

                  <span className="dat-sight-activity-category">
                    {activity.category}
                  </span>

                  <h3>{activity.name}</h3>
                  <p>{activity.description}</p>

                  <a
                    className="dat-sight-btn"
                    href={bookingLink(
                      `Hi Dandeli Adventure Thrills! I would like to enquire about ${activity.name}. Please share availability and booking details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp /> ENQUIRE <FaArrowRight />
                  </a>
                </article>
              ))}
            </div>

            <p className="dat-sight-activity-note">
              Activities are subject to operator availability, weather,
              water conditions, age requirements and safety restrictions.
            </p>
          </div>
        </section>

        {/* RESORT EXPERIENCE */}
        <section className="dat-sight-section">
          <div className="dat-sight-container dat-sight-package-info">
            <div className="dat-sight-image">
              <img
                src={images.hero}
                alt="River and nature experience in Dandeli"
                loading="lazy"
              />
            </div>

            <div className="dat-sight-copy">
              <span className="dat-sight-label">
                The Dandeli Experience
              </span>

              <h2>
                One Trip.
                <br />
                <span>Memories for a Lifetime.</span>
              </h2>

              <p>
                Plan a refreshing escape with Dandeli Adventure Thrills.
                Enjoy a combination of accommodation, meals, outdoor
                activities and opportunities to explore Dandeli's
                natural surroundings.
              </p>

              <p>
                Whether travelling with family, friends, your partner
                or a group, enquire about the available stay options
                and experiences for your visit.
              </p>

              <div className="dat-sight-note">
                <FaStar />
                <div>
                  <strong>Plan Your Stay</strong>
                  <br />
                  Contact us to confirm current facilities,
                  accommodation options and available services.
                </div>
              </div>

              <a
                className="dat-sight-btn"
                href={bookingLink(
                  "Hi Dandeli Adventure Thrills! Please share your available resort stay options and package details."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> ENQUIRE ABOUT STAYS <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* STAY OPTIONS WITHOUT PRICES */}
        <section className="dat-sight-section dat-sight-rooms" id="sg-packages">
          <div className="dat-sight-container">
            <div className="dat-sight-section-heading">
              <span className="dat-sight-label">Choose Your Stay</span>
              <h2>
                Find Your <span>Perfect Stay</span>
              </h2>
              <p>
                Choose the accommodation style that suits your trip.
                Contact us for package information and availability.
              </p>
            </div>

            <div className="dat-sight-room-grid">
              {roomPackages.map((room) => (
                <article
                  className={`dat-sight-room ${
                    room.featured ? "dat-sight-room-featured" : ""
                  }`}
                  key={room.name}
                >
                  <span className="dat-sight-room-tag">{room.tag}</span>
                  <h3>{room.name}</h3>
                  <p>{room.description}</p>

                  <a
                    className="dat-sight-btn"
                    href={bookingLink(
                      `Hi Dandeli Adventure Thrills! I am interested in the ${room.name} accommodation option for your 1 Night & 2 Days package. Please share availability and package details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp /> ENQUIRE NOW <FaArrowRight />
                  </a>
                </article>
              ))}
            </div>

            <div className="dat-sight-meals">
              <span className="dat-sight-meal"><FaUtensils /> Lunch</span>
              <span className="dat-sight-meal"><FaUtensils /> Dinner</span>
              <span className="dat-sight-meal"><FaUtensils /> Breakfast</span>
            </div>

            <p className="dat-sight-meals-note">
              Meal options and package inclusions should be confirmed
              with the resort before booking.
            </p>
          </div>
        </section>

        {/* OTHER RESORT ACTIVITIES */}
        <section className="dat-sight-section dat-sight-included">
          <div className="dat-sight-container">
            <div className="dat-sight-section-heading">
              <span className="dat-sight-label">More Resort Experiences</span>
              <h2>
                Fun Beyond <span>the River</span>
              </h2>
              <p>
                Discover additional recreational activities that may
                be available during your resort stay.
              </p>
            </div>

            <div className="dat-sight-included-grid">
              {includedActivities.map((activity) => (
                <article
                  className="dat-sight-included-item"
                  key={activity.name}
                >
                  <span>{activity.icon}</span>
                  <div>
                    <h3>{activity.name}</h3>
                    <p>{activity.detail}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="dat-sight-veg-banner">
              <div className="dat-sight-veg-copy">
                <div className="dat-sight-veg-icon">
                  <FaLeaf />
                </div>
                <div>
                  <h3>Looking for Pure Veg Resorts in Dandeli?</h3>
                  <p>
                    Explore our dedicated Pure Veg Resorts page to
                    discover vegetarian stay options and enquire
                    about your preferred accommodation.
                  </p>
                </div>
              </div>

              <a className="dat-sight-btn dat-sight-btn-veg" href="/veg">
                <FaLeaf /> PURE VEG RESORTS <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* NATURE GALLERY */}
        <section className="dat-sight-section">
          <div className="dat-sight-container">
            <div className="dat-sight-section-heading">
              <span className="dat-sight-label">Your Nature Escape</span>
              <h2>
                Escape the Ordinary.
                <br />
                <span>Reconnect with Nature.</span>
              </h2>
              <p>
                Discover green landscapes, relaxing accommodation
                and outdoor experiences on your next Dandeli getaway.
              </p>
            </div>

            <div className="dat-sight-gallery">
              <div className="dat-sight-gallery-card">
                <img
                  src={resortImage}
                  alt="Resort-style holiday accommodation"
                  loading="lazy"
                  onError={() => setResortImage(images.hero)}
                />
                <div className="dat-sight-gallery-caption">
                  Relax, Refresh &amp; Recharge
                </div>
              </div>

              <div className="dat-sight-gallery-card">
                <img
                  src={campingImage}
                  alt="Camping in a natural setting"
                  loading="lazy"
                  onError={() => setCampingImage(images.hero)}
                />
                <div className="dat-sight-gallery-caption">
                  Discover the Great Outdoors
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT INFORMATION */}
        <section className="dat-sight-section dat-sight-rooms">
          <div className="dat-sight-container">
            <div className="dat-sight-section-heading">
              <span className="dat-sight-label">Before You Book</span>
              <h2>
                A Few <span>Important Details</span>
              </h2>
              <p>
                Confirm the following information before finalising your trip.
              </p>
            </div>

            <div className="dat-sight-note">
              <FaCheckCircle />
              <div>
                <strong>Package duration and meals</strong>
                <br />
                Ask the resort to confirm your stay duration,
                meal inclusions and dining arrangements.
              </div>
            </div>

            <div className="dat-sight-note">
              <FaMapMarkerAlt />
              <div>
                <strong>Transportation and sightseeing</strong>
                <br />
                Confirm transport arrangements, sightseeing access
                and travel requirements before your visit.
              </div>
            </div>

            <div className="dat-sight-note">
              <FaUsers />
              <div>
                <strong>Availability and booking details</strong>
                <br />
                Confirm occupancy requirements, applicable terms,
                activity availability and final booking details
                directly with the resort.
              </div>
            </div>
          </div>
        </section>

        {/* FINAL WHATSAPP CTA */}
        <section className="dat-sight-booking">
          <div className="dat-sight-container dat-sight-booking-inner">
            <div className="dat-sight-booking-copy">
              <h2>
                Ready for Your
                <br />
                <span>Dandeli Getaway?</span>
              </h2>
              <p>
                Contact Dandeli Adventure Thrills to enquire about
                sightseeing, water activities, accommodation and
                available arrangements for your travel dates.
              </p>
            </div>

            <a
              className="dat-sight-btn"
              href={bookingLink(
                "Hi Dandeli Adventure Thrills! Please share your latest resort packages, sightseeing information, water activities and availability."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> CHAT ON WHATSAPP <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}