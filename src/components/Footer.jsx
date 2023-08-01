import React from "react";
import { pageList,socialLink } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageList &&
          pageList.map((page) => {
            return (
              <li key={page.id}>
                <a href={page.href} className="footer-link">
                  {page.text}
                </a>
              </li>
            );
          })}

      </ul>
      <ul className="footer-icons">
        {socialLink && socialLink.map((link)=>{
          return (
            <li key={link.id}>
          <a
            href={link.href}
            target="_blank"
            className="footer-icon"
          >
            <i className={link.icon}></i>
          </a>
        </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
