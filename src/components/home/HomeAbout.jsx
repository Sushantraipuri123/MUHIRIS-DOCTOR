import React from "react";
import Image from "next/image";

function HomeAbout() {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <Image
            src="/img2.png"
            alt="Description of the image"
            layout="responsive"
            width={547} // Width in pixels
            height={422} // Height in pixels
            className="img-fluid home-about-img" // For responsive behavior
          />
        </div>
        <div className="col-lg-6 d-flex align-items-center mt-3 mt-lg-0">
          <div className="">
            <h3 className="home-about-heading text-blue f-16 fw-semibold inter">
              About Us
            </h3>
            <h2 className="display-6 fw-bold theme-text-color plus my-2">
              World-Class Preventive, Prescriptive & Curative Medical Practices
            </h2>
            <p className="f-16 inter text-grey pb-3">
            Being in the healthcare sector, we consider it our paradigm duty
to ensure Safety of our patients, effectiveness of our treatments,
transparency in our practices, and absolute timely care.
            </p>
           <button className="btn-theme inter f-16 text-white border-0">
            Contact us
           </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
