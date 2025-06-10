import { useState, useEffect, useLayoutEffect } from "react";
import hero from "../assets/HeroImg/hero.jpg";
import aniJson1 from "../components/Animation/registerAnimation.json";
import UnderstanCeta from "../components/HomePageSection/UnderstanCeta";
import Lottie from "lottie-react";
import team1 from "../assets/Team/team1.png";
import team2 from "../assets/Team/team2.png";
import team3 from "../assets/Team/team3.png";
import team4 from "../assets/Team/team4.png";
import advisor1 from "../assets/Advisor/advisor1.png";
import advisor2 from "../assets/Advisor/advisor2.png";
import advisor3 from "../assets/Advisor/advisor3.png";
import advisor4 from "../assets/Advisor/advisor4.png";
import Footer from "./Footer";

// import toast from "react-hot-toast";

import {
  instLogos,
  govLogos,
  blcLogos,
  accLogos,
  mediaLogos,
  foreignLogos,
  finLogos,
} from "./Utils";
import PaymentPopup from "../components/paymentGateway/razorpay";
// import { colleges } from "./Colleges";
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import ThreeDot from "../components/HomePageSection/ThreeDot";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [paymentId, setPaymentId] = useState<boolean>(false);

  const [auth] = useAuth();

  useEffect(() => {
    const getPaymentId = async () => {
      try {
        let data: any = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v1/user/getPaymentStatus/${
            auth.user.email
          }`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        data = await data.json();
        console.log("data", data);
        if (data) {
          console.log("data", data);
          if (data.paymentId) setPaymentId(true);
        }
      } catch (error) {
        console.log("error while fetching payments data", error);
      }
    };
    getPaymentId();
  }, [showSuccessPopup]);

  useLayoutEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Auto-slide every 5 seconds
  console.log("auth values", auth.user);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % images.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className=" flex flex-col gap-6 font-open">
      <div className="flex flex-col sm:p-4">
        <div
          className="mx-auto relative w-full aspect-[16/9] lg:aspect-[16/7] sm:rounded-[8px] bg-cover bg-center mt-3"
          style={{ backgroundImage: `url(${hero})` }}
        >
          {/* Text content on image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col w-full items-center justify-center text-center">
            <div className="bg-[#03257E] text-white px-2  sm:rounded-full shadow-lg">
              <p className="text-[16px] text-white sm:text-white sm:text-[20px] md:text-[28px] lg:text-[40px] font-bold w-[100%] text-center py-1 sm:py-2">
                CETA - Certified Emerging Technologies Analyst | No-Code
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 z-10 sm:flex flex-col w-full items-center justify-center text-center bg-gradient-to-r from-[#03257E] via-[#f14419] to-[#006666] p-1">
            <p className="text-[8px] sm:text-[18px] md:text-[25px] font-bold w-[100%] text-center">
              Global Gold Standard Certification Program for No-Code AI &
              Emerging Technologies Skills
            </p>
          </div>
        </div>
      </div>
   
      <div className="flex justify-center flex-col items-center w-full overflow-hidden">
        <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">
          Awards & Recognitions
        </p>

        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <p className="absolute left-0 bg-white hidden border-b-4 w-[160px] border-[#03257e] sm:flex sm:ml-0 rounded py-2 px-4 text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            Education institutes
          </p>
          <div className="overflow-hidden sm:py-4">
            <div key={1} className="flex animate-slide whitespace-nowrap">
              {instLogos.concat(instLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-12 w-auto sm:w-auto mx-4 sm:mx-8 shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <div className="overflow-hidden sm:py-4">
            <div
              key={2}
              className="flex animate-slideOpposite whitespace-nowrap"
            >
              {govLogos.concat(govLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-6 w-auto sm:w-auto mx-4 sm:mx-8"
                />
              ))}
            </div>
          </div>
          <p className="absolute right-0 bg-white hidden border-b-4 border-[#03257e] sm:flex rounded w-[200px] p-2 text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            Governments & Regulators
          </p>
        </div>
        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <p className="absolute left-0 bg-white hidden border-b-4 p-2 border-[#03257e] sm:flex rounded w-[250px] text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            Grants & awards by blockchains
          </p>
          <div className="overflow-hidden sm:py-4">
            <div key={3} className="flex animate-slide whitespace-nowrap">
              {blcLogos.concat(blcLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-6 w-auto sm:w-auto mx-4 sm:mx-8 shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <div className="overflow-hidden sm:py-4">
            <div
              key={4}
              className="flex animate-slideOpposite whitespace-nowrap"
            >
              {accLogos.concat(accLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-6 w-auto sm:w-auto mx-4 sm:mx-8"
                />
              ))}
            </div>
          </div>
          <p className="absolute right-0 bg-white hidden border-b-4 border-[#03257e] sm:flex rounded w-[200px] p-2 text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            cloud credits & accelerators
          </p>
        </div>
        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <p className="absolute left-0 bg-white hidden border-b-4 border-[#03257e] sm:flex sm:ml-0 rounded w-[100px] p-2 text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            media houses
          </p>
          <div className="overflow-hidden sm:py-4">
            <div key={5} className="flex animate-slide whitespace-nowrap">
              {mediaLogos.concat(mediaLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-10 w-auto sm:w-auto mx-4 sm:mx-8 shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <div className="overflow-hidden sm:py-4">
            <div
              key={6}
              className="flex animate-slideOpposite whitespace-nowrap"
            >
              {foreignLogos.concat(foreignLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-12 w-auto sm:w-auto mx-4 sm:mx-8"
                />
              ))}
            </div>
          </div>
          <p className="absolute right-0 bg-white hidden border-b-4 border-[#03257e] sm:flex rounded w-[180px] p-2 text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            international bodies
          </p>
        </div>
        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <p className="absolute left-0 bg-white hidden border-b-4 border-[#03257e] sm:flex sm:ml-0 rounded w-[130px] p-2 text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            fintech & banking
          </p>
          <div className="overflow-hidden sm:py-4">
            <div key={7} className="flex animate-slide whitespace-nowrap">
              {finLogos.concat(finLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-12 w-auto sm:w-auto mx-4 sm:mx-8 shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ThreeDot />
      <UnderstanCeta />
      <ThreeDot />
      <div className="flex flex-col justify-center items-center" id="olympiad">
        <p className=" text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold text-center">
          Watch How It Works
        </p>
        {/* <p className=" text-[#000000] my-4 text-[23px] sm:text-[38px] md:text-[48px] text-center">No-Code Skilling in Emerging Technologies</p> */}
      </div>
      <div className="flex justify-center items-center gap-4 p-4 w-full">
        <div className="relative w-full max-w-[800px] aspect-video rounded-xl overflow-hidden border-4 border-gray-300 shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Cua_dnoZXbo?autoplay=1&mute=1"
            title="Edubuk Presents: AI and Emerging Technologies Hackathon for College Student"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <ThreeDot />

      <div
        className="flex flex-col justify-center items-center bg-[#006666] p-8"
        id="about"
      >
        <p className="text-[#ffffff] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">
          About EDUBUK
        </p>
        <p className="text-[#ffffff] text-[23px] sm:text-[38px] md:text-[48px] font-light text-center mt-4 leading-8 sm:leading-12 md:leading-14">
          Our platform bridges the gap between education and employment by
          providing emerging tech courses, verifiable academic & professional
          credentials and intelligent job matching leveraging AI and Blockchain
          Tech
        </p>
      </div>
     <ThreeDot />
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">
          Meet Our executives
        </p>
        <div className=" flex justify-center items-center flex-wrap gap-3">
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={team1}
                alt="team1"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center flex-grow">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Apoorva Bajaj
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Co-Founder & CEO
              </p>

              <a
                href="https://www.linkedin.com/in/apoorva-bajaj-iit-iim-cfa-edubuk/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                10+ years experience <br />
                ex-Goldman Sachs, JP Morgan, DE Shaw Engineer, IIT, IIM
                Gold-medalist, CFA Charterholder
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            {/* Image */}
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={team2}
                alt="team2"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Shivaani Mehrotra
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Co-Founder & COO
              </p>

              <a
                href="https://www.linkedin.com/in/shivani-mehrotra-edubuk/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                10+ years experience in <br></br>Education Sector as University
                Professor MBA + University Topper, Women in AI APAC Finalist
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            {/* Image */}
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={team3}
                alt="team3"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Amit Srivastava
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Chief Marketing Officer
              </p>

              <a
                href="https://www.linkedin.com/in/amit-srivastava-62969352/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                20+ years experience in <br /> marketing and sales in Education
                & Finance sector. MBA in International Business.
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            {/* Image */}
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={team4}
                alt="Apoorva Bajaj"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Ajeet Ram Verma
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Tech Lead Developer
              </p>

              <a
                href="https://www.linkedin.com/in/ajeet-ram-verma-953605244/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                5+ years of experience in Core Technology Domain <br></br>MERN
                Full-Stack <br></br>Python-AI & ML <br></br>Solidity & Rust
              </p>
            </div>
          </div>
        </div>
      </div>
      <ThreeDot />
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">
          MEET OUR ADVISORS
        </p>
        <div className=" flex justify-center items-center flex-wrap gap-3">
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={advisor1}
                alt="advisor1"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center flex-grow">
              <p className="text-lg font-bold text-gray-800 mb-1">Ish Anand</p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Serial Entrepreneur, Advisor in Startups, Global Citizen
              </p>

              <a
                href="https://www.linkedin.com/in/ishanand/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                30 years + of experience in Corporates, the Startup Ecosystem
                and as an Enterpreneur across 5 continents
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            {/* Image */}
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={advisor2}
                alt="advisor2"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Dr. Narsing Rao, GS
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Former VC at ICFAI University
              </p>

              <a
                href="https://www.linkedin.com/in/dr-narsing-rao-gs-a318735/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                30 years + of experience in Education Sector as Vice Chancellor
                & Chief Mentor at Indian Universities ex-Professor
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            {/* Image */}
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={advisor3}
                alt="advisor3"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Dr. Sindhu Bhaskar
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Co-Founder, EST Global, Forbes Council Member
              </p>

              <a
                href="https://www.linkedin.com/in/dr-sindhu-bhaskar-55a84568/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                Established $100M+ business in Education sector. Co-Founded
                Fintech & Blockchain Association (FAB), US.
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            {/* Image */}
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={advisor4}
                alt="advisor4"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow">
              <p className="text-lg font-bold text-gray-800 mb-1">James Wren</p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Lead BD, Liquidium
              </p>

              <a
                href="https://www.linkedin.com/in/james-wren-15b8b759/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                7+ years experience in Web3, Blockchain Degen & influencer in
                the BTC Ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ThreeDot />
      <div
        className="flex flex-wrap items-center justify-center gap-2 p-2 "
        id="register"
      >
        <Lottie
          loop={true}
          animationData={aniJson1}
          className="w-[350px] h-[350px] md:w-[400px] md:h-[400px]"
        />

        {showPopup && (
          <PaymentPopup
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            setShowSuccessPopup={setShowSuccessPopup}
          />
        )}
        <div
          className="flex justify-center items-center flex-col gap-2 sm:gap-1"
          id="ceta"
        >
          <div className="text-[#000] w-[330px] sm:w-[450px] uppercase text-2xl md:text-4xl lg:text-5xl font-semibold text-center">
            CETA Program
          </div>

          <div className="bg-[#006666] p-4 w-[330px] sm:w-[450px] text-white text-base md:text-xl text-center rounded-md shadow">
            Global Gold Standard Certification Program for No-Code AI & Emerging
            Technologies Skills
          </div>

          {/* PRICING BOX */}
          <div className="flex justify-center items-center flex-col w-[330px] sm:w-[450px] bg-gray-100 border border-gray-300 shadow-md rounded-lg">
            <div className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white px-4 py-2 font-semibold text-lg text-center uppercase">
              Participation Fee
            </div>
            <div className="flex justify-between w-[320px] sm:w-[400px]">
              <div>
                <div className="flex flex-col justify-center items-start px-8 sm:px-4 py-2 w-full gap-2">
                  <p className="text-gray-500">1. India</p>
                  <p className="text-gray-500">2. UAE</p>
                  <p className="text-gray-500">3. Singapore</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-start items-start px-8 sm:px-4 py-2 w-full gap-2">
                  <p className="font-bold text-gray-500">INR 3540</p>
                  <p className="font-bold text-gray-500">AED 200</p>
                  <p className="font-bold text-gray-500">SGD 100</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col bg-white text-center max-w-md mx-auto mt-2">
            {auth?.user ? (
              <button
                onClick={() => setShowPopup(true)}
                disabled={paymentId}
                className={`bg-[#006666] text-white text-2xl px-6 py-2 rounded hover:bg-[#004d4d] transition duration-200 cursor-pointer bg-gradient-to-r w-[330px] sm:w-[450px] from-[#03257e] via-[#006666] to-[#F14419] ${
                  paymentId ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Register Here
              </button>
            ) : (
              <Link
                className="bg-[#006666] text-white text-2xl px-6 py-2 rounded border-1 hover:bg-white hover:text-[#006666]  transition duration-300 cursor-pointer w-[330px] sm:w-[450px]"
                to="/sign-up"
              >
                Register Here
              </Link>
            )}
          </div>
        </div>
      </div>
      <ThreeDot />
      <Footer />
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-30 h-full w-full">
          <div className="relative w-11/12 max-w-3xl bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
              onClick={() => setShowSuccessPopup(false)}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white rounded-lg shadow-md border border-gray-200 max-w-3xl mx-auto">
              <div className="flex flex-col space-y-2">
                <h2 className="text-xl md:text-2xl font-bold text-green-600 text-center">
                  Congratulations!
                </h2>
                <p className="text-gray-700 text-center">
                  You have successfully registered for the CETA Program.
                </p>
                <p className="text-gray-600 text-center">
                  We’ve sent your CETA Program enrollment number to your
                  registered email address. Please check your inbox or spam
                  folder and save it for future reference.
                </p>
                <p className="text-blue-600 text-center text-xl font-bold">
                  Thank You !
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
