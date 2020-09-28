import React from "react";
import DeskTop from "./DeskTop";
import MobileTop from "./MobileTop";
import requireAuth from "../auth/requireAuth";

function TopJobs() {
  return (
    <>
      <DeskTop />
      <MobileTop />
    </>
  );
}

export default requireAuth(TopJobs);
