import React from "react";
import { Outlet } from "react-router-dom";

const CaseStudyLayout = () => {
  return (
    <div style={{ 
      minHeight: "100vh", 
      overflowY: "auto",
      paddingTop: "0"
    }}>
      <Outlet />
    </div>
  );
};

export default CaseStudyLayout;
