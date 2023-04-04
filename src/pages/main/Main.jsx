import React from 'react';
import ImgMan from "../../components/img/ImgMan.png";
import "../../components/css/Main.css"
import Dashboard from "../../components/img/Dashboard.png";
import Portraits from "../../components/img/Portraits.png";
import Malayalam from "../../components/img/Malayalam.png";
const Main = () => {
    return (
      <main className="main ">
        <section className="section1">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 Col1Row1Section1Main">
              <h1 className="H1_1">
                Hi, I am John, <br /> Creative Technologist
              </h1>
              <p className="P1">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet <br /> sint. Velit officia consequat duis enim velit
                mollit. Exercitation veniam <br /> consequat sunt nostrud amet.
              </p>
              <a href="#" className="BtnDowload">
                Download Resume
              </a>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
              <img src={ImgMan} alt={ImgMan} />
            </div>
          </div>
        </section>
        <section className="section2">
          <p className="P2">Recent posts </p>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className="card Card" style={{ width: "418px" }}>
                <div className="card-body">
                  <h5 className="card-title CardTitle1">
                    Making a design system from scratch
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted Date">
                    12 Feb 2020 | Design, Pattern
                  </h6>
                  <p className="card-text CardText">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className="card Card" style={{ width: "418px" }}>
                <div className="card-body">
                  <h5 className="card-title CardTitle1">
                    Creating pixel perfect icons in Figma
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted Date">
                    12 Feb 2020 | Figma, Icon Design
                  </h6>
                  <p className="card-text CardText">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section3">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 caRd caRd1">
              <div className="card" style={{ width: "500px" }}>
                <img src={Dashboard} className="card-img-top" alt={Dashboard} />
                <div className="card-body">
                  <h5 className="card-title H1_2">Designing Dashboards</h5>
                  <p className="card-text Year2020">2020</p>
                  <p className="card-text TextGrey">Dashboard</p>
                  <p className="card-text Text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit <br /> officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt <br /> nostrud
                    amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 caRd caRd2 ">
              <div className="card" style={{ width: "500px" }}>
                <img src={Portraits} className="card-img-top" alt={Portraits} />
                <div className="card-body">
                  <h5 className="card-title H1_2">Vibrant Portraits of 2020</h5>
                  <p className="card-text Year2020">2018</p>
                  <p className="card-text TextGrey">Illustration</p>
                  <p className="card-text Text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit <br /> officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt <br /> nostrud
                    amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 caRd caRd3">
              <div className="card" style={{ width: "500px" }}>
                <img src={Malayalam} className="card-img-top" alt={Malayalam} />
                <div className="card-body">
                  <h5 className="card-title H1_2">36 Days of Malayalam type</h5>
                  <p className="card-text Year2020">2018</p>
                  <p className="card-text TextGrey">Typography</p>
                  <p className="card-text Text">
                    {" "}
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit <br /> officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt <br /> nostrud
                    amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <hr />
      </main>


    );

};



export default Main;