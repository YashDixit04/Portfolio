import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa"; // react-icon

export default function Navbar(props) {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    //getBoundingClientReact method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
    //method returns the size of an element and its position relative to the viewport.
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <h3 className="logo">{props.title}</h3>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              <li className="main-header__navigation-link">
                <a className="nav-link" href="./index.html#home-hero">
                  {props.home}{" "}
                </a>
              </li>
              <li className="main-header__navigation-link">
                <a className="nav-link" href="./index.html#about">
                  {props.aboutText}
                </a>
              </li>
              <li className="main-header__navigation-link">
                <a className="nav-link" href="./index.html#projects">
                  {" "}
                  {props.Projects}{" "}
                </a>
              </li>
              <li className="main-header__navigation-link">
                <a className="nav-link" href="./index.html#contact ">
                  {props.contact}{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   home: PropTypes.string,
//   aboutText: PropTypes.string,
//   contact: PropTypes.string,
//   Projects: PropTypes.string
// };

Navbar.defaultProps = {
  title: "title",
  home: "HomeText/Icon",
  aboutText: "aboutText",
  contact: "contactText",
  Projects: "More"
};
