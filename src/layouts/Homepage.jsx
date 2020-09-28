import React from "react";
import Nav from "./Nav";
import TopContent from "./TopContent";
import HireContent from "./HireContent";
import Trustees from "./Trustees";
import Process from "./Process";
import Testimonies from "./Testimonies";
import Next from "./Next";
import Footer from "./Footer";

function Homepage() {
  return (
    <>
      <Nav />
      <TopContent />
      <HireContent />
      <Trustees />
      <Process />
      <Testimonies />
      <Next />
      <Footer />
    </>
  );
}

export default Homepage;
