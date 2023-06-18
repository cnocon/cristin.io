import React from "react";
import { ListSubheader, Card, Stack, CardHeader, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
// import AddIcon from '@mui/icons-material/Add';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckIcon from '@mui/icons-material/Check';

const WorkHistory: React.FC<{ data: any }> = ({ data }) => {
  const theme = useTheme();
  return data.map((job: any, index: number) => {

    const titleString = `${job.title}`;// – ;

    return (
      <Card key={`job-${index}`} variant="outlined">
        <CardHeader
          title={titleString}
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
              return <ListItem>
                <ListItemIcon>
                  <CheckIcon sx={{color: theme.palette.secondary.main}} />
                </ListItemIcon>

                <ListItemText primary={bullet} />
              </ListItem>
            })}
          </List>
          {job?.honors?.length > 0 && (
            <>
              <Typography sx={{letterSpacing: '1px', fontWeight: 500, fontSize: '1rem', fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase'}}>Honors & Awards</Typography>
              <List>
                {job.honors.map((honor: any, index: number) => {return (
                  <ListItem key={`honor-${index}`} sx={{ display: 'flex', flexWrap: 'wrap', textTransform: 'uppercase', fontWeight: 400}}>
                    <ListItemIcon>
                      <EmojiEventsIcon sx={{color: theme.palette.secondary.main}} />
                    </ListItemIcon> {honor.name}
                    <ListSubheader sx={{lineHeight: 1.25, textTransform: 'none', flexBasis: '100%', marginLeft: '-1rem'}} inset>{honor.detail}</ListSubheader></ListItem>
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