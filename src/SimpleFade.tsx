import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';


const reducer = (prev: boolean): boolean => !prev

export default function SimpleFade({children}:{children:any}) {
  const [checked, dispatch] = React.useReducer(reducer, true);



  React.useEffect(() => {
    dispatch();
  }, [])



  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={{ display: 'flex' }}>
        <Fade in={checked}>{children}</Fade>
      </Box>
    </Box>
  );
}
