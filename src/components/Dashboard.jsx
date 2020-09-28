import React from "react";
import DeskDashboard from "./DeskDashboard";
import MobileDashboard from "./MobileDashboard";
import requireAuth from "../auth/requireAuth";

function Dashboard() {
  return (
    <>
      <DeskDashboard />
      <MobileDashboard />
    </>
  );
}

export default requireAuth(Dashboard);
