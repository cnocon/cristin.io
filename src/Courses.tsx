import { Avatar, Card, CardContent, CardHeader, useTheme } from "@mui/material"
import React from "react";
import CardMedia from '@mui/material/CardMedia';

const Courses: React.FC<{ data: any }> = ({ data }) => {
  const theme = useTheme();
  if (!data) {
    return <></>
  }

  return data.map((course: any, index: number) => (
    <Card key={`course-${index}`} sx={{width: '100%'}}>
      <div style={{backgroundColor: theme.palette.primary.main, borderRadius: '50%', height: '80px', width: '80px', margin: '0 auto', border: `4px solid ${theme.palette.secondary.main}`}}>
        <CardMedia
          image={course.imageUrl}
          title={course.title}
          sx={{overflow: 'visible', backgroundSize: 'contain', margin: '10px auto', width: '100%', height: '80px'}}
        />
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
  )
)}

export default Courses;