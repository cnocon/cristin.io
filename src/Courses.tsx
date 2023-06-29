import React from "react";
import { Card, CardContent, CardHeader, Typography, useTheme } from "@mui/material"
import { iconDictionary } from "./constants";

const Courses: React.FC<{ data: any }> = ({ data }) => {
  const theme = useTheme();

  if (!data) {
    return <></>
  }

  return data.map((course: any, index: number) => {
    const {Icon} = course;
    const IconComponent = iconDictionary[Icon];
    const isEven = index % 2 === 0;
    const isOdd = index % 2 > 0
    return (
    <Card variant="outlined" key={`course-${index}`} sx={{width: '100%', boxShadow: 4, p: 2}}>
      <div style={{backgroundColor: isEven ? theme.palette.primary.dark : theme.palette.secondary.main, borderRadius: '50%', height: '70px', width: '70px', margin: 'auto', border: isOdd ? `4px solid ${theme.palette.primary.dark}` : `4px solid ${theme.palette.secondary.main}`}}>
        <IconComponent sx={{color: isEven ? theme.palette.secondary.main : theme.palette.primary.dark, margin: '2px', width: 58, height: 58}} />
      </div>
      <CardHeader
        title={<Typography variant="h5" sx={{textAlign: 'center'}}>{course.title} | {course.platform}</Typography>}
        subheader={course.completedDate === "In Progress" ? `In Progress` : `Completed on ${course.completedDate}`}
        sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
        subheaderTypographyProps={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
        titleTypographyProps={{display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center'}}
      />
      <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {course.description}
      </CardContent>
    </Card>
  )}
)}

export default Courses;