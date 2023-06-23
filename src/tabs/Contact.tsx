import React from "react";
import { Card, CardContent, CardHeader, Container, Link, List, ListItem, Stack, Typography, useTheme, Paper, CardActionArea } from "@mui/material";
import data from "../data";
import { iconDictionary } from "../constants";

const Contact = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{mt: {xs: 2, md: 4, lg: 8}}}>
      <Stack direction="row" justifyContent="center" spacing={4} flexWrap="wrap" useFlexGap>
        {data.contact.map((contact) => {
          const { label, link, value, icon } = contact;
          const ContactIcon = iconDictionary[icon];
          return <Card
            variant="outlined"
            key={label}
            sx={{
              flexBasis: {xs: '100%', md: 'calc(50% - 32px)'},
              display: 'flex',
              justifyContent: 'center',
              bgcolor: theme.palette.grey[100]
            }}
          >
            <CardActionArea>
            <Link href={link} target="_blank" sx={{textDecoration: 'none'}}>
            <CardHeader
              title={
                <>
                  <ContactIcon
                    sx={{width: '100%'}}
                  />
                  {label}
</>
              }
              subheader={

                  value
              }
              sx={{textAlign: 'center'}}
            />
            </Link>
            </CardActionArea>
          </Card>
        })}
      </Stack>
    </Container>
  )
}

export default Contact;