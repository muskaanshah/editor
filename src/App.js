import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Drawer, TopBar } from './components';

function App() {
  const [drawer, setDrawer] = useState(true);

  return (
    <Box>
      <TopBar setDrawer={setDrawer} />
      <Drawer setDrawer={setDrawer} drawer={drawer} />
    </Box>
  );
}

export default App;
