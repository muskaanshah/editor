import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Drawer, TopBar } from './components';

function App() {
  const [drawer, setDrawer] = useState(true);
  return (
    <Box>
      <TopBar setDrawer={setDrawer} />
      <Drawer />
    </Box>
  );
}

export default App;
