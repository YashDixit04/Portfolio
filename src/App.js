import "./styles.css";
import {
  Navbar,
  HomeContent,
  About,
  Project,
  Certifications,
  Tools,
  Contact,
  Footer
} from "./components/import";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import NewNavbar from "./components/NewNavbar";

export default function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter> */}

      <Navbar
        title="Ya$h"
        home="Home"
        aboutText="About"
        contact="Contact "
        Projects="Project"
      />

      <HomeContent Name="Yash Dixit" contact="Contact " Projects="Project" />

      <About Projects="Project" />
      <Tools />
      <Project />

      <Certifications />
      <Contact />
      <Footer
        home="Home"
        aboutText="About"
        contact="Contact "
        Projects="Project"
      />
    </>
  );
}
