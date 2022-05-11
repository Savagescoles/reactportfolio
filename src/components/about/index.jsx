import React from "react";
// import Boxes from "./Boxes";
import PersonalInfo from "./PersonalInfo";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  detailed information
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12 d-block d-sm-none">
                <img
                  src={process.env.PUBLIC_URL + "/img/hero/img-mobile.jpg"}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              {/* image for mobile menu */}

              <div className="col-12">
                <PersonalInfo />
              </div>
              {/* End personal info */}

              <div className="col-12 mt-1">
                <a className="button" href="/img/cv.jpg" download>
                  <span className="button-text">Download Resume</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          {/* <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Boxes />
          </div> */}
          {/* boxes end */}
        </div>


          <hr className="separator mt-1" />

        
      </div>
    </section>
  );
};

export default index;
