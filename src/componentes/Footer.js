import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png'; 
import footer from '../img/footer.png'; 
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaSnapchat, FaYoutube } from "react-icons/fa";

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
            <Link to="/Terms" className="text-dark mx-2">Terms & Conditions</Link>
            {/* <a href="#" className="text-dark mx-2">Following & Cookies</a>
            <a href="#" className="text-dark mx-2">Crypto Policy</a>
            <a href="#" className="text-dark mx-2">Account Suspension</a>*/}
          </div>
            
          <div className="col-md-3 text-center text-md-end">
            <a href="https://www.facebook.com/Tkieroapp" className="text-dark mx-2"><FaFacebook size={20} /></a>
            <a href="https://www.instagram.com/tkiero_app/" className="text-dark mx-2"><FaInstagram size={20} /></a>
            <a href="https://www.tiktok.com/@tkiero_app?is_from_webapp=1&sender_device=pc" className="text-dark mx-2"><FaTiktok size={20} /></a>
            <a href="https://x.com/TkieroApp" className="text-dark mx-2"><FaTwitter size={20} /></a>
            <a href="https://www.youtube.com/@Tkiero_app" className="text-dark mx-2"><FaYoutube size={20} /></a>
            <a href="https://www.snapchat.com/add/tkieroapp?sender_web_id=3ab5da15-e7ae-454f-87dc-b98afa9bca2d&device_type=desktop&is_copy_url=true" className="text-dark mx-2"><FaSnapchat size={20} /></a>
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
