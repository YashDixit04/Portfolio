import React from "react";

export default function About(props) {
  return (
    <>
      <section id="about" className="about main-section">
        <div className="main-container">
          <h2 className="heading-secondary projects__heading-secondary">
            <span className="heading-secondary__sm">
              {" "}
              About <span>🌟 </span>
            </span>
            <span className="heading-secondary__main">
              Here you will find more information about me, what I do, and list
              of my current skills in programming
            </span>
          </h2>
          <div className="main-section__content">
            <div className="about__info">
              <div className="about__main-info">
                <h3 className="heading-quaternary about__heading-quaternary">
                  Summary
                </h3>
                <p className="text-primary about__text-primary">
                  <span>
                    Seeking an opportunity to apply my innate interest in the
                    fields of development and designing along with acquiring
                    working experience, industrial exposure and professional
                    grooming as I look to contribute to the industry in
                    innovative and enriching way. I am professional with result
                    oriented approach with aptitude towards using ingeniousways
                    for maximizing results.
                  </span>
                </p>
                <a href="./index.html#projects">
                  <button className="btn btn-theme about__btn-theme">
                    {" "}
                    {props.Projects}
                  </button>
                </a>
              </div>
              <div className="about__skill-info">
                <h3 className="heading-quaternary about__heading-quaternary">
                  My Skills
                </h3>
                <ul className="about__skills">
                  <li id="HTML5" className="about__skill">
                    HTML5
                  </li>
                  <li id="CSS" className="about__skill">
                    CSS
                  </li>
                  <li id="JavaScript" className="about__skill">
                    JavaScript
                  </li>
                  <li id="React" className="about__skill">
                    React
                  </li>
                  <li id="Node" className="about__skill">
                    Node
                  </li>
                  <li id="Python" className="about__skill">
                    Python
                  </li>
                  <li id="Java" className="about__skill">
                    Java
                  </li>
                  <li id="Git" className="about__skill">
                    Git
                  </li>
                  <li id="JQuery" className="about__skill">
                    JQuery
                  </li>
                  <li id="VsCode" className="about__skill">
                    VsCode
                  </li>
                  <li id="Git" className="about__skill">
                    GitHub
                  </li>
                  <li id="Bootstrap" className="about__skill">
                    Bootstrap
                  </li>
                  <li id="Animation" className="about__skill">
                    MongoDB
                  </li>
                  <li id="Sierra" className="about__skill">
                    Ejs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
