import React from "react";
import "./style.css";
const FooterNav = () => {
  return (
    <nav>
      <div className="footer-menue">
        <ul>
          <li>
            <a
              href="https://muhammadadnan.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              v1
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/theadnan/" target="_blank" rel="noreferrer">
              My Official Account
            </a>
          </li>
          <li>
            <a href="#home">Back to Top</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FooterNav;
