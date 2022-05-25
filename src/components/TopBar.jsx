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

const TopBar = ({ setDrawer, drawerOnToggle }) => {
  return (
    <Box px={4} py={2} position="sticky" top="0">
      <VStack align="flex-start">
        <HStack w="full" spacing={4}>
          <MenuIcon cursor="pointer" onClick={() => setDrawer(prev => !prev)} />
          <InputGroup flexGrow="2">
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
          <ProfilePopover />
        </HStack>
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
