import React from "react";
import { Card, CardHeader, Container, Link, Stack, Typography, useTheme, CardActionArea, Box } from "@mui/material";
import data from "../data";
import { iconDictionary } from "../constants";
import PageHeader from "../PageHeader";
const Contact = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <PageHeader title="Contact" />
      <Stack direction="column" sx={{minHeight: '40vh', height: '100%',  margin: 'auto', justifyContent: 'center'}}>
        <Stack direction="row" justifyContent="center" spacing={0} flexWrap="wrap" useFlexGap>
        {data.contact.map((contact) => {
          const { label, link, value, icon } = contact;
          const ContactIcon = iconDictionary[icon];
          return <Card
            key={label}
            sx={{
              height: {xs: 'auto', md: 'auto'},
              flexBasis: {xs: '100%', sm: 'calc(100% - 32px)', md: 'calc(25% - 32px)', lg: 'calc(17% - 32px)'},
              display: 'flex',
              borderRadius: '4px',
              bgcolor: 'transparent',//theme.palette.primary.light,
              boxShadow: 0,
              padding: 0,
              color: theme.palette.getContrastText(theme.palette.primary.light),
              transform: 'background-color',
              transition: 'ease .2s',
              '&:hover': {
                color: theme.palette.getContrastText(theme.palette.primary.light),
                bgcolor: theme.palette.primary.light,
              }
            }}
          >
            <CardActionArea>
              <Link href={link} target="_blank" sx={{textDecoration: 'none', color: 'inherit'}}>
              <CardHeader
                title={<>
                  <Box style={{width: '100%'}}>
                    <ContactIcon
                      sx={{border: '4px solid ' + theme.palette.secondary.main, color: theme.palette.secondary.main, backgroundColor: theme.palette.primary.dark, width: '50px', height: '50px', borderRadius: '50%', padding: '8px'}}
                    />
                  </Box>
                    {label}
                  </>
                }
                subheader={value}
                sx={{color: "inherit", textAlign: 'center', display: 'flex', fontWeight: 400,
                }}
                titleTypographyProps={{color: 'inherit', fontWeight: 500}}
                subheaderTypographyProps={{color: theme.palette.text.disabled,fontWeight: 400}}
              />
              </Link>
            </CardActionArea>
          </Card>
        })}
      </Stack>
      </Stack>
    </Container>
  )
}

export default Contact;