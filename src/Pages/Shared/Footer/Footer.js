import React from 'react';
import footerLogo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
        <div>
         <img src={footerLogo} alt=" " />
          <p>@Meraj Industries Ltd.<br/>Providing reliable Car Service since 2021</p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <a href="/" className="link link-hover">Branding</a> 
          <a href="/" className="link link-hover">Design</a> 
          <a href="/" className="link link-hover">Marketing</a> 
          <a href="/" className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a href="/" className="link link-hover">About us</a> 
          <a href="/" className="link link-hover">Contact</a> 
          <a href="/" className="link link-hover">Jobs</a> 
          <a href="/" className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a href="/" className="link link-hover">Terms of use</a> 
          <a href="/" className="link link-hover">Privacy policy</a> 
          <a href="/" className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;