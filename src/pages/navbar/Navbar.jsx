import React from 'react';
import "../../components/css/Navbar.css";


const Navbar = () => {
    return (
      <div className="Header mt-3">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link text-dark Work" aria-current="page" href="#">
              Works
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark Blog" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark Contact" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
};


export default Navbar;