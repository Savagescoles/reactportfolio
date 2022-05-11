import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);



  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }



  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>ALL</Tab>
        <Tab>SCHOOL</Tab>
        {/* <Tab>WORK</Tab> */}
      </TabList>

      <div className="portfolio-tab-content">
        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalOne}>
                <img src={process.env.PUBLIC_URL + "/img/projects/project1.JPG"} alt="Note Taker" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Note Taker</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwo}>
                <img src={process.env.PUBLIC_URL + "/img/projects/project2.JPG"} alt="JS Quiz" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"> JS Quiz</span>
                </div>
              </figure>

              {/* Start ModalTwoContent */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure onClick={toggleModalThree}>
                <img src={process.env.PUBLIC_URL + "/img/projects/project3.JPG"} alt="SN API" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Social Network API</span>
                </div>
              </figure>

              {/* Start ModalThreeContent */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalThreeContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            

            
          </ul>
        </TabPanel>
        {/* End All Project */}
{/* second tab */}
        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Item Starts --> */}
          <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalOne}>
                <img src={process.env.PUBLIC_URL + "/img/projects/1-cardiac-arrest.png"} alt="Search App" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Cardiac Arrest</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwo}>
                <img src={process.env.PUBLIC_URL + "/img/projects/2-shamazon.png"} alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"> Tech Blog</span>
                </div>
              </figure>

              {/* Start ModalTwoContent */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure onClick={toggleModalThree}>
                <img src={process.env.PUBLIC_URL + "/img/projects/3-whatshouldyoudotoday.png"} alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"> Weather App</span>
                </div>
              </figure>

              {/* Start ModalThreeContent */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalThreeContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
        
{/* third tab */}
        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Item Starts --> */}
            
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
        {/* End Video Project */}

      </div>
    </Tabs>
  );
};

export default Portfolio;