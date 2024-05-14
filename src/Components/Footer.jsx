/** @format */

import React from "react";

const Footer = () => {
   return (
      <footer className="footer p-10 bg-base-200 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-base-content ">
         <aside>
            <p className=" italic font-bold mt-8  cursor-pointer text-3xl">
               Assign
               <span className="text-sky-500 text-3xl md:text-5xl">M</span>ates
            </p>
            <span>Copyrights Reserved @2024</span>
         </aside>
         <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
         </nav>
         <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
         </nav>
         <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
         </nav>
      </footer>
   );
};

export default Footer;
