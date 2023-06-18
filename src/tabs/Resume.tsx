import React from "react";
import { Container, Stack, useTheme } from "@mui/material"
import Skill from "../Skill";
// import GridItem from "@mui/material/Grid";
import WorkHistory from "../Resume/WorkHistory";
import styled from "@emotion/styled";
import EducationHistory from "../Resume/EducationHistory";
import data from "../data";
import Courses from "../Courses";
const StyledTitle = styled.h3`
  font-family: Pacifico, script;
  font-size: 2rem;
`

const Heading: React.FC<{ style: any, title: string }> = ({ style, title }) => {
  return <StyledTitle style={style}>{title}</StyledTitle>

}
const Resume = () => {
  const theme = useTheme();
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
          <Heading title="Work History" style={{marginTop: '4rem'}} />
          <WorkHistory data={data.resume.workHistory} />
        </Stack>

        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={4}
          flexBasis={{xs: '100%', md: "40%"}}
        >
          <Heading title="Technical Skills" style={{marginTop: '4rem'}} />
          {data.resume.technicalSkills.map((skill: any, index: any) => {
            return <Skill label={skill.label} percentage={skill.percentage} icon={skill.icon} />
          })}
          <Heading title="Education" style={{marginTop: '4rem'}} />
          <EducationHistory data={data.resume.education} />
          <Heading title="Recent Coursework" style={{marginTop: '4rem'}} />
          <Courses data={data.courses} />
        </Stack>
      </Stack>
    </Container>
  )
}

export default Resume;