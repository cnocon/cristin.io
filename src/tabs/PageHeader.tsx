import { Typography } from "@mui/material"
import React from "react";

const PageHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="page-header-container"><div className="page-header"><Typography sx={{fontWeight: 300, fontFamily: "Oswald, Impact, sans-serif", mb: 4, textAlign: 'center'}}><span>{title}</span></Typography></div></div>
  )
}

export default PageHeader;