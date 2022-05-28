import { HStack, Text } from '@chakra-ui/react';
import AddIcon from '@mui/icons-material/Add';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MainTask = () => {
  return (
    <HStack fontWeight="bold" fontSize="sm" align="center" spacing={2} w="full">
      <ExpandMoreIcon fontSize="sm" />
      <Text flexGrow={1}>Collection 1</Text>
      <AddIcon fontSize="sm" cursor="pointer" />
      <AddBoxIcon fontSize="sm" cursor="pointer" />
      <MoreVertIcon fontSize="sm" cursor="pointer" />
    </HStack>
  );
};

export { MainTask };
