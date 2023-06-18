import { Avatar, Card, CardContent, CardHeader } from "@mui/material"
import React from "react";


const Courses: React.FC<{ data: any }> = ({ data }) => {
  if (!data) {
    return <></>
  }

  return data.map((course: any, index: number) => (
    <Card key={`course-${index}`} sx={{width: '100%'}}>

      <CardHeader
        title={<div><Avatar src={course?.imageUrl} sx={{maxHeight: '80px', maxWidth: '80px', mx: 'auto', mb: 1}} /> {course.title}</div>}
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