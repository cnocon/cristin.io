import React from "react";
import { ListSubheader, Card, Stack, CardHeader, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckIcon from '@mui/icons-material/Check';

const WorkHistory: React.FC<{ data: any }> = ({ data }) => {
  const theme = useTheme();
  return data.map((job: any, index: number) => {
    return (
      <Card key={`job-${index}`} variant="outlined" sx={{boxShadow: 4, p: 2}}>
        <CardHeader
          title={`${job.title}`}
          titleTypographyProps={{fontFamily: 'Oswald, serif', fontWeight: 500, textTransform: 'uppercase'}}
          subheader={
            <div>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{flexBasis: '100%', flexWrap: 'wrap'}}
              >
                {job.company} <DoubleArrowIcon sx={{color: theme.palette.secondary.main}}/> {job.location}
              </Stack>
              <div style={{textTransform: 'uppercase', fontSize: '1rem', fontWeight: 400}}>
                {job.start} - {job.end}
              </div>
            </div>
          }
          subheaderTypographyProps={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', fontFamily: 'Lato, sans-serif', fontWeight: 800, fontSize: '1.125rem'}}
        />
        <CardContent sx={{paddingTop: 0}}>
          <List>
            {job.description.map((bullet: string, index: number) => {
              return <ListItem key={bullet} sx={{alignItems: 'flex-start'}}>
                <ListItemIcon sx={{paddingTop: '9px', margin: 0, minWidth: '2rem'}}>
                  <CheckIcon sx={{fontSize: '1rem', color: theme.palette.text.primary}} />
                </ListItemIcon>

                <ListItemText primary={bullet} />
              </ListItem>
            })}
          </List>
          {job?.honors?.length > 0 && (
            <>
              <Typography sx={{letterSpacing: '1px', fontWeight: 500, fontSize: '1rem', fonitFamily: 'Oswald, sans-serif', textTransform: 'uppercase', mt: 2}}>Honors & Awards</Typography>
              <List>
                {job.honors.map((honor: any, index: number) => {return (<div key={`honor-${index}`}>
                  <ListItem sx={{ display: 'flex', flexWrap: 'wrap', textTransform: 'uppercase', fontWeight: 400, lineHeight: 1, mt: 1}}>
                    <ListItemIcon sx={{minWidth: '2rem', paddingTop: '4px', fontSize: '1rem'}}>
                      <EmojiEventsIcon sx={{color: theme.palette.secondary.main}} />
                    </ListItemIcon> {honor.name}
                  </ListItem>
                  <ListSubheader sx={{minWidth: '2rem', lineHeight: '1em', textTransform: 'none', flexBasis: '100%', paddingLeft: '3rem'}} inset>{honor.detail}</ListSubheader></div>
                )})}
              </List>
            </>
          )}
        </CardContent>
      </Card>
    )
  })
}

export default WorkHistory;