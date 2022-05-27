import React, { useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Drawer, EditableDiv, TopBar } from './components';

function App() {
  const [drawer, setDrawer] = useState(true);

  return (
    <Box maxW="100vw">
      <TopBar setDrawer={setDrawer} />
      {/* <HStack w="full" justifyContent="flex-start" alignItems="flex-start"> */}
      <Drawer setDrawer={setDrawer} drawer={drawer} />
      <EditableDiv drawer={drawer} />
      {/* </HStack> */}
    </Box>
  );
}

export default App;
