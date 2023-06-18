import React from "react";
import { Card, Stack, CardHeader, CardContent, List, ListItem, ListItemIcon, useTheme, Typography, ListItemText } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const EducationHistory: React.FC<{ data: any }> = ({ data }) => {
  const theme = useTheme();

  return data.map((edu: any, index: number) => {
    return (
      <Card key={`edu-${index}`} sx={{width: '100%', boxShadow: 4, p: 2}} variant="outlined">
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
            <Typography sx={{letterSpacing: '1px', fontWeight: 500, fontSize: '1rem', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase', mt: 0}}>Honors & Awards</Typography>
            <List>
              {edu.honors.map((honor: any, index: number) => {return (
                <ListItem key={`honor-${index}`} sx={{ display: 'flex', flexWrap: 'nowrap', textTransform: 'uppercase', fontWeight: 400}}>
                  <ListItemIcon>
                    <EmojiEventsIcon sx={{color: theme.palette.secondary.main}} />
                  </ListItemIcon>
                  <ListItemText>{honor.name} <Typography sx={{textTransform: 'none', lineHeight: 1, mt: 1}}>{honor.detail}</Typography> </ListItemText>
                </ListItem>
              )})}
            </List>
          </CardContent>
        )}
      </Card>
    )
  })
}

export default EducationHistory;