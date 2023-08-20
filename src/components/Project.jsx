import React from "react";

import FirstProjects from "./allProjects/firstProject.jsx";
import ThirdProject from "./allProjects/thirdProject.jsx";
import ProjectInfo from "../ProjectInfo.js";

export default function Project() {
  return (
    <>
      <section id="projects" className="projects main-section">
        <div className="main-container">
          <h2 className="heading-secondary projects__heading-secondary">
            <span className="heading-secondary__sm">
              Projects <span></span> 🛠️
            </span>
            <span className="heading-secondary__main">
              Here you will find some of the personal that I created with the
              project details
            </span>
          </h2>
          <div className="main-section__content">
            <div className="projects__list">
              {ProjectInfo.map((projectInfo) => (
                <FirstProjects
                  key={projectInfo.key}
                  title={projectInfo.title}
                  content={projectInfo.content}
                  image={projectInfo.image}
                  webkit={projectInfo.webkit}
                  url={projectInfo.urlToRequest}
                />
              ))}
              <ThirdProject />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
