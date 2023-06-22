import React from "react";
import { Container, Link, List, ListItem, Stack, Typography } from "@mui/material";

const Contact = () => {
  return (

    <Container maxWidth="lg" sx={{padding: 4, minHeight: '100%'}}>
      <Stack direction="row" sx={{flexWrap: "wrap"}}>
        <Typography variant="h2" sx={{flexBasis: '100%'}}>Hi, there!</Typography>
        <List sx={{flexBasis: '100%'}}>
          <ListItem>Email: <Link href="mailto:her@cristin.io">her@cristin.io</Link></ListItem>
          <ListItem>Website: <Link href="https://cristin.io">cristin.io</Link></ListItem>
          <ListItem>LinkedIn: <Link href="https://www.linkedin.com/in/cristinoconnor/">cristinoconnor</Link></ListItem>
          <ListItem>Twitter: <Link href="https://twitter.com/cnocon/">@cnocon</Link></ListItem>
        </List>
      </Stack>
    </Container>
  )
}

export default Contact;