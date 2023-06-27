import React from "react";
import { Card, CardHeader, Container, Link, Stack, Typography, useTheme, CardActionArea, Box } from "@mui/material";
import data from "../data";
import { iconDictionary } from "../constants";

const Contact = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Typography sx={{fontWeight: 300, fontFamily: "Oswald, Impact, sans-serif", mb: 4}}>Home &gt; Contact</Typography>
      <Stack direction="row" justifyContent="flex-start" spacing={5} flexWrap="wrap" useFlexGap>
        {data.contact.map((contact) => {
          const { label, link, value, icon } = contact;
          const ContactIcon = iconDictionary[icon];
          return <Card
            variant="outlined"
            key={label}
            sx={{
              height: {xs: 'auto', md: '268px'},
              flexBasis: {xs: '100%', sm: 'calc(100% - 32px)', md: 'calc(25% - 32px)'},
              boxShadow: 3,
              display: 'flex',
              bgcolor: theme.palette.primary.light,
              padding: 0,
              color: theme.palette.getContrastText(theme.palette.primary.light),
              '&:hover': {
                color: theme.palette.getContrastText(theme.palette.primary.dark),
                bgcolor: theme.palette.primary.dark,
              }
            }}
          >
            <CardActionArea>
              <Link href={link} target="_blank" sx={{textDecoration: 'none', color: 'inherit'}}>
              <CardHeader
                title={<>
                  <Box style={{width: '100%'}}>
                    <ContactIcon
                      sx={{border: '2px solid ' + theme.palette.secondary.main, color: theme.palette.secondary.main, backgroundColor: theme.palette.primary.dark, width: '50px', height: '50px', borderRadius: '50%', padding: '10px'}}
                    />
                  </Box>
                    {label}
                  </>
                }
                subheader={value}
                sx={{color: "inherit", textAlign: 'center', display: 'flex'
                }}
                titleTypographyProps={{color: "inherit"}}
                subheaderTypographyProps={{color: "inherit"}}
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