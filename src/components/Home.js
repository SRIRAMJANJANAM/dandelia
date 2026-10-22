
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCompass,
  FaPhoneAlt,
  FaCalendarAlt,
  FaChevronRight,
  FaLeaf,
  FaWater,
  FaTree,
  FaMoon,
  FaUmbrellaBeach,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBed,
  FaUtensils,
  FaShieldAlt,
  FaUsers,
  FaArrowRight,
  FaStar,
  FaMountain,
  FaSwimmingPool,
  FaClock,
  FaWhatsapp,
  FaInfoCircle,
  FaHeart,
  FaAward,
  FaQuestionCircle,
  FaPlus,
  FaMinus,
  FaHandsHelping,
  FaWallet,
} from "react-icons/fa";

const PHONE = "+919591525484";
const WHATSAPP = "919591525484";

const fallbackImages = {
  hero: "images/riverside.png",
  rafting:
    "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1000&q=85",
  camping:
    "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1000&q=85",
  resort:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
  riverside:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
  forest:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85",
  river:
    "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1200&q=85",
  stay:
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=85",
};

const VEG_RESORTS_LINK = "/veg";

const experiences = [
  {
    title: "River Adventures",
    description:
      "Experience river activities and discover the beauty of the Kali River.",
    icon: FaWater,
    image: "/images/river-rafting-in-dandeli.png",
    fallback: fallbackImages.rafting,
    link: "/sightseeings",
  },
  {
    title: "Jungle Stays",
    description:
      "Relax in peaceful surroundings and wake up to the beauty of nature.",
    icon: FaTree,
    image: "/images/jungle-stay.png",
    fallback: fallbackImages.forest,
    link: "/sightseeings",
  },
  {
    title: "Camping Experiences",
    description:
      "Enjoy the outdoors, campfire moments and time with your favourite people.",
    icon: FaMoon,
    image: "/images/jungle-camping.png",
    fallback: fallbackImages.camping,
    link: "/sightseeings",
  },
  {
    title: "Pure Veg Resorts",
    description:
      "Explore pure vegetarian resorts and comfortable stays for your Dandeli getaway.",
    icon: FaUmbrellaBeach,
    image: "/images/riverside.png",
    fallback: fallbackImages.resort,
    link: VEG_RESORTS_LINK,
  },
];

const highlights = [
  {
    title: "Easy Reservations",
    description:
      "Enquire about your preferred dates and package directly with our team.",
    icon: FaCalendarAlt,
  },
  {
    title: "Friendly Support",
    description:
      "Get assistance when planning your stay and choosing your package.",
    icon: FaUsers,
  },
  {
    title: "Nature Experiences",
    description:
      "Explore river activities, forest surroundings and outdoor adventures.",
    icon: FaMapMarkerAlt,
  },
  {
    title: "Meal Options",
    description:
      "The package includes one lunch, one dinner and one breakfast with veg and non-veg buffet options.",
    icon: FaUtensils,
  },
  {
    title: "Stay Choices",
    description:
      "Choose between Dormitory, Deluxe Room and Deluxe Cottage accommodation.",
    icon: FaBed,
  },
  {
    title: "Adventure & Relaxation",
    description:
      "Combine outdoor activities with time to relax in a natural setting.",
    icon: FaShieldAlt,
  },
];

const gallery = [
  {
    title: "River Adventures",
    image: "/images/river-rafting-in-dandeli.png",
    fallback: fallbackImages.rafting,
  },
  {
    title: "Jungle Camping",
    image: "/images/jungle-camping.png",
    fallback: fallbackImages.camping,
  },
  {
    title: "Resort Stays",
    image: "/images/resort.png",
    fallback: fallbackImages.resort,
  },
  {
    title: "Nature Escapes",
    image: "/images/riverside.png",
    fallback: fallbackImages.riverside,
  },
];

const packagePlans = [
  {
    name: "Dormitory",
    price: "₹2,000",
    tag: "Budget Friendly",
    icon: "🛏️",
  },
  {
    name: "Deluxe Room",
    price: "₹2,500",
    tag: "Comfort Stay",
    icon: "🏡",
  },
  {
    name: "Deluxe Cottage",
    price: "₹3,000",
    tag: "Premium Stay",
    icon: "🌿",
  },
];

const packageActivities = [
  "Boating in River Kali",
  "River Kayaking",
  "Water Zorbing",
  "Swimming Pool",
  "Archery",
  "Jungle Trekking",
  "Campfire",
  "Indoor Games",
  "Outdoor Games",
];

const extraCostActivities = [
  { name: "Long River Rafting", distance: "11 km", price: "₹1,600" },
  { name: "Mid River Rafting", distance: "5 km", price: "₹1,350" },
  { name: "Short River Rafting", distance: "1 km", price: "₹600" },
  {
    name: "Jungle Safari",
    distance: "Safari experience",
    price: "₹650",
  },
];

const whyUsItems = [
  {
    icon: FaHeart,
    title: "Memorable Experiences",
    description:
      "Enjoy a getaway combining nature, outdoor activities and time with family or friends.",
  },
  {
    icon: FaWallet,
    title: "Stay Options for Different Budgets",
    description:
      "Choose Dormitory, Deluxe Room or Deluxe Cottage according to your preferences.",
  },
  {
    icon: FaUtensils,
    title: "Meals Included",
    description:
      "The listed package includes one lunch, one dinner and one breakfast, with vegetarian and non-vegetarian buffet options.",
  },
  {
    icon: FaMountain,
    title: "Activities in One Package",
    description:
      "Enjoy the listed boating, kayaking, zorbing, pool, trekking, archery and games.",
  },
  {
    icon: FaHandsHelping,
    title: "Booking Assistance",
    description:
      "Ask our team about dates, accommodation, activity availability and final package details.",
  },
  {
    icon: FaAward,
    title: "Nature-Focused Stay",
    description:
      "Enjoy a resort experience surrounded by Dandeli's natural beauty.",
  },
];

const faqs = [
  {
    question: "What is included in the 1 Night & 2 Days package?",
    answer:
      "The package lists accommodation, one lunch, one dinner and one breakfast with vegetarian and non-vegetarian buffet options. Activities include boating in River Kali, river kayaking, water zorbing, swimming pool access, archery, jungle trekking, campfire, indoor games and outdoor games. Confirm the current inclusions and availability when booking.",
  },
  {
    question: "What are the package prices per person?",
    answer:
      "The listed starting prices are ₹2,000 per person for Dormitory, ₹2,500 per person for Deluxe Room and ₹3,000 per person for Deluxe Cottage. Contact the resort to confirm current prices, availability and applicable conditions.",
  },
  {
    question: "Which meals are provided?",
    answer:
      "The package includes one lunch, one dinner and one breakfast. Vegetarian and non-vegetarian buffet options are listed. Tell the resort about any dietary requirements in advance.",
  },
  {
    question: "Which activities are included?",
    answer:
      "The listed activities are boating in River Kali, river kayaking, water zorbing, swimming pool, archery, jungle trekking, campfire, indoor games and outdoor games. Availability depends on operating conditions and schedules.",
  },
  {
    question: "Is river rafting included in the package price?",
    answer:
      "River rafting is listed as an extra-cost activity. Starting prices listed are ₹1,600 per person for 11 km long rafting, ₹1,350 for 5 km mid rafting and ₹600 for 1 km short rafting. Confirm current prices and operating conditions before booking.",
  },
  {
    question: "How much does jungle safari cost?",
    answer:
      "The listed starting price for jungle safari is ₹650 per person, charged separately from the accommodation package. Confirm current charges and safari arrangements with the resort.",
  },
  {
    question: "Is transportation included?",
    answer:
      "Transportation is not included in the package details provided. Arrange your own transport unless the resort separately confirms a transport service and its price.",
  },
  {
    question: "How do I choose my accommodation?",
    answer:
      "Choose according to your group's needs, comfort preferences and budget. The listed starting prices are ₹2,000 for Dormitory, ₹2,500 for Deluxe Room and ₹3,000 for Deluxe Cottage per person. Confirm room configuration, occupancy and final pricing.",
  },
  {
    question: "How can I check dates and book?",
    answer:
      "Use the booking enquiry form or contact the resort through WhatsApp or phone. Share your preferred dates, number of guests and accommodation choice. Your booking is confirmed only after availability is verified and arrangements are confirmed.",
  },
  {
    question: "Are all activities available every day?",
    answer:
      "Availability can depend on weather, river conditions, safety requirements, operating schedules and local restrictions. Confirm activities for your dates and follow staff safety instructions.",
  },
];

function SafeImage({
  src,
  fallback,
  alt,
  className = "",
  loading = "lazy",
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [fallbackUsed, setFallbackUsed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setFallbackUsed(false);
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => {
        if (!fallbackUsed && currentSrc !== fallback) {
          setFallbackUsed(true);
          setCurrentSrc(fallback);
        }
      }}
    />
  );
}

function Reveal({ children, className = "", direction = "up", delay = 0 }) {
  return (
    <div
      className={`dat-reveal dat-reveal-${direction} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div
      className={`dat-section-heading ${
        light ? "dat-light-heading" : ""
      }`}
    >
      <span className="dat-eyebrow">
        <FaLeaf />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  const homeRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    guests: "2",
    checkin: "",
    checkout: "",
    stay: "Deluxe Room",
  });

  useEffect(() => {
    const root = homeRef.current;
    if (!root) return undefined;

    const targets = root.querySelectorAll(".dat-reveal");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      targets.forEach((target) => target.classList.add("dat-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("dat-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px 0px" }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  const updateBooking = (event) => {
    const { name, value } = event.target;
    setBooking((previous) => ({ ...previous, [name]: value }));
  };

  const sendWhatsAppMessage = (message) => {
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const enquireAboutPlan = (planName) => {
    sendWhatsAppMessage(
      `Hello Dandeli Adventure Thrills!

I am interested in your 1 Night & 2 Days package.

Preferred accommodation: ${planName}

Please share the starting price, current availability, meals, activity details and final booking price.`
    );
  };

  const sendBooking = (event) => {
    event.preventDefault();

    if (
      booking.checkin &&
      booking.checkout &&
      booking.checkout <= booking.checkin
    ) {
      window.alert("Check-out date must be after the check-in date.");
      return;
    }

    const message = `Hello Dandeli Adventure Thrills! I would like to enquire about your 1 Night & 2 Days package.

Name: ${booking.name}
Phone: ${booking.phone}
Number of guests: ${booking.guests}
Preferred accommodation: ${booking.stay}
Check-in date: ${booking.checkin || "Flexible"}
Check-out date: ${booking.checkout || "Flexible"}

Please share availability, starting price, final package price and booking details.

Thank you.`;

    sendWhatsAppMessage(message);
  };

  return (
    <main className="dat-home" ref={homeRef}>
      <style>{`
        .dat-home {
          --forest:#073b30;
          --deep:#06271f;
          --green:#16835c;
          --gold:#ffbf16;
          --cream:#faf9f4;
          --text:#17372f;
          --muted:#65736d;
          width:100%;
          overflow:clip;
          color:var(--text);
          background:var(--cream);
          font-family:"DM Sans","Segoe UI",Arial,sans-serif;
          line-height:1.65;
        }
        .dat-home *, .dat-home *::before, .dat-home *::after {box-sizing:border-box}
        .dat-home img {display:block;max-width:100%}
        .dat-home a {color:inherit;text-decoration:none}
        .dat-home button,.dat-home input,.dat-home select {font:inherit}
        .dat-home .dat-container {width:min(1440px,88%);margin-inline:auto}
        .dat-home .dat-reveal {
          opacity:0;
          transition:opacity 750ms ease,transform 850ms cubic-bezier(.2,.7,.2,1);
          transition-delay:var(--reveal-delay,0ms);
        }
        .dat-home .dat-reveal-up {transform:translateY(38px)}
        .dat-home .dat-reveal-left {transform:translate(-45px,12px)}
        .dat-home .dat-reveal-right {transform:translate(45px,12px)}
        .dat-home .dat-reveal-scale {transform:scale(.94)}
        .dat-home .dat-reveal.dat-visible {opacity:1;transform:translate(0) scale(1)}
        .dat-home .dat-eyebrow {
          display:inline-flex;align-items:center;gap:8px;margin-bottom:12px;
          color:var(--green);font-size:12px;font-weight:800;letter-spacing:2px;
          text-transform:uppercase;
        }
        .dat-home .dat-btn {
          display:inline-flex;align-items:center;justify-content:center;gap:10px;
          min-height:51px;padding:13px 23px;border:1px solid transparent;
          border-radius:40px;font-size:13px;font-weight:800;line-height:1.4;
          text-align:center;cursor:pointer;transition:.25s ease;
        }
        .dat-home .dat-btn:hover {transform:translateY(-3px)}
        .dat-home .dat-btn-gold {background:var(--gold);color:#161b12;box-shadow:0 7px 24px #ffbf162e}
        .dat-home .dat-btn-gold:hover {background:#ffd14a}
        .dat-home .dat-btn-outline {color:white;border-color:#ffffffbd;background:#04191045}
        .dat-home .dat-btn-outline:hover {background:#ffffff1f}
        .dat-home .dat-btn-green {background:var(--forest);color:white}
        .dat-home .dat-btn-green:hover {background:#105640}
        .dat-home .dat-hero {
          position:relative;isolation:isolate;display:flex;align-items:center;
          min-height:clamp(550px,39vw,660px);margin-top:-86px;padding:145px 0 62px;
          color:white;background:#08271f;
        }
        .dat-home .dat-hero-image {
          position:absolute;inset:0;z-index:-3;width:100%;height:100%;
          object-fit:cover;object-position:center 48%;
        }
        .dat-home .dat-hero-overlay {
          position:absolute;inset:0;z-index:-2;
          background:linear-gradient(90deg,#021813e8,#021813bf 31%,#02181347 62%,#02181314),
          linear-gradient(0deg,#02181326,transparent 50%);
        }
        .dat-home .dat-hero-content {width:min(1440px,88%);margin:auto;position:relative;z-index:1}
        .dat-home .dat-hero-copy {max-width:730px}
        .dat-home .dat-hero .dat-eyebrow {color:#b6f1b0;margin-bottom:18px}
        .dat-home .dat-hero h1 {
          max-width:780px;margin:0 0 18px;color:white;
          font-size:clamp(38px,4.1vw,66px);font-weight:900;line-height:1.06;
          letter-spacing:-2px;text-transform:uppercase;
        }
        .dat-home .dat-hero h1 span {color:var(--gold)}
        .dat-home .dat-hero-subtitle {margin-bottom:12px;font-size:clamp(21px,2vw,29px);font-weight:700;line-height:1.3}
        .dat-home .dat-hero-description {max-width:560px;color:#ffffffed;font-size:16px;line-height:1.8}
        .dat-home .dat-hero-actions {display:flex;gap:13px;flex-wrap:wrap;margin-top:25px}
        .dat-home .dat-hero-note {display:flex;align-items:center;gap:10px;margin-top:19px;font-size:13px;font-style:italic}
        .dat-home .dat-hero-note svg {color:#a6e8a3;font-size:19px}
        .dat-home .dat-hero-badge {
          position:absolute;right:6%;bottom:32px;display:flex;align-items:center;gap:12px;
          padding:12px 18px;border:1px solid #ffffff3b;border-radius:14px;
          background:#05251f80;backdrop-filter:blur(12px);font-size:12px;font-weight:700;
        }
        .dat-home .dat-hero-badge-icon {
          display:grid;place-items:center;width:39px;height:39px;border-radius:50%;
          background:var(--gold);color:var(--deep);font-size:17px;
        }
        .dat-home .dat-hero-badge strong {display:block;font-size:15px}
        .dat-home .dat-experience-strip {
          display:grid;grid-template-columns:repeat(4,minmax(0,1fr));padding:22px 5%;
          background:linear-gradient(110deg,#062a23,#0b332a,#06271f);color:white;
        }
        .dat-home .dat-experience-item {
          display:flex;min-width:0;flex-direction:column;align-items:center;justify-content:center;
          gap:5px;padding:0 14px;text-align:center;border-right:1px solid #ffffff45;
        }
        .dat-home .dat-experience-item:last-child {border-right:0}
        .dat-home .dat-experience-icon {display:grid;place-items:center;min-height:48px;color:var(--gold);font-size:34px;transition:.25s}
        .dat-home .dat-experience-item:hover .dat-experience-icon {transform:translateY(-4px)}
        .dat-home .dat-experience-item strong {font-size:14px}
        .dat-home .dat-intro {padding:56px 0;background:var(--cream)}
        .dat-home .dat-intro-grid {display:grid;grid-template-columns:.92fr 1.18fr;align-items:center;gap:38px}
        .dat-home .dat-script {display:block;color:#1c9a6c;font:italic 700 18px Georgia,serif}
        .dat-home .dat-intro h2 {margin:0 0 15px;color:var(--forest);font-size:clamp(27px,2.5vw,39px);line-height:1.2;letter-spacing:-1.2px}
        .dat-home .dat-intro p,.dat-home .dat-story-copy>p {margin-bottom:11px;color:#53635d;font-size:14px;line-height:1.85}
        .dat-home .dat-inline-link {display:inline-flex;align-items:center;gap:9px;margin-top:9px;color:#137e57;font-size:13px;font-weight:800}
        .dat-home .dat-inline-link svg {transition:transform .2s}
        .dat-home .dat-inline-link:hover svg {transform:translateX(4px)}
        .dat-home .dat-gallery-grid {display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
        .dat-home .dat-gallery-card {position:relative;min-width:0;height:clamp(150px,13vw,205px);overflow:hidden;border-radius:10px;background:#d9e3d8}
        .dat-home .dat-gallery-card img {width:100%;height:100%;object-fit:cover;transition:transform .5s}
        .dat-home .dat-gallery-card:hover img {transform:scale(1.07)}
        .dat-home .dat-gallery-card::after {content:"";position:absolute;inset:40% 0 0;background:linear-gradient(transparent,#000a);opacity:0;transition:.3s}
        .dat-home .dat-gallery-card:hover::after {opacity:1}
        .dat-home .dat-gallery-label {position:absolute;right:8px;bottom:8px;left:8px;z-index:1;color:white;font-size:11px;font-weight:800;opacity:0;transition:.3s}
        .dat-home .dat-gallery-card:hover .dat-gallery-label {opacity:1}
        .dat-home .dat-story {padding:84px 0;background:white}
        .dat-home .dat-story-grid {display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:65px}
        .dat-home .dat-story-image-wrap {position:relative;min-height:370px}
        .dat-home .dat-story-image {position:relative;z-index:1;width:100%;height:390px;border-radius:17px;object-fit:cover;box-shadow:0 18px 45px #073b3026}
        .dat-home .dat-story-image-accent {position:absolute;right:-16px;bottom:-16px;z-index:0;width:45%;height:42%;border:4px solid white;border-radius:14px;background:#0c4837}
        .dat-home .dat-story h2 {margin-bottom:18px;color:var(--forest);font-size:clamp(30px,3vw,43px);line-height:1.17}
        .dat-home .dat-check-list {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:23px 0}
        .dat-home .dat-check-list span {display:flex;align-items:center;gap:9px;color:#315449;font-size:13px;font-weight:700}
        .dat-home .dat-check-list svg {flex-shrink:0;color:#19875f}
        .dat-home .dat-section-heading {max-width:760px;margin:0 auto 38px;text-align:center}
        .dat-home .dat-section-heading h2 {margin-bottom:13px;color:var(--forest);font-size:clamp(28px,3.3vw,43px);font-weight:850;line-height:1.2}
        .dat-home .dat-section-heading>p {color:var(--muted);font-size:14px;line-height:1.85}
        .dat-home .dat-light-heading h2,.dat-home .dat-light-heading>p {color:white}
        .dat-home .dat-light-heading .dat-eyebrow {color:#b6efad}
        .dat-home .dat-activities {padding:78px 0 85px;background:#f0f4ed}
        .dat-home .dat-activity-grid {display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px}
        .dat-home .dat-activity-card {min-width:0;overflow:hidden;border:1px solid #e8ece5;border-radius:15px;background:white;box-shadow:0 7px 22px #052d200b;transition:.3s}
        .dat-home .dat-activity-card:hover {transform:translateY(-6px);box-shadow:0 16px 35px #052d201f}
        .dat-home .dat-activity-image-wrap {height:205px;overflow:hidden;background:#dbe4d9}
        .dat-home .dat-activity-image {width:100%;height:100%;object-fit:cover;transition:transform .45s}
        .dat-home .dat-activity-card:hover .dat-activity-image {transform:scale(1.06)}
        .dat-home .dat-activity-body {padding:21px}
        .dat-home .dat-activity-icon {display:grid;place-items:center;position:relative;width:43px;height:43px;margin-top:-43px;margin-bottom:14px;border:3px solid white;border-radius:50%;background:var(--gold);color:var(--deep);font-size:17px}
        .dat-home .dat-activity-body h3 {margin-bottom:8px;color:var(--forest);font-size:17px;line-height:1.35}
        .dat-home .dat-activity-body p {min-height:68px;margin-bottom:13px;color:var(--muted);font-size:13px;line-height:1.75}
        .dat-home .dat-benefits {padding:78px 0;background:white}
        .dat-home .dat-benefit-grid {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px 35px}
        .dat-home .dat-benefit-card {display:flex;align-items:flex-start;gap:16px;padding:19px 16px;border-radius:12px;transition:.25s}
        .dat-home .dat-benefit-card:hover {transform:translateY(-3px);background:#f4f7f0}
        .dat-home .dat-benefit-icon {display:grid;place-items:center;flex:0 0 auto;width:49px;height:49px;border-radius:13px;background:#e9f4e8;color:#16845b;font-size:21px}
        .dat-home .dat-benefit-card h3 {margin-bottom:6px;color:var(--forest);font-size:16px}
        .dat-home .dat-benefit-card p {color:var(--muted);font-size:13px;line-height:1.8}
        .dat-home .dat-why-us {padding:85px 0;background:radial-gradient(ellipse at 0 0,#1e7b5338,transparent 38%),linear-gradient(125deg,#052a21,#0a3c2e 55%,#06271f);color:white}
        .dat-home .dat-why-grid {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
        .dat-home .dat-why-card {min-height:220px;padding:27px 24px;border:1px solid #ffffff21;border-radius:16px;background:#ffffff0e;transition:.3s}
        .dat-home .dat-why-card:hover {transform:translateY(-7px);background:#ffffff1a;border-color:#ffbf1680}
        .dat-home .dat-why-icon {display:grid;place-items:center;width:54px;height:54px;margin-bottom:19px;border-radius:15px;background:#ffbf1624;color:var(--gold);font-size:23px}
        .dat-home .dat-why-card h3 {margin-bottom:10px;color:white;font-size:18px}
        .dat-home .dat-why-card p {color:#ffffffc2;font-size:13px;line-height:1.85}
        .dat-home .dat-why-bottom {display:flex;align-items:center;justify-content:center;gap:12px;margin-top:31px;color:#ffdc71;font-size:13px;font-weight:800;text-align:center}
        .dat-home .dat-packages {padding:82px 0;background:var(--cream)}
        .dat-home .dat-package-intro {max-width:800px;margin:-12px auto 34px;color:var(--muted);text-align:center;font-size:14px;line-height:1.85}
        .dat-home .dat-package-badges {display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-bottom:30px}
        .dat-home .dat-package-badge {display:inline-flex;align-items:center;gap:8px;padding:10px 15px;border:1px solid #dce9dc;border-radius:40px;background:white;color:#174b39;font-size:12px;font-weight:800}
        .dat-home .dat-package-badge svg {color:var(--green)}
        .dat-home .dat-package-duration {width:fit-content;margin:0 auto 30px;padding:12px 25px;border-radius:40px;background:var(--forest);color:white;font-size:14px;font-weight:800;text-align:center}
        .dat-home .dat-package-duration span {color:var(--gold)}
        .dat-home .dat-package-grid {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
        .dat-home .dat-package-card {padding:30px 24px;border:1px solid #e1e9df;border-radius:17px;background:white;text-align:center;box-shadow:0 9px 28px #073b300e;transition:.25s}
        .dat-home .dat-package-card:hover {transform:translateY(-6px);box-shadow:0 18px 38px #073b301f}
        .dat-home .dat-package-card.dat-package-featured {border:2px solid #e8b523}
        .dat-home .dat-package-tag {display:inline-block;margin-bottom:16px;padding:6px 12px;border-radius:30px;background:#edf6e9;color:#176444;font-size:11px;font-weight:800}
        .dat-home .dat-package-emoji {display:grid;place-items:center;width:66px;height:66px;margin:0 auto 16px;border-radius:50%;background:#f1f5e9;font-size:32px}
        .dat-home .dat-package-card h3 {margin-bottom:9px;color:var(--forest);font-size:21px}
        .dat-home .dat-starting-label {display:block;margin-bottom:3px;color:#65736d;font-size:12px;font-weight:700;line-height:1.5}
        .dat-home .dat-package-price {color:var(--green);font-size:clamp(29px,3vw,37px);font-weight:900;line-height:1.2}
        .dat-home .dat-package-price .dat-starting-label {font-size:13px}
        .dat-home .dat-package-unit {margin:5px 0 19px;color:#78847d;font-size:12px}
        .dat-home .dat-package-meals {margin-bottom:18px;padding:13px;border-radius:10px;background:#f6f8f2;color:#36564a;font-size:12px;line-height:1.8}
        .dat-home .dat-package-card .dat-btn {width:100%;margin-top:5px}
        .dat-home .dat-included-box {margin-top:35px;padding:29px;border-radius:17px;background:var(--forest);color:white}
        .dat-home .dat-included-box h3 {margin-bottom:8px;color:white;font-size:24px;text-align:center}
        .dat-home .dat-included-box>p {margin-bottom:23px;color:#ffffffc7;font-size:13px;text-align:center}
        .dat-home .dat-included-grid {display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px}
        .dat-home .dat-included-item {display:flex;align-items:center;gap:8px;padding:12px;border:1px solid #ffffff26;border-radius:10px;background:#ffffff0f;font-size:12px;font-weight:700}
        .dat-home .dat-included-item svg {flex-shrink:0;color:var(--gold)}
        .dat-home .dat-meal-note {display:flex;align-items:center;justify-content:center;gap:10px;margin-top:20px;color:#ffdf76;font-size:13px;font-weight:700;text-align:center}
        .dat-home .dat-extra-section {margin-top:35px;padding:28px;border:1px solid #e3e9dd;border-radius:17px;background:white}
        .dat-home .dat-extra-section h3 {margin-bottom:8px;color:var(--forest);font-size:24px;text-align:center}
        .dat-home .dat-extra-section>p {margin-bottom:23px;color:var(--muted);font-size:13px;text-align:center}
        .dat-home .dat-extra-grid {display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
        .dat-home .dat-extra-card {padding:19px 14px;border:1px solid #e7ece3;border-radius:12px;background:#fafbf7;text-align:center;transition:.25s}
        .dat-home .dat-extra-card:hover {transform:translateY(-4px);box-shadow:0 10px 24px #073b3014}
        .dat-home .dat-extra-icon {display:grid;place-items:center;width:42px;height:42px;margin:0 auto 12px;border-radius:50%;background:#edf6e9;color:var(--green);font-size:18px}
        .dat-home .dat-extra-card h4 {margin-bottom:7px;color:#174b39;font-size:14px}
        .dat-home .dat-extra-distance {margin-bottom:10px;color:#77847c;font-size:12px}
        .dat-home .dat-extra-price {color:var(--green);font-size:24px;font-weight:900;line-height:1.3}
        .dat-home .dat-extra-price .dat-starting-label {font-size:12px}
        .dat-home .dat-extra-unit {color:#77847c;font-size:11px}
        .dat-home .dat-package-note {display:flex;align-items:flex-start;gap:10px;margin-top:23px;padding:15px 18px;border-left:4px solid #e8b523;border-radius:5px 10px 10px 5px;background:#fff7dc;color:#594b21;font-size:13px;line-height:1.8}
        .dat-home .dat-package-note svg {flex-shrink:0;margin-top:4px}
        .dat-home .dat-package-cta {margin-top:25px;text-align:center}
        .dat-home .dat-package-cta p {margin-bottom:16px;color:var(--muted);font-size:13px}
        .dat-home .dat-faq {padding:84px 0;background:#f0f4ed}
        .dat-home .dat-faq-layout {display:grid;grid-template-columns:.72fr 1.28fr;gap:52px;align-items:start}
        .dat-home .dat-faq-intro {position:sticky;top:30px}
        .dat-home .dat-faq-intro h2 {margin-bottom:17px;color:var(--forest);font-size:clamp(30px,3.2vw,43px);line-height:1.15}
        .dat-home .dat-faq-intro>p {margin-bottom:24px;color:var(--muted);font-size:14px;line-height:1.9}
        .dat-home .dat-faq-help {display:flex;align-items:center;gap:13px;padding:17px;border:1px solid #dce9dc;border-radius:13px;background:white}
        .dat-home .dat-faq-help-icon {display:grid;place-items:center;flex-shrink:0;width:44px;height:44px;border-radius:12px;background:#e9f4e8;color:var(--green);font-size:20px}
        .dat-home .dat-faq-help strong {display:block;color:var(--forest);font-size:13px}
        .dat-home .dat-faq-help span {color:var(--muted);font-size:12px}
        .dat-home .dat-faq-list {display:grid;gap:12px}
        .dat-home .dat-faq-item {overflow:hidden;border:1px solid #e1e9df;border-radius:13px;background:white;box-shadow:0 5px 17px #073b3009;transition:.25s}
        .dat-home .dat-faq-item.is-open {border-color:#16835c75;box-shadow:0 10px 26px #073b3013}
        .dat-home .dat-faq-question {display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;padding:19px 21px;border:0;background:transparent;color:var(--forest);text-align:left;font-size:14px;font-weight:800;cursor:pointer}
        .dat-home .dat-faq-question-text {display:flex;align-items:flex-start;gap:12px}
        .dat-home .dat-faq-number {color:var(--green);font-size:12px;font-weight:900}
        .dat-home .dat-faq-toggle {display:grid;place-items:center;flex:0 0 auto;width:31px;height:31px;border-radius:50%;background:#edf6e9;color:var(--green)}
        .dat-home .dat-faq-item.is-open .dat-faq-toggle {background:var(--forest);color:white}
        .dat-home .dat-faq-answer-wrap {display:grid;grid-template-rows:0fr;transition:grid-template-rows .32s ease}
        .dat-home .dat-faq-item.is-open .dat-faq-answer-wrap {grid-template-rows:1fr}
        .dat-home .dat-faq-answer-inner {overflow:hidden}
        .dat-home .dat-faq-answer {margin:0;padding:0 21px 21px 49px;color:var(--muted);font-size:13px;line-height:1.9}
        .dat-home .dat-booking-section {position:relative;isolation:isolate;padding:80px 0;background:#072a22}
        .dat-home .dat-booking-background {position:absolute;inset:0;z-index:-2;width:100%;height:100%;object-fit:cover}
        .dat-home .dat-booking-overlay {position:absolute;inset:0;z-index:-1;background:linear-gradient(100deg,#032018f5,#032018d6)}
        .dat-home .dat-booking-grid {display:grid;grid-template-columns:.85fr 1.15fr;gap:55px;align-items:center}
        .dat-home .dat-booking-copy {color:white}
        .dat-home .dat-booking-copy .dat-eyebrow {color:#b6efad}
        .dat-home .dat-booking-copy h2 {margin-bottom:18px;font-size:clamp(31px,3.4vw,45px);line-height:1.15}
        .dat-home .dat-booking-copy>p {margin-bottom:23px;color:#ffffffcc;font-size:14px;line-height:1.9}
        .dat-home .dat-booking-phone {display:inline-flex;align-items:center;gap:12px;color:white;font-size:16px;font-weight:800}
        .dat-home .dat-booking-phone>svg {width:43px;height:43px;padding:12px;border-radius:50%;background:var(--gold);color:#10251b}
        .dat-home .dat-booking-form {display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:30px;border:1px solid #ffffff73;border-radius:18px;background:#fffffff7;box-shadow:0 22px 55px #0000002b}
        .dat-home .dat-form-title {grid-column:1/-1;margin-bottom:3px;color:var(--forest);font-size:23px;font-weight:850}
        .dat-home .dat-field {display:grid;gap:7px;min-width:0}
        .dat-home .dat-field label {color:#39564b;font-size:12px;font-weight:800}
        .dat-home .dat-field input,.dat-home .dat-field select {width:100%;min-width:0;min-height:46px;padding:10px 12px;border:1px solid #dce5dd;border-radius:8px;outline:none;background:white;color:#284338;font-size:13px}
        .dat-home .dat-field input:focus,.dat-home .dat-field select:focus {border-color:var(--green);box-shadow:0 0 0 3px #16835c1a}
        .dat-home .dat-booking-form>.dat-btn,.dat-home .dat-form-note {grid-column:1/-1}
        .dat-home .dat-booking-form>.dat-btn {width:100%;margin-top:4px}
        .dat-home .dat-form-note {color:#75837c;font-size:11px;text-align:center}
        .dat-home .dat-final-cta {padding:66px 0;background:#f8f7f1;text-align:center}
        .dat-home .dat-final-cta h2 {margin-bottom:13px;color:var(--forest);font-size:clamp(27px,3vw,40px);line-height:1.2}
        .dat-home .dat-final-cta p {max-width:700px;margin:0 auto 24px;color:var(--muted);font-size:14px}
        .dat-home .dat-final-actions {display:flex;justify-content:center;gap:12px;flex-wrap:wrap}
        @media(max-width:1100px) {
          .dat-home .dat-container,.dat-home .dat-hero-content {width:91%}
          .dat-home .dat-hero h1 {font-size:clamp(38px,4.6vw,54px)}
          .dat-home .dat-intro-grid {grid-template-columns:1fr;gap:28px}
          .dat-home .dat-gallery-card {height:190px}
          .dat-home .dat-activity-grid {grid-template-columns:repeat(2,minmax(0,1fr))}
          .dat-home .dat-benefit-grid,.dat-home .dat-why-grid {grid-template-columns:repeat(2,minmax(0,1fr))}
          .dat-home .dat-story-grid {gap:35px}
          .dat-home .dat-booking-grid {gap:30px}
          .dat-home .dat-included-grid {grid-template-columns:repeat(3,minmax(0,1fr))}
          .dat-home .dat-extra-grid {grid-template-columns:repeat(2,minmax(0,1fr))}
          .dat-home .dat-faq-layout {gap:30px}
        }
        @media(max-width:760px) {
          .dat-home .dat-container,.dat-home .dat-hero-content {width:90%}
          .dat-home .dat-hero {min-height:630px;margin-top:-72px;padding:130px 0 55px}
          .dat-home .dat-hero-image {object-position:59% center}
          .dat-home .dat-hero-overlay {background:linear-gradient(90deg,#021813e0,#02181396 70%,#02181359)}
          .dat-home .dat-hero h1 {max-width:570px;font-size:clamp(36px,7.4vw,53px);letter-spacing:-1.3px}
          .dat-home .dat-hero-subtitle {font-size:23px}
          .dat-home .dat-hero-description {max-width:500px;font-size:14px}
          .dat-home .dat-hero-badge {display:none}
          .dat-home .dat-experience-strip {grid-template-columns:repeat(2,minmax(0,1fr));padding:19px 4%;gap:18px 0}
          .dat-home .dat-experience-item {padding:7px 10px}
          .dat-home .dat-experience-item:nth-child(2) {border-right:0}
          .dat-home .dat-experience-item strong {font-size:12px}
          .dat-home .dat-experience-icon {min-height:39px;font-size:28px}
          .dat-home .dat-intro {padding:43px 0}
          .dat-home .dat-gallery-grid {grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
          .dat-home .dat-gallery-card {height:185px}
          .dat-home .dat-gallery-label {opacity:1}
          .dat-home .dat-gallery-card::after {opacity:1}
          .dat-home .dat-story {padding:55px 0}
          .dat-home .dat-story-grid {grid-template-columns:1fr;gap:35px}
          .dat-home .dat-story-image-wrap {min-height:0;margin:0 10px 10px 0}
          .dat-home .dat-story-image {height:320px}
          .dat-home .dat-activities,.dat-home .dat-benefits,.dat-home .dat-why-us,.dat-home .dat-faq {padding:55px 0}
          .dat-home .dat-section-heading {margin-bottom:28px}
          .dat-home .dat-activity-grid {gap:16px}
          .dat-home .dat-activity-image-wrap {height:180px}
          .dat-home .dat-activity-body {padding:17px}
          .dat-home .dat-activity-body p {min-height:85px}
          .dat-home .dat-benefit-grid {grid-template-columns:1fr;gap:5px}
          .dat-home .dat-benefit-card {padding:15px 8px}
          .dat-home .dat-packages {padding:55px 0}
          .dat-home .dat-package-grid {grid-template-columns:repeat(2,minmax(0,1fr))}
          .dat-home .dat-included-box,.dat-home .dat-extra-section {padding:22px}
          .dat-home .dat-included-grid {grid-template-columns:repeat(2,minmax(0,1fr))}
          .dat-home .dat-booking-section {padding:55px 0}
          .dat-home .dat-booking-grid {grid-template-columns:1fr;gap:30px}
          .dat-home .dat-booking-copy h2 {font-size:34px}
          .dat-home .dat-booking-form {padding:22px}
          .dat-home .dat-final-cta {padding:50px 0}
          .dat-home .dat-faq-layout {grid-template-columns:1fr;gap:28px}
          .dat-home .dat-faq-intro {position:static}
          .dat-home .dat-why-card {min-height:200px}
        }
        @media(max-width:480px) {
          .dat-home .dat-hero {min-height:620px;padding-top:118px;padding-bottom:45px}
          .dat-home .dat-hero-image {object-position:61% center}
          .dat-home .dat-hero h1 {font-size:clamp(33px,9vw,43px);line-height:1.09;letter-spacing:-1px}
          .dat-home .dat-hero-subtitle {font-size:20px}
          .dat-home .dat-hero-description {font-size:13px;line-height:1.8}
          .dat-home .dat-hero-actions {align-items:stretch;flex-direction:column;gap:11px;max-width:320px}
          .dat-home .dat-hero-actions .dat-btn {width:100%;min-height:48px}
          .dat-home .dat-hero-note {font-size:12px}
          .dat-home .dat-experience-strip {padding:16px 3%;gap:12px 0}
          .dat-home .dat-experience-item {padding:6px 4px}
          .dat-home .dat-experience-item strong {font-size:11px;line-height:1.4}
          .dat-home .dat-intro h2 {font-size:29px}
          .dat-home .dat-intro p {font-size:13px}
          .dat-home .dat-gallery-card {height:155px}
          .dat-home .dat-story-image {height:260px}
          .dat-home .dat-story h2 {font-size:32px}
          .dat-home .dat-check-list {grid-template-columns:1fr;gap:11px}
          .dat-home .dat-activity-grid,.dat-home .dat-why-grid {grid-template-columns:1fr;gap:20px}
          .dat-home .dat-activity-image-wrap {height:225px}
          .dat-home .dat-activity-body p {min-height:0}
          .dat-home .dat-section-heading h2 {font-size:30px}
          .dat-home .dat-why-card {min-height:0;padding:23px}
          .dat-home .dat-package-grid {grid-template-columns:1fr}
          .dat-home .dat-package-card {padding:25px 20px}
          .dat-home .dat-package-duration {padding:11px 17px;font-size:12px}
          .dat-home .dat-included-box,.dat-home .dat-extra-section {padding:21px 16px}
          .dat-home .dat-included-grid {grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
          .dat-home .dat-included-item {padding:10px 8px;font-size:11px}
          .dat-home .dat-extra-grid {grid-template-columns:1fr}
          .dat-home .dat-booking-form {grid-template-columns:1fr;padding:19px;gap:13px}
          .dat-home .dat-form-title,.dat-home .dat-booking-form>.dat-btn,.dat-home .dat-form-note {grid-column:auto}
          .dat-home .dat-booking-copy h2 {font-size:31px}
          .dat-home .dat-final-actions {flex-direction:column;align-items:stretch}
          .dat-home .dat-final-actions .dat-btn {width:100%}
          .dat-home .dat-faq-question {padding:16px 14px;font-size:13px}
          .dat-home .dat-faq-answer {padding:0 14px 17px 42px;font-size:12px}
          .dat-home .dat-faq-intro h2 {font-size:32px}
        }
        @media(prefers-reduced-motion:reduce) {
          .dat-home *, .dat-home *::before, .dat-home *::after {
            scroll-behavior:auto!important;animation-duration:.01ms!important;transition-duration:.01ms!important;
          }
          .dat-home .dat-reveal {opacity:1;transform:none}
        }
      `}</style>

      {/* HERO */}
      <section className="dat-hero">
        <SafeImage
          src="/images/hero-rafting.png"
          fallback={fallbackImages.hero}
          alt="River adventure in the green forests of Dandeli"
          className="dat-hero-image"
          loading="eager"
        />
        <div className="dat-hero-overlay" />
        <div className="dat-hero-content">
          <div className="dat-hero-copy">
            <span className="dat-eyebrow">
              <FaLeaf /> Your wilderness escape
            </span>
            <h1>
              Your Next Great
              <br />
              <span>Adventure</span> Starts Here
            </h1>
            <h2 className="dat-hero-subtitle">
              Discover the wild beauty of Dandeli.
            </h2>
            <p className="dat-hero-description">
              River adventures, jungle stays, beautiful resorts and
              unforgettable escapes for families, friends and groups. Your
              next adventure starts in the heart of nature.
            </p>
            <div className="dat-hero-actions">
              <Link to="/sightseeings" className="dat-btn dat-btn-gold">
                <FaCompass /> EXPLORE ADVENTURES <FaChevronRight />
              </Link>
              <a href={`tel:${PHONE}`} className="dat-btn dat-btn-outline">
                <FaPhoneAlt /> CALL TO BOOK
              </a>
            </div>
            <div className="dat-hero-note">
              <FaLeaf /> Adventure, comfort and nature in one getaway
            </div>
          </div>
        </div>
        <div className="dat-hero-badge">
          <div className="dat-hero-badge-icon"><FaMountain /></div>
          <div>
            <strong>Escape to the Wild</strong>
            Nature, comfort & adventure
          </div>
        </div>
      </section>

      {/* EXPERIENCE STRIP — REMOVED ANCHOR TAGS */}
      <section className="dat-experience-strip">
        {experiences.map((item) => {
          const Icon = item.icon;
          return (
            <div className="dat-experience-item" key={item.title}>
              <span className="dat-experience-icon"><Icon /></span>
              <strong>{item.title}</strong>
            </div>
          );
        })}
      </section>

      {/* INTRO AND GALLERY — REMOVED ANCHOR TAGS FROM IMAGES */}
      <section className="dat-intro">
        <div className="dat-container dat-intro-grid">
          <Reveal direction="left">
            <span className="dat-script">More Than Just a Trip</span>
            <h2>From Budget Stays to Premium Escapes</h2>
            <p>
              Dandeli Adventure Thrills offers accommodation choices and
              outdoor experiences for visitors looking to enjoy Dandeli's
              natural beauty.
            </p>
            <p>
              Whether you're planning a trip with family, friends, students or
              colleagues, explore the available stay options and activities.
            </p>
            <Link to="/about" className="dat-inline-link">
              Discover Our Story <FaArrowRight />
            </Link>
            <br />
            <Link to={VEG_RESORTS_LINK} className="dat-inline-link">
              Explore Pure Veg Resorts <FaArrowRight />
            </Link>
          </Reveal>

          <Reveal direction="right">
            <div className="dat-gallery-grid">
              {gallery.map((item) => (
                <div className="dat-gallery-card" key={item.title}>
                  <SafeImage
                    src={item.image}
                    fallback={item.fallback}
                    alt={item.title}
                  />
                  <span className="dat-gallery-label">{item.title}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="dat-story">
        <div className="dat-container dat-story-grid">
          <Reveal direction="left">
            <div className="dat-story-image-wrap">
              <div className="dat-story-image-accent" />
              <SafeImage
                src="/images/new.png"
                fallback={fallbackImages.river}
                alt="Nature and river experiences in Dandeli"
                className="dat-story-image"
              />
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="dat-story-copy">
              <span className="dat-eyebrow">
                <FaMapMarkerAlt /> Explore Karnataka
              </span>
              <h2>Story of Dandeli</h2>
              <p>
                Located in Karnataka's Western Ghats, Dandeli is known for
                forest landscapes, the Kali River and outdoor experiences.
                It is a destination for travellers seeking adventure and a
                peaceful break from busy city life.
              </p>
              <p>
                Visitors can explore local attractions and nature experiences.
                Access and activity availability can vary by season, local
                rules and weather.
              </p>
              <div className="dat-check-list">
                <span><FaCheckCircle /> Forest landscapes</span>
                <span><FaCheckCircle /> Riverside experiences</span>
                <span><FaCheckCircle /> Outdoor adventures</span>
                <span><FaCheckCircle /> Group stay options</span>
              </div>
              <Link to="/sightseeings" className="dat-btn dat-btn-gold">
                EXPLORE DANDELI <FaChevronRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ACTIVITIES AND STAYS */}
      <section className="dat-activities">
        <div className="dat-container">
          <Reveal>
            <SectionHeading
              eyebrow="Discover • Experience • Enjoy"
              title="Make Your Dandeli Trip Unforgettable"
              description="Discover river adventures, forest escapes, comfortable accommodation and outdoor experiences."
            />
          </Reveal>
          <div className="dat-activity-grid">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <article className="dat-activity-card">
                    <Link to={item.link} aria-label={`Discover ${item.title}`}>
                      <div className="dat-activity-image-wrap">
                        <SafeImage
                          src={item.image}
                          fallback={item.fallback}
                          alt={item.title}
                          className="dat-activity-image"
                        />
                      </div>
                    </Link>
                    <div className="dat-activity-body">
                      <span className="dat-activity-icon"><Icon /></span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <Link to={item.link} className="dat-inline-link">
                        Discover More <FaArrowRight />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES AND AMENITIES */}
      <section className="dat-benefits">
        <div className="dat-container">
          <Reveal>
            <SectionHeading
              eyebrow="Your Comfort Matters"
              title="Rich in Nature. Thoughtful in Comfort."
              description="Explore accommodation choices, meal options and experiences for your Dandeli getaway."
            />
          </Reveal>
          <div className="dat-benefit-grid">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={(index % 3) * 90}
                >
                  <article className="dat-benefit-card">
                    <div className="dat-benefit-icon"><Icon /></div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="dat-why-us" id="why-us">
        <div className="dat-container">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Make Your Dandeli Getaway Special"
              description="A nature-focused stay with accommodation choices, listed activities and help planning your trip."
              light
            />
          </Reveal>
          <div className="dat-why-grid">
            {whyUsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={(index % 3) * 100}
                >
                  <article className="dat-why-card">
                    <div className="dat-why-icon"><Icon /></div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <div className="dat-why-bottom">
              <FaStar />
              Your Dandeli experience starts with the right plan.
              <FaLeaf />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PACKAGE PLANS */}
      <section className="dat-packages" id="package-plans">
        <div className="dat-container">
          <Reveal>
            <SectionHeading
              eyebrow="Stay • Eat • Explore"
              title="Dandeli Adventure Thrills Packages"
              description="Choose your preferred accommodation for a 1-night, 2-day getaway."
            />
          </Reveal>

          <Reveal>
            <p className="dat-package-intro">
              Dandeli Adventure Thrills — a swimming pool jungle resort
              described in the supplied information as approved by Karnataka
              Tourism. Please confirm current resort details directly.
            </p>
            <div className="dat-package-badges">
              <span className="dat-package-badge"><FaClock /> 1 Night & 2 Days</span>
              <span className="dat-package-badge"><FaUtensils /> Buffet Meals</span>
              <span className="dat-package-badge"><FaSwimmingPool /> Swimming Pool</span>
            </div>
            <div className="dat-package-duration">
              PACKAGE DURATION: <span>1 NIGHT & 2 DAYS</span>
            </div>
          </Reveal>

          <div className="dat-package-grid">
            {packagePlans.map((plan, index) => (
              <Reveal
                key={plan.name}
                direction={index === 1 ? "up" : index === 0 ? "left" : "right"}
                delay={index * 110}
              >
                <article
                  className={`dat-package-card ${
                    index === 1 ? "dat-package-featured" : ""
                  }`}
                >
                  <span className="dat-package-tag">{plan.tag}</span>
                  <div className="dat-package-emoji" aria-hidden="true">
                    {plan.icon}
                  </div>
                  <h3>{plan.name}</h3>
                  <div className="dat-package-price">
                    <span className="dat-starting-label">Starting from</span>
                    {plan.price}
                  </div>
                  <p className="dat-package-unit">per person</p>
                  <div className="dat-package-meals">
                    <strong>Meals included</strong>
                    <br />
                    1 Lunch · 1 Dinner · 1 Breakfast
                    <br />
                    Veg & Non-Veg Buffet
                  </div>
                  <button
                    type="button"
                    className="dat-btn dat-btn-gold"
                    onClick={() => enquireAboutPlan(plan.name)}
                  >
                    <FaWhatsapp /> ENQUIRE ON WHATSAPP <FaChevronRight />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up">
            <div className="dat-included-box">
              <h3>Activities Included in the Package</h3>
              <p>
                These activities are listed as included; please confirm
                availability for your dates when booking.
              </p>
              <div className="dat-included-grid">
                {packageActivities.map((activity) => (
                  <div className="dat-included-item" key={activity}>
                    <FaCheckCircle />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
              <div className="dat-meal-note">
                <FaUtensils />
                1 Lunch + 1 Dinner + 1 Breakfast — Veg & Non-Veg Buffet
              </div>
            </div>
          </Reveal>

          <Reveal direction="up">
            <div className="dat-extra-section">
              <h3>Adventure Activities at Extra Cost</h3>
              <p>
                Starting prices listed below are additional to the
                accommodation package. Confirm current prices before booking.
              </p>
              <div className="dat-extra-grid">
                {extraCostActivities.map((activity) => (
                  <article className="dat-extra-card" key={activity.name}>
                    <div className="dat-extra-icon">
                      {activity.name.includes("Safari") ? <FaTree /> : <FaWater />}
                    </div>
                    <h4>{activity.name}</h4>
                    <p className="dat-extra-distance">{activity.distance}</p>
                    <div className="dat-extra-price">
                      <span className="dat-starting-label">Starting from</span>
                      {activity.price}
                    </div>
                    <div className="dat-extra-unit">per person</div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="up">
            <div className="dat-package-note">
              <FaInfoCircle />
              <span>
                <strong>Important:</strong> Transportation is not included.
                Confirm availability, current rates, activity conditions and
                final booking details directly with the resort.
              </span>
            </div>
            <div className="dat-package-cta">
              <p>Need help choosing your accommodation?</p>
              <button
                type="button"
                className="dat-btn dat-btn-green"
                onClick={() => enquireAboutPlan("Help me choose a suitable stay")}
              >
                <FaWhatsapp /> ASK ABOUT PACKAGE AVAILABILITY <FaArrowRight />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PURE VEG RESORTS CTA */}
      <section className="dat-final-cta">
        <div className="dat-container">
          <Reveal>
            <span className="dat-eyebrow">
              <FaLeaf /> Vegetarian Stay Options
            </span>
            <h2>Looking for Pure Veg Resorts?</h2>
            <p>Explore our pure veg resort options.</p>
            <div className="dat-final-actions">
              <Link to={VEG_RESORTS_LINK} className="dat-btn dat-btn-green">
                <FaUtensils /> EXPLORE PURE VEG RESORTS <FaArrowRight />
              </Link>
              <Link to="/sightseeings" className="dat-btn dat-btn-gold">
                EXPLORE SIGHTSEEINGS <FaArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="dat-faq" id="faq">
        <div className="dat-container dat-faq-layout">
          <Reveal direction="left">
            <div className="dat-faq-intro">
              <span className="dat-eyebrow">
                <FaQuestionCircle /> Got Questions?
              </span>
              <h2>Frequently Asked Questions</h2>
              <p>
                Find answers about our 1-night, 2-day packages, accommodation,
                meals, included activities, extra charges and booking.
              </p>
              <div className="dat-faq-help">
                <div className="dat-faq-help-icon"><FaWhatsapp /></div>
                <div>
                  <strong>Still need help?</strong>
                  <span>Contact our team for package details.</span>
                  <br />
                  <a
                    className="dat-inline-link"
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                      "Hello Dandeli Adventure Thrills! I have a question about your packages."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask on WhatsApp <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="dat-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `dat-faq-answer-${index}`;
              return (
                <Reveal
                  key={faq.question}
                  direction={index % 2 === 0 ? "right" : "left"}
                  delay={(index % 3) * 60}
                >
                  <article className={`dat-faq-item ${isOpen ? "is-open" : ""}`}>
                    <button
                      type="button"
                      className="dat-faq-question"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span className="dat-faq-question-text">
                        <span className="dat-faq-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{faq.question}</span>
                      </span>
                      <span className="dat-faq-toggle">
                        {isOpen ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>
                    <div
                      className="dat-faq-answer-wrap"
                      id={answerId}
                      aria-hidden={!isOpen}
                    >
                      <div className="dat-faq-answer-inner">
                        <p className="dat-faq-answer">{faq.answer}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING ENQUIRY */}
      <section className="dat-booking-section" id="booking">
        <SafeImage
          src="/images/resort.png"
          fallback={fallbackImages.stay}
          alt=""
          className="dat-booking-background"
        />
        <div className="dat-booking-overlay" />
        <div className="dat-container dat-booking-grid">
          <Reveal direction="left">
            <div className="dat-booking-copy">
              <span className="dat-eyebrow">
                <FaStar /> Your next holiday awaits
              </span>
              <h2>Book Your Stay at Dandeli Adventure Thrills</h2>
              <p>
                Planning a family holiday, friends' getaway, student trip or
                group outing? Send us your preferred dates, guest count and
                accommodation choice to enquire about the package.
              </p>
              <p>
                We will help you check availability and get details about the
                starting price, final package price and booking arrangements.
              </p>
              <a href={`tel:${PHONE}`} className="dat-booking-phone">
                <FaPhoneAlt />
                <span>
                  <small style={{ display: "block", fontWeight: 500 }}>
                    For booking enquiries, call
                  </small>
                  +91 95915 25484
                </span>
              </a>
            </div>
          </Reveal>
          <Reveal direction="right">
            <form className="dat-booking-form" onSubmit={sendBooking}>
              <h3 className="dat-form-title">Plan Your Dandeli Trip</h3>

              <div className="dat-field">
                <label htmlFor="dat-name">Your Name *</label>
                <input
                  id="dat-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={booking.name}
                  onChange={updateBooking}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="dat-field">
                <label htmlFor="dat-phone">Phone Number *</label>
                <input
                  id="dat-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={booking.phone}
                  onChange={updateBooking}
                  autoComplete="tel"
                  pattern="[0-9+() -]{8,18}"
                  required
                />
              </div>

              <div className="dat-field">
                <label htmlFor="dat-guests">Number of Guests</label>
                <select
                  id="dat-guests"
                  name="guests"
                  value={booking.guests}
                  onChange={updateBooking}
                >
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3–5">3–5 guests</option>
                  <option value="6–10">6–10 guests</option>
                  <option value="11–20">11–20 guests</option>
                  <option value="20+">More than 20 guests</option>
                </select>
              </div>

              <div className="dat-field">
                <label htmlFor="dat-stay">Preferred Package</label>
                <select
                  id="dat-stay"
                  name="stay"
                  value={booking.stay}
                  onChange={updateBooking}
                >
                  <option>Dormitory</option>
                  <option>Deluxe Room</option>
                  <option>Deluxe Cottage</option>
                  <option>Any suitable stay</option>
                  <option>Pure Veg Resort</option>
                </select>
              </div>

              <div className="dat-field">
                <label htmlFor="dat-checkin">Check-in Date</label>
                <input
                  id="dat-checkin"
                  type="date"
                  name="checkin"
                  value={booking.checkin}
                  min={new Date().toLocaleDateString("en-CA")}
                  onChange={updateBooking}
                />
              </div>

              <div className="dat-field">
                <label htmlFor="dat-checkout">Check-out Date</label>
                <input
                  id="dat-checkout"
                  type="date"
                  name="checkout"
                  value={booking.checkout}
                  min={booking.checkin || new Date().toLocaleDateString("en-CA")}
                  onChange={updateBooking}
                />
              </div>

              <button type="submit" className="dat-btn dat-btn-gold">
                <FaWhatsapp /> SEND BOOKING ENQUIRY <FaChevronRight />
              </button>
              <p className="dat-form-note">
                WhatsApp opens with your trip details filled in. Your booking
                is not confirmed until availability is verified.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="dat-final-cta">
        <div className="dat-container">
          <Reveal>
            <span className="dat-eyebrow">
              <FaLeaf /> Make Memories in the Wild
            </span>
            <h2>Ready for Your Dandeli Adventure?</h2>
            <p>
              Discover nature, comfortable stays and exciting outdoor
              experiences with Dandeli Adventure Thrills.
            </p>
            <div className="dat-final-actions">
              <Link to="/sightseeings" className="dat-btn dat-btn-green">
                EXPLORE SIGHTSEEINGS <FaArrowRight />
              </Link>
              <Link to="/about" className="dat-btn dat-btn-gold">
                ABOUT US <FaChevronRight />
              </Link>
              <Link to={VEG_RESORTS_LINK} className="dat-btn dat-btn-green">
                <FaUtensils /> PURE VEG RESORTS <FaArrowRight />
              </Link>
              <a href={`tel:${PHONE}`} className="dat-btn dat-btn-green">
                <FaPhoneAlt /> CALL +91-9591525484
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
