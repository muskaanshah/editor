import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import { focusNone } from '../styles/globalStyles';
import { ProfilePopover } from './ProfilePopover';

const TopBar = ({ setDrawer }) => {
  return (
    <Box px={4} py={2} position="sticky" top="0" bg="white">
      <VStack align="flex-start">
        <HStack w="full" spacing={4}>
          <Box as="span" flexGrow={{ base: 2, md: 0 }}>
            <MenuIcon
              cursor="pointer"
              onClick={() => setDrawer(prev => !prev)}
            />
          </Box>
          <InputGroup
            flexGrow="2"
            display={{ base: 'none', md: 'inline-block' }}
          >
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input variant="filled" placeholder="Search" />
          </InputGroup>
          <HStack
            align="center"
            minWidth={{ base: 0, md: '52' }}
            cursor="pointer"
          >
            <PersonAddIcon />
            <Text display={{ base: 'none', md: 'block' }}>
              INVITE NEW MEMBERS
            </Text>
          </HStack>
          <NotificationsNoneIcon cursor="pointer" />
          <ProfilePopover marginLeft={0} />
        </HStack>
        <InputGroup flexGrow="2" display={{ base: 'inline-block', md: 'none' }}>
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input variant="filled" placeholder="Search" />
        </InputGroup>
        <HStack align="flex-start">
          <Tabs>
            <TabList sx={{ borderBottom: 'none' }}>
              <Tab sx={{ ...focusNone, width: 'max-content' }}>All</Tab>
              <Tab sx={{ ...focusNone, width: 'max-content' }}>Board</Tab>
              <Tab sx={{ ...focusNone, width: 'max-content' }}>Graph</Tab>
              <Tab sx={{ ...focusNone, width: 'max-content' }}>Recent</Tab>
            </TabList>
          </Tabs>
          <IconButton
            borderRadius={50}
            icon={<MoreVertIcon />}
            sx={focusNone}
            _hover={{ backgroundColor: 'transparent' }}
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export { TopBar };
