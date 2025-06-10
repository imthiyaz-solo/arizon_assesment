import Head from 'next/head';
import {
  FaShippingFast,
  FaHandshake,
  FaChessQueen,
  FaCheck,
  FaTruck,
  FaStar,
  FaAward,
  FaShieldAlt,
  FaCogs,
  FaTools,
  FaBolt,
  FaOilCan,
  FaTshirt,
  FaGem,
  FaTv,
  FaWind,
  FaHardHat,
  FaGlobe,
  FaUsers,
  FaWarehouse,
  FaHeadset

} from 'react-icons/fa';
import InfoCard from '../components/infoCard';
import InfoSection from '@/components/infoSection';
import WhyChooseSection from '@/components/whySection';
import ReviewCarousel from '@/components/reviewCorousel';
import BrandLogos from '@/components/brandLogo';
import Footer from '@/sections/footer';
import Subscribe from '@/sections/subscribtion';
import CustomerReviewSummary from '@/sections/customerRating';

const trustData = [
  {
    title: "Free Delivery Over $300.00",
    src: <FaHandshake />
  },
  {
    title: "1-3 Day DHL & UPS Delivery",
    src: <FaShippingFast />
  },
  {
    title: "Queen's Award For Enterprise Winners",
    src: <FaChessQueen />
  },
  {
    title: "ISO 9001 : 2015 Cert. No.291342018",
    src: <FaCheck />
  }
];

const features = [
  {
    src: <FaTruck />,
    title: "Super-Fast, Hassle Free Delivery",
    desc: "Delivered within 1-3 days, with all tax & duties paid within Canada. The price you see online is the price you pay.",
  },
  {
    src: <FaStar />,
    title: "Unrivalled Customer Service",
    desc: "With over 75 years' industry experience, you can trust Quality Bearings Online.",
  },
  {
    src: <FaAward />,
    title: "Multi-Award-Winning",
    desc: "Winners Of The Queen's Award For Enterprise For International Trade, 2023 Lloyds Bank Employer Of The Year.",
  },
  {
    src: <FaShieldAlt />,
    title: "World Renowned Brands",
    desc: "Quality branded products from the world’s leading brands such as SKF, Kluber, Timken, FAG, and many more.",
  }
];

const topCategories = {
  heading: "Top Categories",
  subHeading:
    "Whatever Electronic, clothing, jewelry, bearing, adhesive, lubricant or grease you are after at Quality Bearings Online we are bound to stock it. As a leading bearings supplier we offer products from trusted industry manufacturers. Discover some of our top product categories below.",
  items: [
    { title: "Electronics", src: <FaTv /> },
    { title: "Clothing", src: <FaTshirt /> },
    { title: "Jewelry", src: <FaGem /> },
    { title: "Bearings", src: <FaCogs /> },
    { title: "Adhesives & Sealants", src: <FaTools /> },
    { title: "Lubricants & Greases", src: <FaOilCan /> },
    { title: "Power Transmission", src: <FaBolt /> },
    { title: "Pneumatics", src: <FaWind /> },
    { title: "Safety & PPE", src: <FaHardHat /> },
    { title: "Fasteners", src: <FaShieldAlt /> },
  ],
};

const whyChooseData = {
  heading: "Why Choose Quality Bearings Online?",
  descriptions: [
    "At Quality Bearings Online, we are a leading bearings supplier with over 75 years of industry experience. We are a multi award winning company, supplying bearings and engineering spares to customers in over 110 countries worldwide. We pride ourselves on offering trusted brands, expert knowledge, excellent customer service and rapid delivery anywhere in the world. What’s more, we ensure that our products are distributed globally within 1-3 working days.",
    "Our products are used in sectors as diverse as Food Manufacturing, Aerospace, Oil and Gas and Precision Engineering, and whether you are a large multi-national or single site company, we delight in exceeding your expectations. Trust us as your industry bearings supplier.",
  ],
  buttonTitle: "READ MORE",
};

const reviewData = [
  {
    rating: 5,
    title: "Quick, responsive, offer good products.",
    review: "Great service and I am very satisfied",
    author: "Khalid Sideig",
    date: "May 20, 2025",
  },
  {
    rating: 5,
    title: "WOULD HIGHLY RECOMMEND",
    review: "EXCELLENT",
    author: "Trusted Customer",
    date: "May 20, 2025",
  },
  {
    rating: 5,
    title: "Quick delivery",
    review: "Quick delivery and best online price for a quality product",
    author: "Melanie Lyon",
    date: "May 1, 2025",
  },
  {
    rating: 5,
    title: "The Best Supplier I have come across in a long time.",
    review: "",
    author: "Don Strouhal",
    date: "May 1, 2025",
  },
  {
    rating: 5,
    title: "First class",
    review: "Excellent.",
    author: "Christopher Shaw",
    date: "May 1, 2025",
  },
  {
    rating: 4,
    title: "Poor communication and no proactive follow-up",
    review:
      "Although they investigated and mitigated our shipping delays, it wasn't until I contacted the company to follow-up on…",
    author: "Trusted Customer",
    date: "April 17, 2025",
  },
  {
    rating: 5,
    title: "",
    review: "Easy to make a purchase and fast delivery.",
    author: "Trusted Customer",
    date: "May 1, 2025",
  }
];

const brandData = [
  { name: "NSK", imgSrc: "https://www.qualitybearingsonline.com/content/NewSite/NSK-logo.png", link: "#" },
  { name: "Koyo", imgSrc: "https://www.qualitybearingsonline.com/content/NewSite/Koyo-logo.png", link: "#" },
  { name: "FAG", imgSrc: "https://www.qualitybearingsonline.com/content/NewSite/FAG-logo.png", link: "#" },
  { name: "Timken", imgSrc: "https://www.qualitybearingsonline.com/content/NewSite/Timken-logo.png", link: "#" },
  { name: "SKF", imgSrc: "https://www.qualitybearingsonline.com/content/NewSite/SKF-logo.png", link: "#" },
  { name: "RHP", imgSrc: "https://www.qualitybearingsonline.com/content/NewSite/RHP-logo.png", link: "#" },
  { name: "Molykote", imgSrc: "https://www.qualitybearingsonline.com/content/NewSite/Molykote-logo.png", link: "#" },
  { name: "Shell", imgSrc: "https://www.qualitybearingsonline.com/content/NewSite/Shell-logo.png", link: "#" },
  { name: "Loctite", imgSrc: "https://www.qualitybearingsonline.com/content/NewSite/Loctite-logo.png", link: "#" },
  { name: "IKO", imgSrc: "https://www.qualitybearingsonline.com/content/NewSite/IKO.png", link: "#" },
  { name: "Kluber", imgSrc: "https://store-03842.mybigcommerce.com/content/Kluber.png", link: "#" },
];

const service = {
  heading: "Other Services We Offer",
  items: [
    {
      src: <FaGlobe />,
      title: "International Presence",
      desc: "We are the preferred supplier of bearings and engineering spares to customers in over 110 countries. With our 1,000,000 products in stock, we regularly deliver anywhere in the world within 1-3 working days.",
    },
    {
      src: <FaUsers />,
      title: "Professional Team",
      desc: "Every member of our team undertakes training as part of their continuous professional development, ensuring we can provide the best service to all our customers across the world.",
    },
    {
      src: <FaWarehouse />,
      title: "Warehouse & Logistics",
      desc: "We're an award winning business, with full ISO 9001:2015 accreditation. Working with our delivery partners, including DHL and UPS we take great pride in our 99.8% success rate on order delivery.",
    },
    {
      src: <FaHeadset />,
      title: "Customer Service",
      desc: "With more than 75 years’ industry experience as a bearings supplier, our team has expert product knowledge. Any customer queries are handled within 2 hours during working days and 24 hours outside of this.",
    }
  ]
};

export default function Home() {
  return (
    <>
      <Head>
        <title> Home </title>
      </Head>
      <div className='hidden md:block'>
        <InfoCard data={trustData} />
      </div>
      <div className='py-4 md:py-10 pt-24 md:pt-10 '>
        <InfoSection heading="Industry Leading Bearings Supplier" items={features} type='icon' />
      </div>

      <div className='py-4 md:py-10'>
        <InfoSection
          heading={topCategories.heading}
          subHeading={topCategories.subHeading}
          items={topCategories.items}
          type='icon'
          total={5}
          width='85%'
        />
      </div>

      <div>
        <WhyChooseSection
          heading={whyChooseData.heading}
          descriptions={whyChooseData.descriptions}
          buttonTitle={whyChooseData.buttonTitle}
          onButtonClick={() => console.log("Read More clicked")}
        />
      </div>

      <div>
        <CustomerReviewSummary />
      </div>

      <div>
        <ReviewCarousel data={reviewData} />
      </div>

      <div>
        <BrandLogos heading="Distributing World Renowned Brands" brands={brandData} />
      </div>

      <div className='py-4 md:py-10'>
        <InfoSection
          heading={service.heading}
          items={service.items}
          type='icon'
          total={4}
          width='95%'
          textWidth={"200px"}
        />
      </div>

      <div>
        <Subscribe />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
