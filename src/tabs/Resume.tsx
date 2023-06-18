import React from "react";
import { Container, Stack } from "@mui/material"
import Skill from "../Skill";
import WorkHistory from "../Resume/WorkHistory";
import styled from "@emotion/styled";
import EducationHistory from "../Resume/EducationHistory";
import data from "../data";
import Courses from "../Courses";
const StyledTitle = styled.h3`
  font-family: Pacifico, script;
  font-size: 2rem;
`

const Heading: React.FC<{ styles?: any, title: string }> = ({ styles, title }) => {
  const allStyles = {style: styles} || {};
  return <StyledTitle {...allStyles}>{title}</StyledTitle>
}

const Resume = () => {
  if (!data) {
    return <h1>Problem fetching data</h1>
  }
  return (
    <Container maxWidth="lg">
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
          <Heading title="Work History" styles={{marginTop: '3rem'}} />
          <WorkHistory data={data.resume.workHistory} />
        </Stack>

        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={4}
          flexBasis={{xs: '100%', md: "40%"}}
        >
          <Heading title="Technical Skills" styles={{marginTop: '3rem'}} />
          {data.resume.technicalSkills.map((skill: any, index: any) => {
            return <Skill label={skill.label} percentage={skill.percentage} icon={skill.icon} key={skill.label} />
          })}
          <Heading title="Education" styles={{marginTop: '3rem'}} />
          <EducationHistory data={data.resume.education} />
          <Heading title="Recent Coursework" styles={{marginTop: '3rem'}} />
          <Courses data={data.courses} />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Resume;