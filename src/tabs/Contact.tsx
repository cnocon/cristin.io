import React from "react";
import { Card, CardHeader, Container, Link, Stack, Typography, useTheme, CardActionArea, Box } from "@mui/material";
import data from "../data";
import { iconDictionary } from "../constants";

const Contact = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" sx={{fontSize: '1.5rem', fontFamily: "Oswald",my: 4}}>Home &gt; Contact</Typography>
      <Stack direction="row" justifyContent="flex-start" spacing={4} flexWrap="wrap" useFlexGap>
        {data.contact.map((contact) => {
          const { label, link, value, icon } = contact;
          const ContactIcon = iconDictionary[icon];
          return <Card
            variant="outlined"
            key={label}
            sx={{
              flexBasis: {xs: '100%', md: 'calc(33% - 32px)'},
              display: 'flex',
              justifyContent: 'center',
              bgcolor: theme.palette.grey[100]
            }}
          >
            <CardActionArea>
              <Link href={link} target="_blank" sx={{textDecoration: 'none'}}>
              <CardHeader
                title={<>
                  <Box style={{width: '100%'}}>
                    <ContactIcon
                      sx={{border: '4px solid ' + theme.palette.secondary.main, color: theme.palette.secondary.main, backgroundColor: theme.palette.primary.main, width: '60px', height: '60px', borderRadius: '50%', padding: '10px'}}
                    />
                  </Box>
                    {label}
                  </>
                }
                subheader={value}
                sx={{textAlign: 'center', display: 'flex', height: '260px'}}
                titleTypographyProps={{color: theme.palette.text.primary}}
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