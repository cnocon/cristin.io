/* eslint-disable react/style-prop-object */
import React from "react";
import { useTheme } from "@mui/material"
import { iconDictionary } from "./constants";

const Skill = (props: any) => {
  const theme = useTheme();
  const { label, percentage, icon } = props;
  const Icon = iconDictionary[icon];
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
        fontSize: '14px'
      }}
    >
      <Icon style={{
        height: 'auto',
        maxWidth: '100%',
        width: '28px',
        marginRight: '6px'}}
      />

      {label}
      <div style={{
        position: 'absolute',
        right: 0,
        bottom: '-6px',
        display: 'block',
        textAlign: 'center',
        zIndex: 2,
        width: '45px',
        height: '32px',
        fontWeight: 700,
        padding: '3px 5px',
        fontSize: '14px',
        fontFamily: 'Lato, Verdana, sans-serif',
        borderBottomLeftRadius: '0 !important',
        borderBottomRightRadius: '0 !important',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
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
            backgroundColor: theme.palette.secondary.main,
          }}
        ></div>
    </div>
  </div>
  )
}

export default Skill;