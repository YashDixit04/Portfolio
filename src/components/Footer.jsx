import React from "react";

export default function Footer(props) {
  return (
    <>
      <footer className="main-footer">
        <div className="main-footer__upper">
          <div className="main-container">
            <ul className="main-footer__links">
              <li className="main-footer__link">
                <a href="./index.html#home-hero"> {props.home}</a>
              </li>
              <li className="main-footer__link">
                <a href="./index.html#about"> {props.aboutText}</a>
              </li>
              <li className="main-footer__link">
                <a href="./index.html#projects"> {props.Projects}</a>
              </li>
              <li className="main-footer__link">
                <a href="./index.html#contact"> {props.contact}</a>
              </li>
            </ul>
            <div className="main-footer__mid-line"></div>
            <div className="main-footer__socials">
              <a
                href="https://github.com/YashDixit04/YashDixit04"
                className="main-footer__social-link"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                  alt=""
                  className="main-footer__social-link-icon"
                />
              </a>
              <a
                href="https://codesandbox.io/dashboard/recent?workspace=21490a3a-6676-4c20-b04c-9b843ca680b7"
                className="main-footer__social-link"
              >
                <img
                  src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/external-codesandbox-an-online-code-editor-and-sharing-web-application-projects-logo-tritone-tal-revivo.png"
                  alt=""
                  className="main-footer__social-link-icon"
                />
              </a>
              <a
                href="https://replit.com/@YashDixit6"
                className="main-footer__social-link"
              >
                <img
                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/replit_logo_icon_170784.png"
                  alt=""
                  className="main-footer__social-link-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-dixit-23100b214/"
                className="main-footer__social-link"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                  alt=""
                  className="main-footer__social-link-icon"
                />
              </a>
              <a href="$" className="main-footer__social-link">
                <img
                  src="./assets/icons8-pinterest-64.png"
                  alt=""
                  className="main-footer__social-link-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="main-footer__bottom">
          <div className="main-container">
            <p className="main-footer__bottom-txt">
              Open-Source Sandbox. Made by <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://codesandbox.io/s/portfolio-xksw89?file=/src/App.js"
              >
                Yash Dixit
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
