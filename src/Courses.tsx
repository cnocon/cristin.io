import { Avatar, Card, CardContent, CardHeader, useTheme } from "@mui/material"
import React from "react";
import CardMedia from '@mui/material/CardMedia';

const Courses: React.FC<{ data: any }> = ({ data }) => {
  const theme = useTheme();
  if (!data) {
    return <></>
  }

  return data.map((course: any, index: number) => {
    const {Icon} = course;
    const isEven = index % 2 === 0;
    const isOdd = index % 2 > 0
    return (
    <Card variant="outlined" key={`course-${index}`} sx={{width: '100%'}}>
      <div style={{backgroundColor: isEven ? theme.palette.primary.main : theme.palette.secondary.main, borderRadius: '50%', height: '70px', width: '70px', margin: 'auto', border: isOdd ? `4px solid ${theme.palette.primary.main}` : `4px solid ${theme.palette.secondary.main}`}}>
        <Icon color={isEven ? "secondary" : "primary"} sx={{margin: '2px', width: 58, height: 58}} />
      </div>
      <CardHeader
        title={course.title}
        subheader={`Completed on ${course.completedDate} | ${course.platform}`}
        sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        subheaderTypographyProps={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        titleTypographyProps={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      />


      <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {course.description}
      </CardContent>
    </Card>
  )}
)}

export default Courses;