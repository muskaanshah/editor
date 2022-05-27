import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import AddIcon from '@mui/icons-material/Add';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import '../index.css';
import { MainTask } from './MainTask';

const Drawer = ({ setDrawer, drawer }) => {
  return (
    <Box
      className={`${drawer ? 'drawer-open' : 'drawer-close'}`}
      background="gray.150"
      position="fixed"
      left={0}
      px={4}
      py={2}
      w="250px"
      maxH="calc(100vh - 104px)"
      minH="calc(100vh - 104px)"
    >
      <HStack w="full" color="gray.700">
        <Text fontSize="sm" flexGrow="1">
          DFIN
        </Text>
        <AddIcon fontSize="sm" cursor="pointer" />
        <OpenInFullIcon fontSize="sm" cursor="pointer" />
        <MenuOpenIcon
          fontSize="sm"
          cursor="pointer"
          onClick={() => setDrawer(prev => !prev)}
        />
      </HStack>
      <VStack align="flex-start" spacing={2} py={2}>
        <MainTask />
        <Text fontSize="sm" pl={8}>
          Collection 1.1
        </Text>
      </VStack>
    </Box>
  );
};

export { Drawer };
