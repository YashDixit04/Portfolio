import React from "react";

export default function Certifications() {
  window.addEventListener("DOMContentLoaded", (event) => {
    const scrollContainer = document.getElementById("scroll-container");

    scrollContainer.addEventListener("scroll", () => {
      const sections = document.getElementsByClassName("section");
      const currentSection = Math.round(
        scrollContainer.scrollLeft / window.innerWidth
      );
      sections[currentSection].classList.add("active");

      for (let i = 0; i < sections.length; i++) {
        if (i !== currentSection) {
          sections[i].classList.remove("active");
        }
      }
    });
  });

  return (
    <>
      <section id="Certification" className="certificstion">
        <div className="main-container">
          <h2 className="heading-secondary projects__heading-secondary">
            <span className="heading-secondary__sm">
              Certifications <span></span> 🛠️
            </span>
            <span className="heading-secondary__main ">
              Here you will find some of the personal and clients projects that
              I created with the project details
            </span>
          </h2>
        </div>
        <div id="scroll-container">
          <div class="section">
            <h2>Web-Designing</h2>
            <p>
              <span>Period: </span>
              2022-11oct 2022 <br />
              <span> INCAPP</span>
            </p>
            <p>
              <span>Candidate ID:</span>522/10804/1026
            </p>
            <a
              href="https://docs.google.com/document/d/1tuOSCqF_-MY-C_0M2xBEzHcPaZumv-wcE_pgnfXXILY/edit?usp=sharing"
              target="_blank "
              rel="noreferrer"
            >
              <button className="btn btn-inv projects__btn-inv">Link</button>{" "}
            </a>
          </div>
          <div class="section">
            <h2>Android App Development</h2>
            <p>
              <span>Date:</span> 02 July 2023{" "}
              <span>
                <br />
                Perfect eLearning
              </span>
            </p>
            <p>
              <span>Lincese No:</span>U803012021ptc093214
            </p>
            <p>
              <span>Certificate No:</span> %00016301
            </p>
            <a
              href="https://perfectelearning.com/certificate/5108935a67"
              target="_blank "
              rel="noreferrer"
            >
              <button className="btn btn-inv projects__btn-inv">Link</button>{" "}
            </a>
          </div>
          <div class="section">
            <h2>Python</h2>
            <p>
              <span>Date:</span>Sep 30,2020
              <span>
                <br />M University of Michian
              </span>
            </p>
            <a
              href="https://docs.google.com/document/d/1FSKs7VcFIFs1JTZq0NjU1uyr_bzFh_G7C571lpXWQUo/edit?usp=sharing"
              target="_blank "
              rel="noreferrer"
            >
              <button className="btn btn-inv projects__btn-inv">Link</button>{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
