import React from 'react';
import Linkedin from "../../components/img/Linkedin.png";
import  Twitter from "../../components/img/Twitter.png";
import Instagram from "../../components/img/insta.png";
import FaceBook from "../../components/img/fb.png";
import "../../components/css/Footer.css"



const Footer = () => {
    return (
      <div className="Footer row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
          <img className='Fb' src={FaceBook} alt={FaceBook} />
          <img className='Im' src={Instagram} alt={Instagram} />
          <img className='Tr' src={Twitter} alt={Twitter} />
          <img className='Ln' src={Linkedin} alt={Linkedin} />
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <p className="FooterP">Copyright ©2020 All rights reserved</p>
        </div>
      </div>
    );
};


export default Footer;