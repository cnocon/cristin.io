import React from "react";
import { Container, Stack } from "@mui/material"
// import GridItem from "@mui/material/Grid";
import WorkHistory from "../Resume/WorkHistory";
import styled from "@emotion/styled";
import data from "../data";

const StyledTitle = styled.h3`
  font-family: Pacifico, script;
  font-size: 2rem;
`

const Heading: React.FC<{ title?: string }> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>

}
const Resume = () => {

  if (!data) {
    return <h1>Problem fetching data</h1>
  }
  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={4}
        flexGrow={1}
      >
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <Heading title="Work History" />
          <WorkHistory data={data.resume.workHistory} />
        </Stack>

        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <Heading title="Technical Skills" />
          {data.resume.technicalSkills.map((skill: any, index: any) => {
            return <h5>{skill.label}</h5>
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