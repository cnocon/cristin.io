import React from "react";
import { Container, Stack, useTheme } from "@mui/material"
import Skill from "../Skill";
// import GridItem from "@mui/material/Grid";
import WorkHistory from "../Resume/WorkHistory";
import styled from "@emotion/styled";
import data from "../data";

const StyledTitle = styled.h3`
  font-family: Pacifico, script;
  font-size: 2rem;
`

const Heading = (props: any) => {
  return <StyledTitle style={props?.style || {}}>{props.title}</StyledTitle>

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
          spacing={1}
          flexBasis={{xs: '100%', md: "60%"}}
        >
          <Heading title="Work History"/* style={{color: theme.palette.primary.dark}} *//>
          <WorkHistory data={data.resume.workHistory} />
        </Stack>

        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
          flexBasis={{xs: '100%', md: "40%"}}
        >
          <Heading title="Technical Skills" /*style={{color: theme.palette.primary.dark}} *//>
          {data.resume.technicalSkills.map((skill: any, index: any) => {
            return <Skill label={skill.label} percentage={skill.percentage} icon={skill.icon} />
          })}
          {data.courses.map((course: any, index: any) => {
            return <h5>{course.description}</h5>
          })}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Resume;