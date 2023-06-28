import { Typography, useTheme } from "@mui/material"
import React from "react";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const PageHeader: React.FC<{ title: string }> = ({ title }) => {
  const theme = useTheme();
  return (
    <div className="page-header-container"><div className="page-header"><Typography sx={{textTransform: 'uppercase', fontFamily: 'Oswald', letterSpacing: '1px', mb: 4, textAlign: 'center', color: theme.palette.text.disabled}}><span><DoubleArrowIcon /> {title} <DoubleArrowIcon sx={{transform: 'rotate(180deg)'}}/></span></Typography></div></div>
  )
}

export default PageHeader;