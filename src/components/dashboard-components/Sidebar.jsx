import { Box, Avatar, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { IoTodaySharp } from "react-icons/io5";
import { FaCalendarWeek } from "react-icons/fa6";
import { BsCalendarMonthFill } from "react-icons/bs";

const Sidebar = () => {

  return (
    <Box
      w={{ base: '50px', md: '230px' }}
      display={{ base: 'flex', sm: 'flex' }}
      justifyContent={'start'}
      alignItems={'start'}
      flexDir={'column'}
      pos={'sticky'}
      top={0}
    >
      <Box
        flexDir={'column'}
        w={'100%'}
        display={'flex'}
        justifyContent={'start'}
        gap={2}
        alignItems={'center'}
      >
        <Box p={2} w={'100%'} display={'flex'} gap={5} >
          <Avatar size={{ base: 'sm', md: 'md' }} src={'default_avatar_url.png'} />
          <Flex display={{ base: 'none', md: 'flex' }} flexDir={'column'}>
            <Text fontSize={'18px'} fontWeight={300}>{'Noma'}</Text>
            <Text fontSize={'10px'} fontWeight={275}>{'Email'}</Text>
          </Flex>
        </Box>
        <Flex w={'100%'} flexDir={'column'} >
          <NavLink to="today" style={({ isActive }) => ({ backgroundColor: isActive ? 'blue' : 'transparent', color: isActive ? 'white' : 'inherit', textDecoration: 'none', padding: '8px', borderRadius: '4px', marginBottom: '4px', })}>
            <Flex alignItems={'center'} justifyContent={'center'} gap={'3'} >
              <IoTodaySharp size={'25px'} />
              <Box w={'100%'} display={{ base: 'none', md: 'flex' }} alignItems={'center'} p={1}>Todays Challenges</Box>
            </Flex>
          </NavLink>
          <NavLink to="weekly" style={({ isActive }) => ({ backgroundColor: isActive ? 'blue' : 'transparent', color: isActive ? 'white' : 'inherit', textDecoration: 'none', padding: '8px', borderRadius: '4px', marginBottom: '4px', })}>
            <Flex alignItems={'center'} justifyContent={'center'} gap={'3'} >
              <FaCalendarWeek size={'25px'} />
              <Box w={'100%'} display={{ base: 'none', md: 'flex' }} alignItems={'center'} p={1}>Weekly Tasks</Box>
            </Flex>
          </NavLink>
          <NavLink to="monthly" style={({ isActive }) => ({ backgroundColor: isActive ? 'blue' : 'transparent', color: isActive ? 'white' : 'inherit', textDecoration: 'none', padding: '8px', borderRadius: '4px', marginBottom: '4px', })}>
            <Flex alignItems={'center'} justifyContent={'center'} gap={'3'} >
              <BsCalendarMonthFill size={'25px'} />
              <Box w={'100%'} display={{ base: 'none', md: 'flex' }} alignItems={'center'} p={1}>Monthly Tasks</Box>
            </Flex>
          </NavLink>
          <Box
            w={'100%'}
            display={'flex'}
            alignItems={'center'}
            p={1}
            justifyContent={'space-between'}
            mt={4}
          >
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
