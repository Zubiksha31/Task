import React from "react";
import logoSrc from "../assets/insillion_logo@2x.png";
import transportImg from "../assets/marine_img.png";
import curveImg from "../assets/home-bottom-shape.png";
import screenImg from "../assets/monitor_img@2x.png";
import IconOne from "../assets/Built-in Config@2x.png";
import IconTwo from "../assets/Endorsements.png";
import IconThree from "../assets/Real time Msg.png";
import IconFour from "../assets/Wording master@2x.png";
import FeaturesBg from "../assets/Feature_bg.png";
import FormIllustration from "../assets/feedback_img@2x.png"; 

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#0b537e] to-[#0773c6] text-white overflow-hidden">

      
      <header className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">

       
        <div>
          <img src={logoSrc} alt="Logo" className="w-40" />

          <h1 className="mt-6 text-3xl font-semibold">
            Policy Management Software for
            <span className="block text-4xl font-bold mt-2">Marine Cargo</span>
          </h1>

          <p className="mt-6 text-lg text-white/85 max-w-lg">
            Simplify quoting and issuance of Marine Cargo policies with our
            ready-to-use cloud-based software.
          </p>
        </div>

        {/* Right Ship Image */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={transportImg}
            alt="Ship Illustration"
            className="w-[70%] lg:w-[80%] drop-shadow-2xl"
          />
        </div>

      </header>


     
      <section className="relative bg-white pt-40 pb-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Device Circle */}
          <div className="flex justify-center">
            <div className="bg-gray-100 w-[350px] h-[350px] md:w-[430px] md:h-[430px] rounded-full flex items-center justify-center shadow-sm">
              <img src={screenImg} alt="Screen" className="w-[75%]" />
            </div>
          </div>

          {/* Right Text */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Online Policy Issuance For
            </h3>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Marine Cargo
            </h2>

            <p className="mt-4 text-gray-600 max-w-md">
              Our platform's pay-as-you-go SAAS model digitizes the Marine Cargo Ecosystem, 
              connecting insurers with brokers, agents, shipping companies and freight forwarders.
            </p>

            <div className="mt-6 flex gap-4">
              <a className="px-6 py-3 bg-blue-600 text-white rounded-full">Request Demo</a>
              <a className="px-6 py-3 border border-gray-300 rounded-full text-gray-700">
                Explore Features
              </a>
            </div>
          </div>
        </div>

        
        <div className="max-w-5xl mx-auto mt-16 flex flex-col items-center">

          {/* 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[
              ["Streamline Operations",
                "Straight through processing for pre-underwritten cases & customizable referral rules."],
              ["Low Code No Code",
                "Reduce the need for IT dependency with master data management."],
            ].map(([title, desc], i) => (
              <div key={i} className="p-6 border rounded-lg shadow-sm border-t-4" style={{ borderTopColor: "#00589b" }}>
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          {/* 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
            {[
              ["Advanced Underwriter Workbench",
                "Single system for managing underwriting with multi-level referral."],
              ["Easy Integration",
                "Ready-to-go 300+ APIs for smooth partner integration."],
            ].map(([title, desc], i) => (
              <div key={i} className="p-6 border rounded-lg shadow-sm border-t-4" style={{ borderTopColor: "#00589b" }}>
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          {/* 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
            {[
              ["Mobile Friendly", "Easy, intuitive, fully responsive UI."],
              ["Cloud Based", "Issue policies anytime, anywhere."],
            ].map(([title, desc], i) => (
              <div key={i} className="p-6 border rounded-lg shadow-sm border-t-4" style={{ borderTopColor: "#00589b" }}>
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className=" p-36">
        <div>
            <h1 className=" text-3xl font-bold py-7 ">Features</h1>
        </div>

        <div className=" flex justify-between gap-10">
            <div className=" container bg-white text-black p-4 ">
                <img className=" w-16" src={IconOne} alt="" />
                <h1 className=" font-bold text-2xl text-center py-3">Endorsements</h1>
                <p>Financial and non-financial policy changes can be made by brokers and agents.</p>
            </div>

            <div className=" container bg-white text-black p-4">
                <img className=" w-16" src={IconTwo} alt="" />
                <h1 className=" font-bold text-2xl text-center py-3">Real-time Messaging</h1>
                <p className=" text-center">In-built messaging feature for collaboration between underwriters and agents.</p>
            </div>

            <div className=" container bg-white text-black p-4">
                <img className=" w-16" src={IconThree} alt="" />
                <h1 className=" font-bold text-2xl text-center py-3">Built-in Configurator via Excel</h1>
                <p className=" text-center">Master-based product rate configurator for underwriters.</p>
            </div>

            <div className=" container bg-white text-black p-4">
                <img className=" w-16" src={IconFour} alt="" />
                <h1 className=" font-bold text-2xl text-center py-3">Wording Master</h1>
                <p className=" text-center">Clauses, Warranties, Exclusions & Conditions can be customized during referral process.</p>
            </div>
        </div>
      </section>

      
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT ILLUSTRATION */}
          <div className="flex justify-center">
            <img src={FormIllustration} alt="Form Illustration" className="w-[80%]" />
          </div>

          {/* RIGHT FORM */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Automate underwriting with INSILLION.</h2>
            <h1 className="text-2xl font-bold mt-1">Check out our 30-day trial now!</h1>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-black">

              <input className="p-3 border rounded-md" placeholder="First Name / Last Name *" />
              <input className="p-3 border rounded-md" placeholder="Email *" />

              <input className="p-3 border rounded-md" placeholder="Company Name *" />
              <select className="p-3 border rounded-md">
                <option>Select Country</option>
              </select>

              <input className="p-3 border rounded-md" placeholder="Phone" />
              <input className="p-3 border rounded-md" placeholder="Message" />
            </form>

            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md">
              Submit
            </button>

            <p className="mt-4 text-gray-600">
              Contact us at <a className="text-blue-600">sales@insillion.com</a> to know more about
              INSILLION’s business solutions.
            </p>
          </div>
        </div>

      </section>

      <div className="bg-[#00589b] w-full text-center text-white py-3 mt-16">
          insillion.com
        </div>

    </div>
  );
};

export default Hero;
