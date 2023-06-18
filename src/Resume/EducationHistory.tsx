import React from "react";
import { ListSubheader, Card, Stack, CardHeader, CardContent, List, ListItem, ListItemIcon, useTheme, Typography } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const EducationHistory: React.FC<{ data: any }> = ({ data }) => {
  const theme = useTheme();

  return data.map((edu: any, index: number) => {
    return (
      <Card key={`edu-${index}`} sx={{width: '100%'}}>
        <CardHeader
          title={edu.title}
          titleTypographyProps={{fontFamily: 'Oswald, serif', fontWeight: 500, textTransform: 'uppercase'}}
          subheader={
            <div>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{flexBasis: '100%', flexWrap: 'wrap'}}
              >
                {edu.school} <DoubleArrowIcon sx={{color: theme.palette.secondary.main}}/> {edu.location}
              </Stack>
              <div style={{textTransform: 'uppercase', fontSize: '1rem', fontWeight: 400}}>
                {edu.start} - {edu.end}
              </div>
            </div>
          }
          subheaderTypographyProps={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', fontFamily: 'Lato, sans-serif', fontWeight: 800, fontSize: '1.125rem'}}
        />


          {edu?.honors?.length > 0 && (

            <CardContent sx={{paddingTop: 0}}>
              <Typography sx={{letterSpacing: '1px', fontWeight: 500, fontSize: '1rem', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase'}}>Honors & Awards</Typography>
              <List>
                {edu.honors.map((honor: any, index: number) => {return (
                  <ListItem key={`honor-${index}`} sx={{ display: 'flex', flexWrap: 'wrap', textTransform: 'uppercase', fontWeight: 400}}>
                    <ListItemIcon>
                      <EmojiEventsIcon sx={{color: theme.palette.secondary.main}} />
                    </ListItemIcon> {honor.name}
                    <ListSubheader sx={{lineHeight: 1.25, textTransform: 'none', flexBasis: '100%', marginLeft: '-1rem'}} inset>{honor.detail}</ListSubheader></ListItem>
                )})}
              </List>
            </CardContent>
          )}
      </Card>
    )
  })
}

export default EducationHistory;