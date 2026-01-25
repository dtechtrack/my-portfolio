import React from "react";
import { Outlet } from "react-router-dom";

const CaseStudyLayout = () => {
  return (
    <div style={{ minHeight: "100vh", overflowY: "auto" }}>
      <Outlet />
    </div>
  );
};

export default CaseStudyLayout;
