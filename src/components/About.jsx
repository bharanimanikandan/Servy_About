import React from "react";
import bg from "../assets/aboutbg.png";
import about from "../assets/about.png";
import count from "../assets/count.png";
import star from "../assets/star.png";
import olympic from "../assets/Container.png";
import redtoy from "../assets/redtoy.png";
import whitetoy from "../assets/whitetoy.png";
import bluetoy from "../assets/bluetoy.png";
import arrow from "../assets/Arrow.png";
import line from "../assets/line.png";
import { MdAddCall } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <div className="">
        <div className="sm:block hidden sm:w-full lg:w-full">
          <img src={bg} alt="" className="" />
        </div>
      </div>

      {/* about */}
      <div className="size-72 lg:w-full lg:space-x-10">
        <div>
          <img src={about} alt="" />
        </div>
      </div>

      {/* count */}
      <div className="relative">
        <div className="absolute">
          <img
            src={count}
            alt=""
            className="w-full"
          />
        </div>
        <div className="absolute flex gap-56 ml-48 font-bold text-3xl mt-16">
          <div>
            <div className="ml-36 py-1 font-bold">52+</div>
            <div className="text-black opacity-70 ">
              Trained Service Experts
            </div>
          </div>
          <div>
            <div className="ml-28 py-1">7+</div>
            <div className="opacity-70">Happy Customers</div>
          </div>
          <div>
            <div className="flex ml-24 py-1">
              <div>4.9</div>
              <div className="w-8 mt-1">
                <img src={star} alt="" />
              </div>
            </div>
            <div className="opacity-70">Customer Rating</div>
          </div>
        </div>
      </div>

      {/* olympic */}
      <div>
        <div className="mt-52">
          <img src={olympic} alt="" className="w-full h-48" />
        </div>
      </div>

      {/* Features */}
      <div className="flex my-8">
        {/* red */}
        <div className="ml-32">
          <div className="ml-36 my-4">
            <img src={redtoy} alt="" />
          </div>
          <div className="font-roboto font-bold text-hyundai_blue-0 text-3xl ml-40 my-4">
            <h4>Mission</h4>
          </div>
          <div className="font-roboto ml-20 ">
            <p className="text-center">
              To provide fast, reliable, and <br /> accessible manpower services{" "}
              <br />
              across essential sectors, simplifying <br /> everyday life for our
              customers.
            </p>
          </div>
        </div>
        {/* white */}
        <div className="ml-36">
          <div className="ml-48 my-4">
            <img src={whitetoy} alt="" />
          </div>
          <div className="font-roboto font-bold text-hyundai_blue-0 text-3xl ml-40 my-4">
            <h4>Core Values</h4>
          </div>
          <div className="font-roboto ml-20">
            <p className="text-center ml-10">
              Trusted, high-quality services with <br /> clear pricing and quick
              booking. <br /> Focused on community, <br /> transparency, and
              continuous <br /> improvement.
            </p>
          </div>
        </div>
        {/* Blue */}
        <div className="ml-32">
          <div className="ml-36 my-4">
            <img src={bluetoy} alt="" />
          </div>
          <div className="font-roboto font-bold text-hyundai_blue-0 text-3xl ml-48 my-4">
            <h4>Vision</h4>
          </div>
          <div className="font-roboto ml-20">
            <p className="text-center ml-10">
              To become the most trusted <br /> platform for on-demand services,{" "}
              <br /> delivering convenience and quality <br /> to every
              doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* Strengths & Capabilities */}
      <div className="bg-gray-200 py-5">
        <div className="">
          <div className="pt-5 font-roboto font-extrabold text-4xl text-hyundai_blue-0 text-center">
            Strengths & Capabilities
          </div>
        </div>

        <div className="py-2 pl-96" style={{ marginLeft: "270px" }}>
          <img src={line} alt="" className="w-96 h-1" />
        </div>
        {/* points */}
        <div className="py-6">
          <div className="flex ml-96 pl-80 py-2 gap-3">
            <img src={arrow} alt="" className="w-10 h-4 mt-2" />
            <p className="text-hyundai_blue-0 text-lg">
              Professionally Managed.
            </p>
          </div>
          <div className="flex ml-96 pl-48 py-2 gap-3">
            <img src={arrow} alt="" className="w-10 h-4 mt-2" />
            <p className="text-hyundai_blue-0 text-lg">
              One stop shop for Recruitment and Contracting needs for clients.
            </p>
          </div>
          <div className="flex ml-96 pl-72 py-2 gap-3">
            <img src={arrow} alt="" className="w-10 h-4 mt-2" />
            <p className="text-hyundai_blue-0 text-lg">
              Statutory Compliances in Place.
            </p>
          </div>
          <div className="flex ml-56 pl-9 py-2 gap-3">
            <img src={arrow} alt="" className="w-10 h-4 mt-2" />
            <p className="text-hyundai_blue-0 text-lg">
              Pan India Presence and have supported clients in Tier I/II/III
              locations (Supported Customers at districts/talukas levels), We
              can support Your Projects, all-India.
            </p>
          </div>
          <div className="flex ml-80 pl-20 py-2 gap-3">
            <img src={arrow} alt="" className="w-10 h-4 mt-2" />
            <p className="text-hyundai_blue-0 text-lg">
              Servicing Clients in the Telecom, Retail, Manufacturing, Banking,
              Financial Service & Insurance, IT and ITES Industries.
            </p>
          </div>
        </div>
      </div>

      {/* Ethics */}
      <div className="py-5">
        <div className="">
          <div className="pt-5 font-roboto font-extrabold text-4xl text-hyundai_blue-0 text-center">
            Ethics
          </div>
        </div>

        <div className="py-2 pl-96" style={{ marginLeft: "395px" }}>
          <img src={line} alt="" className="w-32 h-1" />
        </div>
        {/* points */}
        <div className="py-6">
          <div className="flex ml-64 pl-48 py-2 gap-3">
            <img src={arrow} alt="" className="w-10 h-4 mt-2" />
            <p className="text-hyundai_blue-0 text-lg">
              Information received from customers and candidates will be treated
              with utmost confidentiality.
            </p>
          </div>
          <div className="flex ml-56 pl-48 py-2 gap-3">
            <img src={arrow} alt="" className="w-10 h-4 mt-2" />
            <p className="text-hyundai_blue-0 text-lg">
              Honesty, transparency and caring is fundamental to our
              relationship with our customers and candidates.
            </p>
          </div>
          <div className="flex ml-44 pl-48 py-2 gap-3">
            <img src={arrow} alt="" className="w-10 h-4 mt-2" />
            <p className="text-hyundai_blue-0 text-lg">
              Assignment are handled with the utmost care and on a best-effort
              basis to attract thee best talent for our customers.
            </p>
          </div>
          <div
            className="flex ml-80 pl-48 py-2 gap-3"
            style={{ marginLeft: "360px" }}
          >
            <img src={arrow} alt="" className="w-10 h-4 mt-2" />
            <p className="text-hyundai_blue-0 text-lg">
              Reference checks are carried out diligently without prejudice.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Us*/}
      <div className="bg-blue-100 py-5">
        <div className="">
          <div className="pt-5 font-roboto font-extrabold text-4xl text-hyundai_blue-0 text-center">
            Contact Us
          </div>
        </div>

        <div className="py-2 pl-96" style={{ marginLeft: "365px" }}>
          <img src={line} alt="" className="w-48 h-1" />
        </div>

        {/* Contact */}
        <div className="py-6">
          <div className="flex pl-80 ml-10 py-2 gap-3">
            <p className="text-hyundai_blue-0 text-lg text-center">
              We appreciate your interest and involvement in the SURVY
              community. Whether you have a question, need assistance, or <br />{" "}
              are looking to collaborate, we're here for you.
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-center gap-10">
          <div className="">
            <button className="flex bg-hyundai_blue-0 text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-md gap-2 px-16 py-4 font-semibold ">
              <MdAddCall className="text-white h-6" />
              +91 8825965775
            </button>
          </div>
          <div>
            <button className="flex bg-hyundai_blue-0 font-semibold text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl p-4 rounded-md gap-2">
              <MdOutgoingMail className="text-white h-6" />
              leastactioncompany@gmail.com
            </button>
          </div>
        </div>
      </div>

      {/* Cantact */}
      <div className="flex px-32 gap-36 pt-10 ml-7 pb-10">
        {/* Form */}
        <div class=" bg-white " style={{width:"650px"}}>
          <h1 class="text-5xl font-bold text-slate-900 py-3">
            Get in <span className="text-hyundai_blue-0">Touch</span> 
          </h1>
          <p className="font-roboto font-semibold">We’re here to help. Reach out with any questions, feedback, or support needs—we’d love to hear from you.</p>
          <form class="mt-7 space-y-5">
            <div>
              <label class="text-sm text-slate-800 font-medium mb-2 block">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name" required
                class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label class="text-sm text-slate-800 font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email" required
                class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <div>
              <label class="text-sm text-slate-800 font-medium mb-2 block">
                Phone Number
              </label>
              <input
                type="number"
                placeholder="Enter Subject" required
                class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              />
            </div>
            <button
              type="button"
              class="!mt-8 text-white bg-hyundai_blue-0 transition-transform ease-in-out hover:scale-x-105 tracking-wide text-[15px] px-4 py-2 w-full outline-0 cursor-pointer"
            >
              Send
            </button>
          </form>
          <div className="pt-10">
            <div className="flex gap-20">
              <div className="flex gap-4">
                <div><BiPhoneCall className="size-11 mt-1" /></div>
                <div>
                  <h5 className="text-xl font-semibold font-roboto">PHONE</h5>
                  <h6 className="font-roboto text-hyundai_blue-0 font-semibold">+91 88259 65775</h6>
                </div>
              </div>
              <div className="flex gap-4">
                <div><MdMailOutline className="size-11 mt-1" /></div>
                <div>
                  <h5 className="text-xl font-semibold font-roboto">EMAIL</h5>
                  <h6 className="font-roboto text-hyundai_blue-0 font-semibold">leastactioncompany@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-10">
              <div><MdLocationPin className="size-11 mt-1" /></div>
                <div>
                  <h5 className="text-xl font-semibold font-roboto">Address</h5>
                  <h6 className="font-roboto text-hyundai_blue-0 font-semibold">No. 9, Thendral Nagar,
                  Sathuvachari, Vellore - 632009</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <iframe
            width="600px"
            height="500px"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=No.%209,%20Thendral%20Nagar,Sathuvachari,%20Vellore%20-%20632009+(Servy)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/collections/sports-gps/">Fitness gps</a>
          </iframe>
        </div>
      </div>


    </div>
  );
};

export default About;
