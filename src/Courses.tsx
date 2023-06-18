import { Card, CardContent, CardHeader } from "@mui/material"
import React from "react";


const Courses: React.FC<{ data: any }> = ({ data }) => {
  if (!data) {
    return <></>
  }

  return data.map((course: any, index: number) => (
    <Card key={`course-${index}`} sx={{width: '100%'}}>
      <CardHeader
        title={course.title}
        subheader={`Completed on ${course.completedDate} | ${course.platform}`}
      />
      <CardContent>
        {course.description}
      </CardContent>
    </Card>
  )
)}

export default Courses;