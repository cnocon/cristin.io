import React, { ReactElement } from 'react';
import { Container } from '@mui/material';

const Page: React.FC<{ children: ReactElement }> = ({ children }) => {

  return (
    <Container maxWidth="lg">
      {children}
    </Container>

  );
}

export default Page;
