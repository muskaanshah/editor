import {
  Avatar,
  AvatarBadge,
  Button,
  Divider,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Switch,
  Text,
  VStack,
} from '@chakra-ui/react';
import { focusNone } from '../styles/globalStyles';

const activeTab = {
  px: '2',
  py: '1',
  width: 'full',
  _hover: { backgroundColor: '#f2f7f7' },
  borderRadius: '4',
  cursor: 'pointer',
};

const ProfilePopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar size="sm" cursor="pointer">
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
      </PopoverTrigger>
      <PopoverContent sx={focusNone} w="52" boxShadow="md">
        <PopoverArrow />
        <PopoverBody p={2}>
          <VStack align="flex-start" w="full" spacing={0}>
            <HStack justifyContent="space-between" px="2" py="1" width="full">
              <Text>Dark mode</Text>
              <Switch size="md" sx={focusNone} />
            </HStack>
            <Text sx={activeTab}>Profile</Text>
            <Divider />
            <Text sx={activeTab}>What's new</Text>
            <Text sx={activeTab}>Help</Text>
            <Text sx={activeTab}>Send feedback</Text>
            <Text sx={activeTab}>Hints and shortcuts</Text>
            <Divider />
            <Text sx={activeTab}>Log out</Text>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export { ProfilePopover };
