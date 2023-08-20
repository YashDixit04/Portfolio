import React from "react";

// import {
//   vsCode,
//   Aset,
//   AnImg,
//   AndroidStudio,
//   BootStarp,
//   Clippy,
//   ColorPalette,
//   Cloud,
//   GoogleSlides,
//   Pichon,
//   South,
//   Eclipse,
//   MsWord,
//   Replit,
//   Spike,
//   From,
//   CodeSandbox,
//   FontAwesome,
//   Freepik,
//   GoogleDoc,
//   GoogleSheets
// } from "./import.jsx";

import ToolsImg from "./ToolImg";
import GetTool from "./GetTools";

export default function Tools() {
  let items = [
    ToolsImg.map((tools) => (
      <GetTool
        key={tools.key}
        title={tools.title}
        image={tools.image}
        width={tools.width}
        height={tools.height}
        alt={tools.alt}
        loading={tools.loading}
        decoding={tools.decoding}
      />
    ))
  ];
  let itemList = [];
  items.forEach((item, index) => {
    itemList.push(<li key={index}>{item}</li>);
  });

  return (
    <>
      <div className="main-container">
        <div className="fullwidth-module">
          <logo-cloud>
            <h2 className="heading-secondary projects__heading-secondary">
              <span className="heading-secondary__sm">
                Tools
                <lord-icon
                  src="https://cdn.lordicon.com/oncyjozz.json"
                  trigger="loop"
                  delay="2000"
                  colors="outline:#121331,primary:#646e78"
                ></lord-icon>
              </span>
              <span className="heading-secondary__main">
                Here you will find more Tools used,Which was used for every
                Industrial and Software Tech Company
              </span>
            </h2>

            <ul id="logos" className="logos-list  about__skills">
              {items}
            </ul>
          </logo-cloud>
        </div>
      </div>
    </>
  );
}
