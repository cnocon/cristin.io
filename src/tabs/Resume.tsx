import React from "react";
import { Typography, Stack, Alert, Container, useTheme, Box } from "@mui/material"
import Skill from "../Skill";
import WorkHistory from "../Resume/WorkHistory";
import EducationHistory from "../Resume/EducationHistory";
import data from "../data";
import Courses from "../Courses";
import PageHeader from "../PageHeader";

const Heading: React.FC<{ styles?: any, title: string }> = ({ styles, title }) => {
  const theme = useTheme()
  const allStyles = Object.assign(styles || {}, {fontFamily: 'Pacifico, script', marginLeft: 'auto !important', marginRight: 'auto !important', color: theme.palette.text.primary});
  return <Typography variant="h5" sx={allStyles || {}}>{title}</Typography>
}

const Resume = () => {
  if (!data) {
    return <Alert variant="standard" color="error">Error: Problem fetching data</Alert>
  }
  return (
      !data ? <Container maxWidth="lg"><Alert variant="standard" color="error">Error: Problem fetching data</Alert></Container> : (
      <Container maxWidth="lg" sx={{mb: 8}}>
        <PageHeader title="Resume" />
      <Stack
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={4}
        flexGrow={1}
        direction={{ xs: 'column', md: 'row' }}
      >
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={4}
          flexBasis={{xs: '100%', md: "60%"}}
        >
          <Heading title="Work History" />
          <WorkHistory data={data.resume.workHistory} />
        </Stack>

        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={4}
          flexBasis={{xs: '100%', md: "40%"}}
        >

            <Heading title="Technical Skills" />
            {data.resume.technicalSkills.map((skill: any, index: any) => {
              return <Skill label={skill.label} percentage={skill.percentage} icon={skill.icon} key={skill.label} />
            })}

          <Heading title="Education" />
          <EducationHistory data={data.resume.education} />
          <Heading title="Recent Coursework" />
          <Courses data={data.courses} />
        </Stack>
      </Stack>
      </Container>))}



export default Resume;