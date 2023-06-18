/* eslint-disable react/style-prop-object */
import { useTheme } from "@mui/material"
import React from "react";

const Skill = (props: any) => {
  const theme = useTheme();
  const { label, percentage, icon: Icon } = props;
  return (
    <div style={{width: '100%', paddingTop: 0, marginTop: 0}}>
    <div
      style={{
        position: 'relative',
        width: '100%',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        margin: '1rem 0 0',
        fontWeight: 500,
        fontFamily: 'Oswald, Impact, sans-serif',
        textTransform: 'uppercase',
        height: '50px',
        color: theme.palette.secondary.dark
      }}
    >
      <Icon style={{height: '24px', width: '24px', marginRight: '6px', color: theme.palette.grey.A700}}/> {label} <div style={{
        position: 'absolute',
        right: 0,
        bottom: '-6px',
        display: 'block',
        zIndex: 2,
        width: '36px',
        height: '26px',
        fontWeight: 600,
        padding: '2px 4px',
        fontSize: '14px',
        fontFamily: 'Lato, Verdana, sans-serif',
        borderBottomLeftRadius: '0 !important',
        borderBottomRightRadius: '0 !important',
        backgroundColor: theme.palette.grey[700],
        color: theme.palette.grey[100],
      }}
      >
        {percentage}%
      </div>
    </div>
      <div
        role="progressbar"
        aria-label={label}
        style={{
          height: '6px',
          width: '100%',
          backgroundColor: theme.palette.grey[300]
        }}
      >
        <div
          style={{
            verticalAlign: 'middle',
            fontFamily: 'Oswald, Impact, serif',
            fontWeight: 700,
            letterSpacing: '1px',
            height: '6px',
            width: `${percentage}%`,
            backgroundColor: theme.palette.secondary.main
          }}
        ></div>
    </div>
  </div>
  )
}

export default Skill;