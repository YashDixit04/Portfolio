import React from "react";

export default function HomeContent(props) {
  return (
    <>
      <section id="home-hero" className="home-hero">
        <div className="home-hero__content">
          <div className="home-hero__info">
            <h1 className="heading-primary home-hero__heading-primary">
              <span className="heading-primary__sm"> Hello 👋</span>
              <span className="heading-primary__main "> I'm </span>
              <span className="name"> {props.Name} </span>
              <span>
                ! A Web Developer Building Awesome WebApps And Websites That
                Powers The Internet
              </span>
            </h1>
            <a href="./index.html#projects">
              <button className="btn btn-theme home-hero__btn-theme">
                {props.Projects}
              </button>
            </a>
            <a href="./index.html#contact ">
              <button className="btn btn-inv home-hero__btn-theme">
                Hire me!
              </button>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="developer">
          <lord-icon
            src="https://cdn.lordicon.com/gqqykmqo.json"
            trigger="loop"
            delay="2000"
            colors="outline:#121331,primary:#646e78,secondary:#ad6836,tertiary:#4faef9,quaternary:#f3c3ba"
            // style="width:250px;height:250px"
          ></lord-icon>
        </div>
      </section>
    </>
  );
}
