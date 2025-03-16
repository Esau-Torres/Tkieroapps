import React from "react";
import logo from '../img/logo.png'; 
import footer from '../img/footer.png'; 
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
            <img src={logo} alt="logo" style={{ height: "40px" }} />
            <p className="small mt-2">© 2025 Copyright by Xert - All Rights Reserved.</p>
          </div>

          <div className="col-md-6 text-center mb-3 mb-md-0">
            <a href="#" className="text-dark mx-2">Terms & Conditions</a>
            <a href="#" className="text-dark mx-2">Following & Cookies</a>
            <a href="#" className="text-dark mx-2">Crypto Policy</a>
            <a href="#" className="text-dark mx-2">Account Suspension</a>
          </div>

          <div className="col-md-3 text-center text-md-end">
            <a href="https://www.facebook.com/Tkieroapp" className="text-dark mx-2"><FaFacebook size={20} /></a>
            <a href="https://www.instagram.com/tkiero_app/" className="text-dark mx-2"><FaInstagram size={20} /></a>
          </div>
        </div>

        <div className="text-center mt-3">
          <img src={footer} alt="footer" style={{ height: "50px" }} />
          <p className="small">
            Institución financiera supervisada por la Superintendencia del Sistema Financiero de El Salvador.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
