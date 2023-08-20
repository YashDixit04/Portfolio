import React from "react";

export default function allProject(props) {
  return (
    <>
      <div className="projects__list-item">
        <div className="projects__list-item-count">
          <span className="projects__list-item-count-num"> 3 </span>
          <span className="projects__list-item-count-line"> </span>
          <span className="projects__list-item-count-end-dot"> </span>
        </div>
        <div className="projects__list-item-details">
          <div className="projects__list-item-img-cont">
            <img
              src="https://ez-snippet.vercel.app/_next/image?url=%2Ftech%2Fbackend%2Fnodejs.webp&w=1920&q=75"
              alt="Project"
              className="projects__list-item-img"
            />
          </div>
          <h3 className="heading-tertiary projects__list-item-heading-tertiary">
            PDF Merger
          </h3>

          <p class="text-primary projects__list-item-text-primary">
            <span>
              JavaScript, HTML5, CSS, Bootstrap, npm, DOM, JSON and Node.js
            </span>
          </p>

          <button className="btn btn-inv projects__btn-inv">
            <a
              href="https://github.com/YashDixit04/PDF-merger"
              target="_blank"
              rel="noreferrer"
            >
              Code Link
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
