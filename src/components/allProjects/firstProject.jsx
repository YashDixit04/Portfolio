import React from "react";

export default function allProject(props) {
  return (
    <>
      <div className="projects__list-item">
        <div className="projects__list-item-count">
          <span className="projects__list-item-count-num"> 1 </span>
          <span className="projects__list-item-count-line"> </span>
          <span className="projects__list-item-count-end-dot"> </span>
        </div>
        <div className="projects__list-item-details">
          <div className="projects__list-item-img-cont">
            <img
              src={props.image}
              alt="Project"
              className="projects__list-item-img"
            />
          </div>
          <h3 className="heading-tertiary projects__list-item-heading-tertiary">
            {props.title}
          </h3>
          <p className="text-primary projects__list-item-text-primary">
            <span>{props.content}</span>
          </p>
          <a href={props.url} target="_blank" rel="noreferrer">
            <button className="btn btn-theme projects__btn-theme">
              Live Link
            </button>
          </a>
          <a href={props.webkit} target="_blank" rel="noreferrer">
            <button className="btn btn-inv projects__btn-inv">Code Link</button>
          </a>
        </div>
      </div>
    </>
  );
}
