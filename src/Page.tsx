import React, { ReactElement } from 'react';
import { Container } from '@mui/material'
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/Stack';

const Page: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <Stack>
        <ListItem>{children}</ListItem>
      </Stack>
    </Container>

  );
}

export default Page;
