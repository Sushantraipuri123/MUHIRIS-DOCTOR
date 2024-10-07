import React from "react";
import { FiMapPin } from "react-icons/fi";
import "./Home.css";
import { IoSearch } from "react-icons/io5";
import Image from 'next/image';
function HeroSection() {
  return (
    <div className="hero-section bg-theme container-fluid">
      <div className="row h-100 mx-auto justify-content-evenly">
        <div className="col-lg-5 d-flex align-items-center">
          <div className="">
            <h1 className="display-5 hero-heading">
              Get Expert{" "}
              <span className="text-blue">Medical Consultation!</span>
            </h1>
            <p className="lead f-16 inter text-muted mt-4 ">
              Our doctors provide expert medical advice and consultation. Get in
              touch with our team to discuss.
            </p>
            <div className="mt-4 bg-white rounded-12 d-flex justify-content-between align-items-center px-4 py-2">
              <div className="w-75 d-flex align-items-center gap-4">
                <FiMapPin size="24" />
                <input
                  type="text"
                  className="w-100 inter text-black f-16 fw-normal border-0 shadow-none outline-none placeholder-black me-2"
                  placeholder="Search Doctors in your location "
                />
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="109"
                  height="51"
                  viewBox="0 0 109 51"
                  fill="none"
                  style={{ position: "relative" }}
                >
                  <path
                    d="M0.339722 12.0398C0.339722 5.41238 5.71231 0.0397949 12.3397 0.0397949H96.3397C102.967 0.0397949 108.34 5.41238 108.34 12.0398V38.0398C108.34 44.6672 102.967 50.0398 96.3397 50.0398H12.3397C5.7123 50.0398 0.339722 44.6672 0.339722 38.0398V12.0398Z"
                    fill="#0086FF"
                  />
                  <foreignObject x="0" y="0" width="109" height="51">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <IoSearch size="24" className="text-white" />
                    </div>
                  </foreignObject>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex align-items-end">
        <Image
        src="/img1.png"
        alt="Description of the image"
         layout="responsive"
         width={554.773} // Width in pixels
         height={614.707} // Height in pixels
         className="img-fluid" // For responsive behavior
      />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
