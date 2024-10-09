import React from "react";

function Integrity() {
  return (
    <>
      <div className="container-fluid  my-4 py-lg-5 py-md-4 py-sm-3 py-xl-5">
        <div className="container ">
          <div className="row justify-content-between">
            <div className="col-lg-6 ">
             <div className="row">
             <div className="d-flex flex-column gap-4 col-md-6 col-sm-16 ">
                <img src="image.png" alt="a" />
                <img src="image (2).png" alt="a" />
              </div>
              <div className="d-flex flex-column gap-4 mt-5 pt-lg-3 col-md-6 col-sm-16 ">
                <img src="image (1).png" alt="a" />
                <img src="image (3).png" alt="a" />
              </div>
             </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
                <div className="">
              <div className="f-16 inter text-blue fw-bold">Integrity</div>
              <h2 className="theme-text-color plus fw-bold mt-2 display-6 " >Our Stellar Values</h2>
              <p className="my-4 inter speciality-subheading">
              The cornerstone of our establishment is ‘Making the benefits of exceptional medical services reach the people without Discrimination.’ We strive to live up to this philosophy through our stellar values, that are the pillars of every service that we offer under the banner of our prestigious hospital.
              </p>
              <button className="btn-theme inter f-16 text-white border-0">Contact Us</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Integrity;
